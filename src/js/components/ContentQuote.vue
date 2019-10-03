<template>
  <div class="content-and-quote">
    <div
      v-html="item.content"
      class="content"
    />

    <aside class="pull-quote">
      <blockquote>
        <span v-html="item.sidebarHeadline" />
        <div v-html="item.sidebarContent" />
      </blockquote>
    </aside>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default() {
          return {};
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .content-and-quote {
    margin-bottom: $u10;
    padding-bottom: $u10;

    .pull-quote {
      color: $tertiaryBlue;
      font-family: $font-primary;
      font-size: 3rem;
      line-height: 1;

      span {
        color: $primaryBlue;
        display: block;
      }
    }

    @include tablet() {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;

      .content {
        flex: 1 1 60%;
      }

      .pull-quote {
        margin-left: $u6;
        flex: 1 1 calc(40% - #{$u6});

        blockquote {
          margin-top: 0;
        }
      }
    }

    @include desktop() {
      .content {
        flex: 1 1 50%;
      }

      .pull-quote {
        flex: 1 1 calc(50% - #{$u12});
        margin-left: $u12;
        font-size: 4rem;
        padding: 0 4rem;
      }
    }
  }
</style>