<template>
  <div class="wrapper">
    <header>
      <appbar></appbar>
    </header>

    <main></main>
    <footer></footer>

  </div>
</template>

<script>
var Appbar = require('./components/appbar');

module.exports = {
  components: {
    'appbar': Appbar,
  },
};
</script>

<style lang="scss" src="./assets/style.scss">
</style>
