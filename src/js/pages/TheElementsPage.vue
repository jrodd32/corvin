<template>
  <main class="page page-elements is-gapless">
    <div class="elements-header">
      <span>Base Site</span>
      <span>Global Design Elements v0.0</span>
      <doe-link is-anchor href="/example">View example</doe-link>
    </div>

    <div class="elements-body">
      <doe-columns :animate-in="false">
        <doe-column>
          <div class="elements-section">
            <div class="element-headline">Typography</div>
            <div class="elements-group elements-group-typography">
              <h1>Heading 1</h1>
              <div class="element-note">Font: / Size: </div>

              <h2>Heading 2</h2>
              <div class="element-note">Font:  / Size: </div>

              <h3>Heading 3</h3>
              <div class="element-note">Font:  / Size: </div>

              <h4>Heading 4</h4>
              <div class="element-note">Font:  / Size: </div>

              <h5>Heading 5</h5>
              <div class="element-note">Font:  / Size: </div>

              <h6>Heading 6</h6>
              <div class="element-note">Font:  / Size: </div>

              <p>This paragraph contains a sentence with <strong>bold</strong> and <em>itatlic</em> styling. Phasellus pharetra urna sit amet tellus elementum aliquet in et quam. In condimentum dui. uctor lobortis dictumst convallis cubilia elementum duis sapien euismod velit sed, montes fusce nunc magna lacinia mattis sem cras purus nam integer.</p>
              <div class="element-note">Font: / Size: </div>

              <a href="#">This is a text link</a>
              <div class="element-note">Font: / Size: </div>
            </div>
          </div>

          <div class="elements-section">
            <div class="element-headline">Color</div>

            <div class="elements-group elements-group-color">
              <div class="element-color is-black is-reverse">
                <span>Black</span>
                <span>rgba(1, 1, 1, 1)</span>
                <span>#000</span>
              </div>
            </div>
          </div>

          <div class="elements-section">
            <div class="element-headline">List</div>

            <div class="elements-group">
              <doe-columns :animate-in="false">
                <doe-column>
                  <div class="element-subheadline">Unordered</div>
                  <doe-list
                    :items="[
                      'This is the first list item',
                      'Second list item',
                      'Third list item'
                    ]"
                  />
                  <doe-list
                    :items="[
                      'This is the first list item',
                      'Second list item',
                      'Third list item'
                    ]"
                  />
                  <doe-list
                    :items="[
                      'This is the first list item',
                      'Second list item',
                      'Third list item'
                    ]"
                  />
                </doe-column>

                <doe-column>
                  <div class="element-subheadline">Ordered</div>
                  <doe-list
                    :items="[
                      'This is the first list item',
                      'Second list item',
                      'Third list item'
                    ]"
                    is-ordered
                  />

                  <doe-list
                    :items="[
                      'This is the first list item',
                      'Second list item',
                      'Third list item'
                    ]"
                    is-ordered
                  />

                  <doe-list
                    :items="[
                      'This is the first list item',
                      'Second list item',
                      'Third list item'
                    ]"
                    is-ordered
                  />
                </doe-column>
              </doe-columns>
            </div>
          </div>
        </doe-column>

        <doe-column>
          <div class="elements-section">
            <div class="element-headline">Forms</div>

            <div class="elements-group">
              <div class="element-subheadline">Input</div>
              <doe-columns :animate-in="false">
                <doe-column>
                  <doe-input
                    v-model="form.email"
                    field="email"
                    label="Email address"
                    placeholder="example@domain.com"
                    required
                    type="email"
                  />
                </doe-column>

                <doe-column>
                  <doe-input
                    id="email2"
                    v-model="form.email2"
                    field="email"
                    label="Email address"
                    required
                    type="email"
                  />
                </doe-column>
              </doe-columns>
            </div>

            <div class="elements-group">
              <div class="element-subheadline">Select</div>
              <doe-columns :animate-in="false">
                <doe-column>
                  <doe-select
                    v-model="form.select"
                    :options="[
                      { value: 'option1', text: 'Option 1' },
                      { value: 'option2', text: 'Option 2' },
                      { value: 'option3', text: 'Option 3' },
                      { value: 'option4', text: 'Option 4' }
                    ]"
                    field="select"
                    required
                  />
                </doe-column>

                <doe-column>
                  <doe-select
                    v-model="form.select2"
                    :options="[
                      { value: 'option1', text: 'Option 1' },
                      { value: 'option2', text: 'Option 2' },
                      { value: 'option3', text: 'Option 3' },
                      { value: 'option4', text: 'Option 4' }
                    ]"
                    field="subject2"
                    label="Select"
                    required
                  />
                </doe-column>
              </doe-columns>
            </div>

            <div class="elements-group">
              <div class="element-subheadline">Text area</div>
              <doe-input
                v-model="form.textarea"
                field="message"
                type="textarea"
              />
            </div>

            <div class="elements-group">
              <doe-columns :animate-in="false">
                <doe-column>
                  <div class="element-subheadline">Checkbox</div>
                  <doe-checkbox
                    v-model="form.checkbox"
                    field="checkbox"
                    value="checkbox"
                    label="This is a checkbox"
                  />

                  <doe-checkbox
                    v-model="form.checkbox2"
                    field="checkbox2"
                    value="checkbox"
                    label="This is a checked checkbox"
                  />

                  <doe-checkbox
                    v-model="form.checkbox3"
                    disabled
                    field="checkbox3"
                    value="checkbox"
                    label="This is a disabled checkbox"
                  />

                  <doe-checkbox
                    v-model="form.checkbox4"
                    disabled
                    field="checkbox4"
                    value="checkbox"
                    label="This is a disabled checked checkbox"
                  />
                </doe-column>

                <doe-column>
                  <div class="element-subheadline">Radiobox</div>
                  <doe-radio
                    v-model="form.radio"
                    value="option1"
                    field="option"
                    label="This is a radiobox"
                  />

                  <doe-radio
                    v-model="form.radio"
                    value="option2"
                    field="option"
                    label="This is a checked radiobox"
                  />

                  <doe-radio
                    v-model="form.radio"
                    value="option3"
                    field="option"
                    label="This is a disabled radiobox"
                  />
                </doe-column>
              </doe-columns>
            </div>

            <div class="elements-group">
              <div class="element-subheadline">Toggle</div>

              <doe-checkbox
                v-model="form.toggle"
                field="toggle"
                value="toggle"
                label="This is an deactive toggle"
                toggle
              />

              <doe-checkbox
                v-model="form.toggle2"
                field="toggle2"
                value="toggle"
                label="This is an active toggle"
                toggle
              />

              <doe-checkbox
                v-model="form.toggle3"
                disabled
                field="toggle3"
                value="toggle"
                label="This is a disabled active toggle"
                toggle
              />
            </div>

            <div class="elements-group">
              <div class="element-subheadline">Buttons</div>
              <doe-buttons-wrapper>
                <doe-link
                  text="Link"
                  to="/"
                />
              </doe-buttons-wrapper>
            </div>
          </div>

          <div class="elements-section">
            <div class="element-headline">CTA</div>
            <!-- TODO: add CTA -->
          </div>

          <div class="elements-section">
            <div class="element-headline">Notification</div>
            <div class="elements-group">
              <doe-notification
                :content="{
                  p: 'This is the black notification with  close'
                }"
                has-close
                is-black
              />

              <doe-notification
                :content="{
                  p: 'This is the white notification with close'
                }"
                has-close
                is-white
              />
            </div>
          </div>

          <div class="elements-section">
            <div class="element-headline">Icons</div>
            <div class="element-note">
            </div>
            <div class="elements-group elements-group-icons">
              <!-- TODO: add icons -->
            </div>
          </div>
        </doe-column>
      </doe-columns>
    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          email2: 'warwick@doeanderson.com',
          select: '',
          select2: 'option2',
          textarea: 'This is where the message goes, Phasellus pharetra urna sit amet tellus elementum aliquet in et quam. In condimentum dui. uctor lobortis dictumst convallis cubilia elementum duis sapien euismod velit sed.',
          checkbox: false,
          checkbox2: true,
          checkbox3: false,
          checkbox4: true,
          radio: 'option2',
          toggle: false,
          toggle2: true,
          toggle3: true
        }
      };
    },
    created() {
      this.$nextTick(() => {
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
      });
    },
    mounted() {
      document.title = 'Global Design Elements';
      this.$eventBus.$emit('page-loaded');
    }
  };

