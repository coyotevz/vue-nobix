<template>
<div class="wrapper">
  <header>
    <appbar></appbar>
  </header>

  <main>
    <module-content></module-content>
  </main>

  <footer>
  </footer>

</div>
</template>

<script>
var Appbar = require('./components/appbar');
var ModuleContent = require('./components/module-content');

module.exports = {
  components: {
    'appbar': Appbar,
    'module-content': ModuleContent,
  },
};
</script>

<style lang="scss" src="./assets/style.scss">
</style>
