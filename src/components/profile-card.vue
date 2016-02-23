<template>
  <div :class="[obj+'-profile','profile']">
    <div class="col s12">
      <card-reveal :class="obj+'-profile-header'">
        <img slot="card-image" class="activator"
          alt="profile background" :src="bgImagePath">
        <figure slot="pre-content" class="card-profile-image">
          <img class="circle z-depth-2 responsive-img activator"
            alt="profile icon" :src="profileImagePath">
        </figure>
        <div slot="content" class="row">
          <slot name="footer-content"></slot>
          <div class="col s1 right-align">
            <button
              :type="'floating'"
              :icon-name="'keyboard_arrow_up'"
              class="activator waves-effect waves-light blue-grey darken-1 right"
            ></button>
          </div>
        </div>
        <template slot="reveal-content">
          <div class="row card-title gray-text text-darken-4">
            <slot name="body-title"></slot>
            <icon-toggle class="waves-effect action-edit left" name="edit">
            </icon-toggle>
            <icon class="right" name="close"></icon>
          </div>
          <div class="row card-reveal-content">
            <slot name="body-content"></slot>
          </div>
        </template>
      </card-reveal>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
    obj: {
      type: String,
      required: true,
    },
    bgImage: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
  },

  components: {
    'card-reveal': require('./ui/card-reveal'),
    'button': require('./ui/button'),
    'icon': require('./ui/icon'),
    'icon-toggle': require('./ui/icon-toggle.vue'),
  },

  computed: {
    bgImagePath: function() {
      return require('../assets/image/' + this.bgImage);
    },
    profileImagePath: function() {
      return require('../assets/image/' + this.profileImage);
    },
  },
};
</script>

<style lang="scss">
.profile {
  .card {
    .card-image {
      height: 250px;
      overflow: hidden;
    }
    .card-profile-image {
      cursor: pointer;
      left: 40px;
      margin: 0;
      position: absolute;
      top: 195px;
      width: 110px;
      z-index: 1;
    }
    .card-content {
      margin-top: -40px;
      .card-title {
        margin-bottom: 0;
      }
    }
  }
}
</style>
