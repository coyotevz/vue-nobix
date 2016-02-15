<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
  </div>
</template>

<script>
var Hello = require('./components/hello');

module.exports = {
  components: {
    'hello': Hello,
  },
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
