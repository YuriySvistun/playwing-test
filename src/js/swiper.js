const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper__pagination',
      bulletClass: 'swiper__bullet',
      bulletActiveClass: 'swiper__bullet--current',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper__button--next',
      prevEl: '.swiper__button--prev',
      disabledClass: 'swiper__button--disabled'
    }
});
