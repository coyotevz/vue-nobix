var Vue = require('vue');
var Application = require('./application.vue');
var u_$ = require('jquery');
require('./assets/style.scss');

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    'application': Application,
  },
});
