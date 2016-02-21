<template>
  <div class="valign-wrapper suppliers-list" v-show="$loadingRouteData || suppliers.length === 0">
    <preloader colors="blue" size="small" class="center" v-show="$loadingRouteData"></preloader>
    <h3 class="valign center-align void-data" v-show="!$loadingRouteData && suppliers.length === 0">No existen proveedores</h3>
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
.void-data {
  font-family: "RobotoCondensed";
  font-weight: 500;
  color: rgba(200,200,200,0.8);
  text-shadow: 1px 4px 6px #ececec, 0 0 0 #000, 1px 4px 6px #ececec;
  margin-left: auto;
  margin-right: auto;
  &::selection {
    text-shadow: none;
  }
}
</style>
