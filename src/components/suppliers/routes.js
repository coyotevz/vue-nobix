module.exports = {
  component: {
    template: '<div><router-view></router-view></div>',
    route: {
      activate: function(transition) {
        console.log('suppliers module activated!');
        transition.next();
      },
    },
  },
  name: 'suppliers',

  subRoutes: {
    '/': {
      name: 'suppliers.list',
      component: require('./list.vue'),
      activate: function(transition) {
        console.log('suppliers ROOT module activated!');
        transition.next();
      },
    },

    '/:id': {
      name: 'suppliers.detail',
      component: require('./detail.vue'),
    },
  },
};
