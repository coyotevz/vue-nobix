module.exports = {
  component: require('./index.vue'),

  subRoutes: {
    '/': {
      component: require('./list.vue'),
    },

    '/:id': {
      component: {
        template: '<p>supplier #{{ $route.params.id }}</p>',
      },
    },
  },
};
