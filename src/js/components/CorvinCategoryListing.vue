<template>
  <div class="category">
    <h2 class="category-title">
      <doe-link
        v-html="category.title"
        :href="category.uri"
      />
    </h2>

    <div class="category-image">
      <doe-link
        :href="category.uri"
        class="overlay-effect"
      >
        <div></div>
      </doe-link>

      <base-picture :picture="category.background" />
    </div>

    <div class="category-content">
      <p
        v-html="category.shortDescription"
        class="category-description"
      />

      <doe-link
        :href="category.uri"
        class="read-more"
        is-anchor
      >
        Read More
      </doe-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      category: {
        type: Object,
        default() {
          return {};
        },
      },
    },
  };
</script>

<style lang="scss" scoped>
  .overlay-effect {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(75, 83, 87, 0.85);
    z-index: 1;

    div {
      background-image: url('../../images/shopping-bag-icon.svg');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 4rem;
      height: 100%;
      width: 100%;
    }
  }

  .category {
    padding-left: $u2;
    padding-right: $u2;
    padding-top: $u6;

    .category-title {
      margin-bottom: 0;

      a {
        display: block;
        font-size: 2.4rem;
        overflow-wrap: break-word;
        word-wrap: break-word;
        hyphens: auto;
      }
    }

    .category-image {
      position: relative;
      margin-bottom: 3rem;

      .overlay-effect {
        height: 100%;
      }

      &:hover {
        .overlay-effect {
          opacity: 1;
        }
      }
    }

    .category-content {
      border-bottom: 1px solid $tertiaryBlue;
      padding-bottom: 3rem;
      padding-left: 3rem;
      padding-right: 3rem;
      color: $font-color-dark;
    }

    .category-content p {
      margin-bottom: 0;

      span {
        color: $font-color-dark;
        font-weight: normal;
      }
    }

    .link {
      margin-top: $u6;
    }

    @media screen and (min-width: 414px) {
      .category-content {
        display: flex;
        flex-flow: row wrap;
      }

      .details {
        flex: 1 1 calc(50% - 6rem);
        margin-right: $u4;
      }

      .link {
        margin-top: 0;
      }
    }

    @include tablet() {
      padding-top: $u10;
    }
  }
</style>
