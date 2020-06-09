$(document).ready(function(){
  $('.js-click-modal').click(function(){
    $('.cont').addClass('modal-open');
   
  });
  
  $('.js-close-modal').click(function(){
    $('.cont').removeClass('modal-open');
  });

  function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.content-item__content').eq(i).toggleClass('content-item__content_active');
            $('.content-item__list').eq(i).toggleClass('content-item__list_active');
        });
    });
}

toggleSlide('.content-item__link');
toggleSlide('.content-item__back');


$('.heart').click(function(){
  $(this).toggleClass('heart__activ');
});
});