</script>

<style lang="scss" scoped>
  $elements-font: "SFUIText-Regular", -apple-system, "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", sans-serif;

  .elements-header {
    background-color: #000;
    padding: 4rem;
    position: relative;
    font-size: 18px;
    color: #fff;

    @include desktop() {
      padding: 4rem 6rem;
    }

    > span {
      display: block;

      &:last-of-type {
        font-size: 26px;
      }
    }

    > a {
      color: #fff;
      position: absolute;
      right: 4rem;
      top: 4rem;
    }
  }

  .elements-body {
    padding: 4rem;

    @include desktop() {
      padding: 6rem;
    }
  }

  .elements-section {
    &:not(:first-of-type) {
      margin-top: 8rem;
    }
  }

  .elements-group {
    margin-bottom: 4rem;
  }

  .elements-group-typography {
    > h1,
    > h2,
    > h3,
    > h4,
    > h5,
    > h6,
    > p {
      margin-bottom: 0;
    }
  }

  .elements-group-color {
    display: grid;
    grid-gap: 2.4rem;
    font-family: $elements-font;

    @include desktop() {
      grid-template-columns: 1fr 1fr;
    }
  }

  .elements-group-icons {
    font-size: 4.2rem;
  }

  .element-headline {
    margin-bottom: 4rem;
    padding-bottom: 3rem;
    font-size: 2rem;
    font-family: $elements-font;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(0,0,0,.25);

    a {
      text-transform: lowercase;
      font-size: 1.4rem;
    }
  }

  .element-subheadline {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-family: $elements-font;
    text-transform: uppercase;
    color: rgba(0,0,0,.5);
  }

  .element-note {
    margin: .5rem 0 2rem;
    font-size: 1.4rem;
    color: rgba(0,0,0,.5);

    a {
      color: currentColor;
    }
  }

  .element-color {
    color: #fff;
    font-size: 1.3rem;
    padding: 2rem 3rem 10.5rem;
    position: relative;

    &:before,
    &:after {
      position: absolute;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      height: 4rem;
      padding: 0 3rem;
    }

    &:before {
      bottom: 4rem;
      content: "Darken 5%";
    }

    &:after {
      bottom: 0;
      content: "Darken 10%";
    }

    @include getStyle() {
      background-color: $color;
      color: #fff;

      &:before {
        background-color: darken($color, 5%);
      }

      &:after {
        background-color: darken($color, 10%);
      }

      @if $type == light {
        color: #000;
      }
    }

    &.is-reverse {
      padding: 10.5rem 3rem 2rem;

      &:before {
        top: 4rem;
        bottom: auto;
        content: "Lighten 5%";
      }

      &:after {
        top: 0;
        bottom: auto;
        content: "Lighten 10%";
      }

      @include getStyle() {
        &:before {
          background-color: lighten($color, 5%);
        }

        &:after {
          background-color: lighten($color, 10%);
        }
      }
    }

    span {
      display: block;

      &:first-child {
        margin-bottom: 2rem;
        font-size: 2rem;
      }
    }
  }
</style>
