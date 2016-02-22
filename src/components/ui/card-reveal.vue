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
</style>

<script>
module.exports = {
  created: function () {
    console.log('created hook');
  },
  beforeCompile: function () {
    console.log('beforeCompile hook');
  },
  compiled: function() {
    console.log('compiled hook');
  },
  ready: function () {
    console.log('ready hook');
  },
};
</script>
