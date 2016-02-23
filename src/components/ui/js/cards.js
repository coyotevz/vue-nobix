// asign jquery to window needs by velocity to work
var $ = window.$ = window.jQuery = require('jquery');
require('velocity-animate');

module.exports = function(card_element) {
  $(card_element).on('click.card', function(e) {
    var $this = $(this);
    var $target = $(e.target);
    if ($this.find('> .card-reveal').length) {
      if ($target.is('.card-reveal .card-title') || $target.is('.card-reveal .card-title i')) {
        $this.find('.card-reveal')
          .velocity({ translateY: 0 }, {
            duration: 225,
            queue: false,
            easing: 'easeInOutQuad',
            complete: function() {
              $(this).css({ display: 'none' });
            },
          });
      }
      else if ($target.is('.card .activator') ||
               $target.is('.card .activator i')) {
        $target.closest('.card').css('overflow', 'hidden');
        $this.find('.card-reveal').css({ display: 'block' })
          .velocity('stop', false)
          .velocity({ translateY: '-100%'}, {
            duration: 300,
            queue:false,
            easing: 'easeInOutQuad',
          });
      }
    }

    $('.card-reveal').closest('.card').css('overflow', 'hidden');
  });

};
