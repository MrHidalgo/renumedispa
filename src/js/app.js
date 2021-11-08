import Common from "./common/common";

import SwiperCB from "./macros/swiper";

// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {
  // COMMON
  Common.initLoad();
  
  // MACROS
  SwiperCB.init();
  
}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
