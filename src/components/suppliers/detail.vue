<template>
  <div class="valign-wrapper supplier-detail" v-show="$loadingRouteData">
    <preloader colors="blue" size="small" class="center"></preloader>
  </div>
  <profile-card
    obj="supplier"
    :bg-image="'supplier-profile-bg.jpg'"
    :profile-image="'supplier-icon.png'"
    v-show="!$loadingRouteData"
  >
    <template slot="footer-content">
      <div class="col s3 offset-s2">
        <h4 class="card-title grey-text text-darken-4">{{ supplier.name }}</h4>
        <p class="medium-small grey-text">Marcas</p>
      </div>
      <div class="col s2 center-align">
        <h4 class="card-title grey-text text-darken-4">7 días</h4>
        <p class="medium-small grey-text">Froma de Pago</p>
      </div>
      <div class="col s2 center-align">
        <h4 class="card-title grey-text text-darken-4">420</h4>
        <p class="medium-small grey-text">Productos activos</p>
      </div>
      <div class="col s2 center-align">
        <h4 class="card-title grey-text text-darken-4">$ 5.680,45</h4>
        <p class="medium-small grey-text">Comprados</p>
      </div>
    </template>
    <span slot="body-title" class="supplier-name">{{ supplier.name }}</span>
    <template slot="body-content">
      <div class="col m4">
        <p>Av. Congreso385 - CBA<br><span class="grey-text">Domicilio</span></p>
      </div>
      <div class="col m4">
        <p>30-71128142-4<br><span class="grey-text">CUIT</span></p>
      </div>
      <div class="col m4">
        <p>ventas@ferrum.com.ar<br><span class="grey-text">e-mail</span></p>
      </div>
    </template>

  </profile-card>
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
        console.log('error', u_response);
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

<style lang="scss">
.supplier-name {
    cursor: default;
    float: left;
}
.supplier-detail.valign-wrapper {
  height: 300px;
}
</style>
