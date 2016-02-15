<template>
  <div class="hello">
    <h1>{{ msg }} <icon name="search"></icon></h1>
  </div>
</template>

<script>
var icon = require('./ui/icon');
module.exports = {
  data: function() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
    };
  },
  components: {
    'icon': icon,
  },
};
</script>
