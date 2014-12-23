$(document).foundation();

$(document).ready(function() {
  $(window).scroll(function() {
    var headerHeight = $('header').height();

    if ($(this).scrollTop() > headerHeight) {
      $('header').css('position', 'fixed');

    } else if ($(this).scrollTop() <= headerHeight) {
      $('header').css('position', 'static');
    }
  });

  $('.js-site-menu-button').on('click', function(ev) {
    ev.preventDefault();
    $(this).toggleClass('active');
    $('.js-site-menu').slideToggle();
  });

  $('.work-panels').masonry({
    columnWidth: 285,
    gutter: 10,
    itemSelector: '.work-panel'
  });
});
