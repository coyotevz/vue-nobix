module.exports = {
  component: {
    template: '<router-view></router-view>',
  },

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
