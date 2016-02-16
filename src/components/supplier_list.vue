<template>
  <ul class="list suppliers-list selectable">
    <li class="list-item" v-for="supplier in suppliers">
      <div class="iconimg">
        <img class="avatar-circle" src="../assets/image/photo.jpg">
        <input id="supplier_item_{{ supplier.id }}" type="checkbox" class="filled-in"/>
        <label for="supplier_item_{{ supplier.id }}"></label>
      </div>
      <div class="name"><a href="#suppliers/{{ supplier.id }}">{{ supplier.name }}</a></div>
      <div class="col3"></div>
      <div class="col4"></div>
      <div class="actions"></div>
    </li>
  </ul>
</template>

<script>
module.exports = {
  data: function() {
    return {
      suppliers: [
        { id: 1, name: 'Supplier 1' },
        { id: 2, name: 'Supplier 2' },
        { id: 3, name: 'Supplier 3' },
        { id: 4, name: 'Supplier 4' },
      ],
    };
  },
};
</script>
