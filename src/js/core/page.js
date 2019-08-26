const ajaxPageProps = {
  props: {
    forceAjax: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      data: {},
      handle: null,
      loadedViaJson: false,
      loading: !(window.data && window.data.page && window.data.page.url && window.data.page.url === window.location.href.split('?')[0]),
      slug: null,
      url: null
    };
  },
  created() {
    this.loadData();
  },
  beforeMount() {
    if (this.loadedViaJson) {
      this.loading = false;
    }
  },
  activated() {
    this.updateHead();
  },
  methods: {
    afterLoadData() {}, // NOTE: useful for running methods after data is present
    loadData(url = null, updateHead = true) {
      if (!this.forceAjax) {
        if (window.data && window.data.page && window.data.page.url && window.data.page.url === window.location.href.split('?')[0]) {
          this.data = window.data.page;
          this.loadedViaJson = true;
          this.afterLoadData();

          if (updateHead) {
            this.updateHead();
          }

          return;
        }
      }

      // Parse handle and slug from current url
      const pathParts = window.location.pathname.split('/');
      pathParts.shift();

      let handle = pathParts[0];
      let slug = pathParts[1];

      // If handle isn't present, use the home page handle
      if (handle.length === 0) {
        handle = 'home';
      }

      // Allows components to override the URL's handle or slug
      if (this.handle) {
        handle = this.handle;
      }

      if (this.slug) {
        slug = this.slug;
      }

      // Combine handle and slug into one URL string
      const pageEndpoint = slug === undefined ? `${handle}` : `${handle}/${slug}`;

      this.$axios.get(url || this.url || `/v1/${pageEndpoint}`)
        .then((response) => {
          this.data = response.data;

          if (this.data.status) {
            // TODO: revert once pages exist in CMS
            // this.$eventBus.$emit('error', 404);
            this.loading = false;
            return;
          }

          this.afterLoadData();

          if (updateHead) {
            this.updateHead();
          }

          this.loading = false;

          if (this.$prerender) {
            this.$eventBus.$emit('page-loaded', this.data.lastUpdated);
          }
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('Data:');
            console.log(error.response.data);
            console.log('Status:');
            console.log(error.response.status);
            console.log('Headers:');
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log('Request:');
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log('Config:');
          console.log(error.config);

          if (error.response && error.response.status === 404) {
            this.$eventBus.$emit('error', 404);
            return;
          }

          this.$eventBus.$emit('error', 500, error);
        });
    },
    updateHead() {
      let title = 'Corvin\'s Furniture of Bardstown';
      let description = '';
      let image = `${this.$cdnUrl}/images/og-image.jpg`;

      if (this.data && this.data.meta && this.data.meta.title) {
        title = `${this.data.meta.title}`;
      }

      if (this.data && this.data.meta && this.data.meta.description) {
        description = this.data.metaDescription;
      }

      if (this.data && this.data.meta && this.data.meta.socialImage && this.data.meta.socialImage.url) {
        image = this.data.socialImage.url;
      }

      document.title = title;
      document.head.querySelector('meta[property="og:title"]').content = title;
      document.head.querySelector('meta[name="twitter:title"]').content = title;
      document.head.querySelector('meta[itemprop="name"]').content = title;

      document.head.querySelector('meta[name="description"]').content = description;
      document.head.querySelector('meta[property="og:description"]').content = description;
      document.head.querySelector('meta[name="twitter:description"]').content = description;
      document.head.querySelector('meta[itemprop="description"]').content = description;

      document.head.querySelector('meta[property="og:url"]').content = window.location.href;
      document.head.querySelector('meta[name="twitter:url"]').content = window.location.href;

      document.head.querySelector('meta[property="og:image"]').content = image;
      document.head.querySelector('meta[name="twitter:image:src"]').content = image;
      document.head.querySelector('meta[itemprop="image"]').content = image;

      if (this.data && this.data.canonicalUrl) {
        // Has a canonical URL, update if the tag is there,
        // or create one if not
        if (document.head.querySelector("[rel='canonical']")) {
          document.head.querySelector("[rel='canonical']").href = this.data.canonicalUrl;
        } else {
          const canonicalLink = document.createElement('link');
          canonicalLink.rel = 'canonical';
          canonicalLink.href = this.data.canonicalUrl;
          document.head.appendChild(canonicalLink);
        }
      } else if (document.head.querySelector("[rel='canonical']")) {
        // Doesn't have a canconical Url, so remove the tag
        // if it exists
        const canonicalLink = document.head.querySelector("[rel='canonical']");
        canonicalLink.parentNode.removeChild(canonicalLink);
      }

      if (this.data) {
        this.$eventBus.$emit('set-breadcrumb', this.data.title);
      }
    }
  }
};

const nonAjaxPageProps = {
  data() {
    return {
      metaTitle: null,
      metaDescription: null,
      socialImage: null
    };
  },
  created() {
    this.updateHead();
  },
  mounted() {
    if (this.$prerender) {
      this.$eventBus.$emit('page-loaded', 'na');
    }
  },
  activated() {
    this.updateHead();
  },
  methods: {
    updateHead() {
      let title = 'Corvin Furniture of Bardstown';
      let description = '';
      let image = `${this.$cdnUrl}/images/og-image.jpg`;

      if (this.metaTitle) {
        title = `${this.metaTitle}`;
      }

      if (this.metaDescription) {
        description = this.metaDescription;
      }

      if (this.socialImage) {
        image = this.data.socialImage;
      }

      document.title = title;
      document.head.querySelector('meta[property="og:title"]').content = title;
      document.head.querySelector('meta[name="twitter:title"]').content = title;
      document.head.querySelector('meta[itemprop="name"]').content = title;

      document.head.querySelector('meta[name="description"]').content = description;
      document.head.querySelector('meta[property="og:description"]').content = description;
      document.head.querySelector('meta[name="twitter:description"]').content = description;
      document.head.querySelector('meta[itemprop="description"]').content = description;

      document.head.querySelector('meta[property="og:url"]').content = window.location.href;
      document.head.querySelector('meta[name="twitter:url"]').content = window.location.href;

      document.head.querySelector('meta[property="og:image"]').content = image;
      document.head.querySelector('meta[name="twitter:image:src"]').content = image;
      document.head.querySelector('meta[itemprop="image"]').content = image;
    }
  }
};

export {
  ajaxPageProps,
  nonAjaxPageProps
};
