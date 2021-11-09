const HeaderCB = (function() {
  
  const hamburgerToggle = () => {
    const btn = document.querySelector("[hamburger-js]"),
      btnClose = document.querySelectorAll('[menu-close-js]'),
      hideScrollContainer = document.querySelectorAll("html, body"),
      mobileContainer = document.querySelector("[mobile-block-js]");
    
    btn.addEventListener("click", (ev) => {
      const elem = ev.currentTarget;
    
      elem.classList.add("is-active");
      mobileContainer.classList.add("is-open");
    
      hideScrollContainer.forEach((val, idx) => {
        val.classList.add("is-hideScroll");
      });
    
    });
  
    btnClose.forEach((val, id) => {
      val.addEventListener('click', (ev) => {
        console.log(`close`);
        btn.classList.remove("is-active");
        mobileContainer.classList.remove("is-open");
        mobileContainer.classList.add("is-animate");
        hideScrollContainer.forEach((val, idx) => val.classList.remove("is-hideScroll"));
        
        setTimeout(() => {
          mobileContainer.classList.remove("is-animate");
        }, 300);
        
      }, false);
    });
  };
  
  const headerNavCollapse = () => {
    const btnsItem = document.querySelectorAll('[header-item-js]');
  
    btnsItem.forEach((val, id) => {
      val.addEventListener('click', (ev) => {
        
        const el = ev.currentTarget,
          elDropdown = el.nextElementSibling;
  
        if(el.classList.contains('is-active')) {
          el.classList.remove('is-active');
          elDropdown.classList.remove('is-open');
        } else {
          el.classList.add('is-active');
          elDropdown.classList.add('is-open');
        }
  
      }, false);
    })
  };
  
  const init = function() {
    headerNavCollapse();
    hamburgerToggle();
  };
  return {
    init: init
  };

})();

export default HeaderCB;
