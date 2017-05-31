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

// $('.nav-items').hide();
$('.profile').on('click', function() {
  console.log('boom');
  let $navItems = $('.nav-items');
  $navItems.toggleClass('hidden');
})