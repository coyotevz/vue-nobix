module.exports = {
  component: require('./index.vue'),

  subRoutes: {
    '/': {
      component: {
        template: '<p>suppliers root</p>',
      },
    },

    '/:id': {
      component: {
        template: '<p>supplier #{{ $route.params.id }}</p>',
      },
    },
  },
};
