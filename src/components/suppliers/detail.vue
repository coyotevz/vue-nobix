<template>
  <preloader colors="blue" size="small" class="center" v-show="$loadingRouteData"></preloader>
  <profile-card
    obj="supplier"
    bg_image="'supplier-profile-bg.jpg'"
    profile_image="'supplier-icon.png'"
    v-show="!$loadingRouteData"
  ></profile-card>
  <h3 v-show="!$loadingRouteData">Supplier #{{ supplier.id }}, {{ supplier.name }}</h3>
</template>

<script>
/* global config */

module.exports = {

  route: {
    data: function(transition) {
      var id = transition.to.params.id;
      this.$http.get(config.urlRoot + '/suppliers/' + id).then(function(response) {
        transition.next({
          supplier: response.data,
        });
      }, function(u_response) {
        // error callback
      });
    },
  },

  data: function() {
    return {
      supplier: Object,
    };
  },

  components: {
    'preloader': require('../ui/preloader-circular'),
    'profile-card': require('../profile-card'),
  },
};
</script>
