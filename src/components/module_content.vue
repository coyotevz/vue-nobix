<template>
<div class="module-content row">
  <div class="module-nav-container col s2"></div>
  <div class="main-content col s10 offset-s2">
    <!-- sample content, this must be routed -->
    <supplier-list></supplier-list>
  </div>
</div>
</template>

<script>
var SupplierList = require('./suppliers/list');
module.exports = {
  components: {
    'supplier-list': SupplierList,
  },
};
</script>

<style lang="scss">
.main-content {
  margin-top: 1.66rem;
}
</style>
