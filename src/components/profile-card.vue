<template>
  <div :class="[obj+'-profile','profile']">
    <div class="col s12">
      <card-reveal :class="obj+'-profile-header'">
        <img slot="card-image" class="activator"
          alt="profile background" :src="bg_image_path">
        <figure slot="pre-content" class="card-profile-image">
          <img class="circle z-depth-2 responsive-img activator"
            alt="profile icon" :src="profile_image_path">
        </figure>
        <div slot="content" class="row">
          <div class="col s3 offset-s2">
            <h4 class="card-title grey-text text-darken-4" v-pre>{{ supplier.name }}</h4>
            <p class="medium-small grey-text">Marcas</p>
          </div>
          <div class="col s2 center-align">
            <h4 class="card-title grey-text text-darken-4">7 días</h4>
            <p class="medium-small grey-text">Froma de Pago</p>
          </div>
          <div class="col s2 center-align">
            <h4 class="card-title grey-text text-darken-4">420</h4>
            <p class="medium-small grey-text">Prodcutos activos</p>
          </div>
          <div class="col s2 center-align">
            <h4 class="card-title grey-text text-darken-4">$ 5.680,45</h4>
            <p class="medium-small grey-text">Comprados</p>
          </div>
          <div class="col s1 right-align">
            <a class="btn-floating activator waves-effect waves-light blue-grey darken-1 right">
              <icon name="keyboard_arrow_up"></icon>
            </a>
          </div>
        </div>
        <template slot="reveal-content">
          <div class="row card-title gray-text text-darken-4">
            title
          </div>
          <div class="row card-reveal-content">
            content
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
    bg_image: {
      type: String,
      required: true,
    },
    profile_image: {
      type: String,
      required: true,
    },
  },

  components: {
    'card-reveal': require('./ui/card-reveal'),
    'icon': require('./ui/icon'),
  },

  computed: {
    bg_image_path: function() {
      return require('../assets/image/' + this.bg_image);
    },
    profile_image_path: function() {
      var rv = require('../assets/image/' + this.profile_image);
      console.log('rv:', rv);
      return rv;
    },
  },
};
</script>

<style lang="scss">
.profile {
  .card {
    .card-image {
      height: 250px;
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
