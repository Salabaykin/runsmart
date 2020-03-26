$(document).ready(function(){
  $('.slider__inner').slick({
    speed: 800,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function() {
    $(this)
      .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
  });
  
  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content--active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list--active');
      })
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // модальные окна

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn();
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut();
    });
  });
  $('.button--mini').on('click', function() {
    $('.overlay, #order').fadeIn();
    $('.modal__close').on('click', function() {
      $('.overlay, #order').fadeOut();
    });
  });

  $('.button--mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn();
    });
  });
});
