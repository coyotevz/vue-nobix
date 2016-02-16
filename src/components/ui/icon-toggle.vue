<template>
<a class="icon-toggle" :class="disabled?'disabled':''"><icon :name="name"></icon></a>
</template>

<script>
var icon = require('./icon');

module.exports = {
  props: {
    name: String,
    disabled: Boolean,
  },
  components: {
    'icon': icon,
  },
};
</script>

<style lang="scss">
@import "../../assets/style/variables";

.icon-toggle {
  width: $button-floating-size;
  height: $button-floating-size;
  line-height: $button-floating-size;
  padding: 0;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0.8;
  transition: background-color 0.118s ease-out;

  i.material-icons {
    width: inherit;
    display: inline-block;
    line-height: $button-floating-size;
    height: $button-floating-size;
    font-size: 1.6rem;
  }

  &.disabled {
    opacity: 0.3;
    cursor: default;
    &:hover { opacity: 0.3; }
    &:focus, &:active { opacity: 0.3; background-color: transparent; }
  }

  &:focus, &:hover {
    opacity: 1;
  }
}
</style>
