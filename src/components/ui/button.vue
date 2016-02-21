<template>
<button :class="[btnType,disabled?'disabled':'',large?'btn-large':'']">
  <slot name="icon">
    <icon v-if="showIcon" :name="iconName" :pos="iconPos"></icon>
  </slot>
  <slot></slot>
</button>
</template>

<script>
module.exports = {
  props: {
    large: Boolean,
    disabled: Boolean,
    type: String,
    iconName: String,
    iconPos: String,
  },

  components: {
    'icon': require('./icon'),
  },

  computed: {
    'btnType': function() {
      switch (this.type) {
      case 'floating': return 'btn-floating';
      case 'flat': return 'btn-flat';
      default: return 'btn';
      }
    },
    'showIcon': function() {
      return (this.type !== 'flat' && this.iconName);
    },
  },
};
</script>

<style lang="scss">
@import "~assets/style";
@import "~materialize-css/sass/components/buttons";
</style>
