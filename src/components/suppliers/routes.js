module.exports = {
  component: {
    template: '<div><router-view></router-view></div>',
  },
  name: 'suppliers',

  subRoutes: {
    '/': {
      name: 'suppliers.list',
      component: require('./list.vue'),
    },

    '/:id': {
      name: 'suppliers.detail',
      component: require('./detail.vue'),
    },
  },
};
