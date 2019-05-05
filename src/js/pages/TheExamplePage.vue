<template>
  <main class="page page-example">
    <div class="content">
      <p>
        <doe-link
          href="/elements"
          is-anchor
        >
          &larr; Back to elements
        </doe-link>
      </p>

      <h1>Headline 1</h1>

      <p>Cursus vulputate varius placerat phasellus vehicula torquent id proin, gravida platea convallis netus magna semper quisque penatibus sociis, nibh auctor mi accumsan ad mattis tincidunt litora senectus, taciti fusce feugiat pulvinar.</p>

      <doe-list
        :items="[
          'Taciti rhoncus imperdiet',
          'Phasellus mattis elementum cum augue',
          'Mollis posuere primis vestibulum'
        ]"
      />

      <h2>Headline 2</h2>

      <p>Regular ole paragraph text, but it has <a href="#link">a link in it.</a> Quam luctus integer magna suspendisse nisi, justo nisl aenean lobortis litora senectus, taciti fusce feugiat pulvinar. Senectus cubilia maecenas ultricies tellus.</p>

      <contact-form />
    </div>

    <div class="showcase">
      <div>
        <img src="http://satyr.io/1000x1:1" />
      </div>

      <div>
        <h3>Headline 3</h3>
        <p>Rhoncus ridiculus himenaeos netus eleifend cursus sagittis ante leo purus facilisis litora, in vulputate imperdiet primis natoque sociosqu pharetra bibendum quisque ad, vehicula senectus accumsan.</p>

        <doe-link
          text="Button text"
        />
      </div>
    </div>

    <div class="content">
      <h4>Headline 4</h4>

      <p>Vitae purus senectus malesuada metus laoreet nibh ornare at, nascetur fames sodales urna auctor ac quis taciti tempor, curae posuere neque.</p>

      <doe-list
        :items="[
          'Taciti rhoncus imperdiet',
          'Phasellus mattis elementum cum augue',
          'Mollis posuere primis vestibulum'
        ]"
        is-ordered
      />

      <p>Regular ole paragraph text, but it has <a href="#link">a link in it.</a> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum fugit cupiditate nam id eaque? Dolorem placeat nostrum ipsa maxime eum deserunt dignissimos!</p>

      <h5>
        <a href="#link">Headline 5</a>
      </h5>
      <p>Ligula primis pharetra suscipit lacinia fusce proin sollicitudin nisl, accumsan curabitur euismod lobortis nulla nibh nec nisi, felis montes tempus.</p>

      <h6>
        <a href="#link">Headline 6</a>
      </h6>
      <p>Ligula primis pharetra suscipit lacinia fusce proin sollicitudin nisl, accumsan curabitur euismod lobortis nulla nibh nec nisi, felis montes tempus.</p>
    </div>
  </main>
</template>

<script>
  import ContactForm from '../components/forms/ContactForm.vue';

  export default {
    components: {
      ContactForm
    },
    created() {
      this.$nextTick(() => {
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
      });
    },
    mounted() {
      document.title = 'Example';
      this.$eventBus.$emit('page-loaded');
    }
  };
</script>

<style lang="scss" scoped>
  .page-example {
    .content {
      max-width: 76rem;
      margin: 0 auto;
      padding: $u8;

      > *:first-child {
        margin-top: 0;
      }

      h1,h2,h3,h4,h5,h6 {
        margin-top: $u10;
      }
    }

    .showcase {
      background-color: #f1f1f1;
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 0 auto;

      > div {
        margin: 0 $u6;
        max-width: 55rem;
        flex: 1;
      }
    }

    > * {
      margin-bottom: $u5 !important;

      &:first-child {
        margin-top: 0 !important;
      }
    }
  }

  hr {
    margin: $u9 0;
    border-width: 0 0 1px;
    border-style: solid;
    border-color: rgba(0,0,0,.5);
  }
</style>
