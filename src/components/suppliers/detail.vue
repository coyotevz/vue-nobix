<template>
  <preloader colors="blue" size="small" class="center" v-show="$loadingRouteData"></preloader>
  <h3>Supplier #{{ supplier.id }}, {{ supplier.name }}</h3>
</template>

<script>
/* global config */

module.exports = {

  route: {
    data: function(transition) {
      this.$http.get(config.urlRoot + '/suppliers/' + transition.to.params.id).then(function(response) {
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
  },
};
</script>
