$('.tab-content').hide();
$('.tab1').show();

$('li').on('click', function() {
  $('.tab-content').hide();
  let selector = $(this).attr('id');
  $('.' + selector).show();
  $('.tab').removeClass('clicked');
  $(this).addClass('clicked');
});

$('.mobile-tab').on('click', function() {
  $('.tab-content').hide();
  let selector = $(this).attr('id');
  $('.' + selector).show();
});