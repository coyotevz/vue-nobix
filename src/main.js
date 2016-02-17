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

router.redirect({
  '/': '/suppliers',
});

router.afterEach(function(transition) {
  console.log('app:', transition.to.router.app);
});

router.start(Application, '#application');
