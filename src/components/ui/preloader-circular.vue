<template>
  <div :class="['preloader-wrapper','active',size]">
    <div :class="['spinner-layer',color]" v-for="color in colors">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="gap-patch">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {

  props: {
    'colors': {},
    'size': {
      validaor: function(value) {
        return Boolean(['small', 'big'].indexOf(value) + 1);
      },
    },
  },

  beforeCompile: function() {
    var colors = this.colors;
    if (colors === undefined) {
      this.colors = [''];
      return;
    }
    if (typeof colors === 'string') {
      colors = colors.split(' ');
    }
    if (colors.length === 1) {
      this.colors = ['spinner-' + colors[0] + '-only'];
    } else {
      this.colors = colors.map(function(color) {
        return 'spinner-' + color;
      });
    }
  },

};
</script>

<style lang="scss">
@import "~assets/style/variables";
@import "~materialize-css/sass/components/preloader";
.preloader-wrapper.center {
  display: inherit;
  margin-left: auto;
  margin-right: auto;
}
</style>
