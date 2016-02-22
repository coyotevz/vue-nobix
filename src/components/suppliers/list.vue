<template>
  <div class="valign-wrapper suppliers-list"
    v-show="$loadingRouteData || suppliers.length === 0"
  >
    <preloader colors="blue" size="small" class="center"
      v-show="$loadingRouteData"
    ></preloader>
    <span class="valign center-align message-void-data"
      v-show="!$loadingRouteData && suppliers.length === 0"
    >No existen proveedores</span>
  </div>
  <selectable-list class="suppliers-list" v-show="!$laodingRouteData && suppliers.length !== 0">
    <li class="list-item" v-for="supplier in suppliers">
      <iconimg :image="'photo.jpg'" :id="'supplier_item_' + supplier.id"></iconimg>
      <div class="name">
        <a v-link="{ name: 'suppliers.detail', params: { id: supplier.id }}">
          {{ supplier.name }}
        </a>
      </div>
      <div class="col3"></div>
      <div class="col4"></div>
      <div class="actions"></div>
    </li>
  </selectable-list>
</template>

<script>
/* global config */

module.exports = {
  route: {
    data: function(transition) {
      this.$http.get(config.urlRoot + '/suppliers').then(function(response) {
        transition.next({
          suppliers: response.data.objects,
        });
      }, function(u_response) {
        // error callback
      });
    },
  },

  data: function() {
    return {
      suppliers: [],
    };
  },

  components: {
    'selectable-list': require('../ui/selectable-list'),
    'iconimg': require('../ui/iconimg'),
    'preloader': require('../ui/preloader-circular'),
  },
};
</script>

<style lang="scss">
.suppliers-list.valign-wrapper {
  height: 300px;
}
.message-void-data {
  font-family: "Roboto Condensed";
  font-weight: 700;
  font-size: 36px;
  color: rgba(168, 168, 168, 0.4);
  margin-left: auto;
  margin-right: auto;
  &::selection {
    text-shadow: none;
  }
}
</style>
