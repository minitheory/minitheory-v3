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
});
