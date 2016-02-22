<template>
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <slot name="card-image"></slot>
    </div>
    <slot name="pre-content"></slot>
    <div class="card-content">
      <slot name="content"></slot>
    </div>
    <div class="card-reveal">
      <slot name="reveal-content"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import "~assets/style";
@import "~materialize-css/sass/components/cards";
@import "~materialize-css/sass/components/waves";
</style>

<script>
require('materialize-css/js/waves');
var activateCards = require('./js/cards');

module.exports = {
  ready: function () {
    activateCards(this.$el);
  },
};
</script>
