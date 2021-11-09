const SwiperCB = (function() {
  
  const mainSlider = () => {
    if(document.querySelector('.main__slider')) {
      
      new Swiper('.mainSlider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 2000,
        // autoplay: {
        //   delay: 5000,
        // },
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        pagination: {
          clickable: true,
          el: '.swiper-pagination',
        },
      });
    }
    
  };
  
  const init = function() {
    mainSlider();
  };
  return {
    init: init
  };

})();

export default SwiperCB;
