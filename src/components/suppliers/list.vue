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
var selectable_list = require('../ui/selectable_list');
var iconimg = require('../ui/iconimg');

module.exports = {
  http: {
    root: 'supplires/route',
  },
  route: {
    data: function(transition) {
      // GET request
      this.$http.get({url: '/suppliers', method: 'GET'}).then(function(response) {
        // success callback
        console.log('response:', response);
      }, function(u_response) {
        // error callback
      });
      setTimeout(function() {
        transition.next({
          suppliers: [
            { id: 1, name: 'Supplier 1' },
            { id: 2, name: 'Supplier 2' },
            { id: 3, name: 'Supplier 3' },
            { id: 4, name: 'Supplier 4' },
          ],
        });
      }, 1000);
    },
  },

  data: function() {
    return {
      suppliers: [],
    };
  },

  components: {
    'selectable-list': selectable_list,
    'iconimg': iconimg,
  },
};
</script>
