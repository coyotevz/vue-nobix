var Vue = require('vue');
var Router = require('vue-router');
var Application = require('./application.vue');
var u_$ = require('jquery');
require('./assets/style.scss');

// install router
Vue.use(Router);
// install & config resources
Vue.use(require('vue-resource'));
Vue.http.options.root = 'testapi/root';

Vue.config.debug = true;

var router = new Router();

router.map({
  '/suppliers': require('./components/suppliers/routes'),
});

router.redirect({
  '/': '/suppliers',
});

router.afterEach(function(u_transition) {
  //console.log('app:', transition.to.router.app);
});

router.start(Application, '#application');
