<template>
  <p v-show="$loadingRouteData" style="color: red;">Loading ...</p>
  <selectable-list :extraclass="suppliers-list" v-show="!$laodingRouteData">
    <li class="list-item" v-for="supplier in suppliers">
      <div class="iconimg">
        <img class="avatar-circle" src="~assets/image/photo.jpg">
        <input id="supplier_item_{{ supplier.id }}" type="checkbox" class="filled-in"/>
        <label for="supplier_item_{{ supplier.id }}"></label>
      </div>
      <div class="name"><a v-link="{ name: 'suppliers.detail', params: { id: supplier.id }}">{{ supplier.name }}</a></div>
      <div class="col3"></div>
      <div class="col4"></div>
      <div class="actions"></div>
    </li>
  </selectable-list>
</template>

<script>
var selectable_list = require('../ui/selectable_list');

module.exports = {
  route: {
    data: function(transition) {
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
  },
};
</script>
