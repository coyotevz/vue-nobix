<template>
  <p v-show="$loadingRouteData" style="color: red;">Loading ...</p>
  <selectable-list class="suppliers-list" v-show="!$laodingRouteData">
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
var selectable = require('../ui/selectable-list');
var iconimg = require('../ui/iconimg');

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
    'selectable-list': selectable,
    'iconimg': iconimg,
  },
};
</script>
