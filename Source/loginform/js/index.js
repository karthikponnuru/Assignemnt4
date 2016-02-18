$('.login-input').on('focus', function() {
  $('.login').addClass('focused');
});

$('.login').on('submit', function(e) {
  e.preventDefault();
  $('.login').removeClass('focused').addClass('loading');
});

$('.register-input').on('focus', function() {
  $('.register').addClass('focused');
});

$('.register').on('submit', function(e) {
  e.preventDefault();
  $('.register').removeClass('focused').addClass('loading');
});