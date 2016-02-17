var Vue = require('vue');
var Router = require('vue-router');
var Application = require('./application.vue');
var u_$ = require('jquery');
require('./assets/style.scss');

// install router
Vue.use(Router);

var router = new Router();

router.map({
  '/suppliers': require('./components/suppliers/routes'),
});

router.start(Application, '#application');
