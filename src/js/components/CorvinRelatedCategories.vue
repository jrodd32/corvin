<template>
  <div class="related-categories container">
    <div class="content-wrapper">
      <h2>
        Having second thoughts about {{ currentCategory }}?
        <doe-link
          class="cta-link"
          href="/shop"
          is-anchor
          text="Try›"
        />
      </h2>

      <corvin-categories :categories="categories" />
    </div>
  </div>
</template>

<script>
  import CorvinCategories from './CorvinCategories.vue';

  export default {
    components: {
      CorvinCategories,
    },
    props: {
      categories: {
        type: Array,
        default() {
          return [];
        },
      },
      currentCategory: {
        type: String,
        default() {
          return '';
        },
      },
    },
    computed: {
      hasCategories() {
        return this.categories.length > 0;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .related-categories {
    background-color: $cream;
    padding-bottom: $u6;
    padding-top: $u6;
    padding-left: $u6;
    padding-right: $u6;
  }

  /deep/ .category {

    .category-image {
      max-height: 22.9rem;
      overflow: hidden;
      margin-bottom: -3rem;
    }

    .link {
      margin-right: $u6;
      margin-top: 0;
    }

    .category-description {
      display: none;
    }

    .category-content {
      border-bottom: none;
      display: flex;
      justify-content: flex-end;
      padding-right: 0;
      position: relative;
      z-index: 20;
    }

    .read-more {
      @include font-secondary;
      display: inline-flex;
      align-items: center;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
      padding-right: $button-padding;
      padding-left: $button-padding;
      height: $button-height;
      color: $white;
      border-width: $button-border-size;
      border-style: solid;
      border-radius: $button-border-radius;
      border-color: $primary;
      background-color: $primary;
      text-decoration: none;
      font-size: $button-font-size;
      font-weight: $font-weight;
      line-height: $button-line-height;
      white-space: nowrap;
      vertical-align: middle;
      transition-duration: $button-transition-duration;
      transition-timing-function: ease;
      transition-property: background-color, color, border, box-shadow;
      cursor: pointer;

      &:hover {
        background-color: darken($primary, 10%);
      }
    }

    @include tablet() {
      padding-top: 0;
    }
  }

  .cta-link {
    color: $orange;
    text-decoration: underline;

    &:hover {
      color: darken($orange, 10%);
    }
  }

  @include tablet() {
    .related-categories {
      padding-bottom: 6rem;
      padding-top: 6rem;
    }

    .categories {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      width: 100%;

      .category {
        flex: 0 1 calc(33% - #{$u6});
        margin-right: $u6;

        &:nth-child(3) {
          margin-right: 0;
        }

        /deep/ .category-content {
          border-bottom: 0;
        }
      }
    }
  }

  @include desktop() {
    .related-categories {
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 10rem;
      padding-top: 10rem;
    }

    .content-wrapper {
      align-items: center;
      display: flex;
      flex-flow: row nowrap;

      h2 {
        flex: 0 1 22vw;
        margin-bottom: 0;
        padding: 0 $u10;
      }
    }
  }
</style>
