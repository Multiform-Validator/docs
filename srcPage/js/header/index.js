(function ($) {
  $(() => {
    const header = $('.start-style');
    $(window).scroll(() => {
      const scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass('start-style').addClass('scroll-on');
      } else {
        header.removeClass('scroll-on').addClass('start-style');
      }
    });
  });

  // Animation

  $(document).ready(() => {
    $('body.hero-anime').removeClass('hero-anime');
  });

  // Menu On Hover

  $('body').on('mouseenter mouseleave', '.nav-item', (e) => {
    if ($(window).width() > 750) {
      const _d = $(e.target).closest('.nav-item'); _d.addClass('show');
      setTimeout(() => {
        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
      }, 1);
    }
  });

  // Switch light/dark

  $('#switch').on('click', () => {
    if ($('body').hasClass('dark')) {
      $('body').removeClass('dark');
      $('#switch').removeClass('switched');
    } else {
      $('body').addClass('dark');
      $('#switch').addClass('switched');
    }
  });
}(jQuery));
