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

  $('.work-panels').masonry({
    columnWidth: 285,
    gutter: 10,
    itemSelector: '.work-panel'
  })
});
