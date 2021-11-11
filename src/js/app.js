import Common from "./common/common";

import SwiperCB from "./macros/swiper";
import HeaderCB from "./macros/header";
import collapseCB from "./macros/collapse";

// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {
  // COMMON
  Common.initLoad();
  
  // MACROS
  SwiperCB.init();
  HeaderCB.init();
  collapseCB.init();
  
}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
