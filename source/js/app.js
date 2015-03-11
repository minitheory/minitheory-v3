$(document).foundation();

$(document).ready(function() {
  var headerHeight = $('header').outerHeight();
  $('body').css('padding-top', headerHeight+'px');

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
