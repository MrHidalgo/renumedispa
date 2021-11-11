const collapseCB = (function() {
  const init = function() {
    const collapseHead = document.querySelectorAll('.faq__collapse-head ');
  
    collapseHead.forEach((val, id) => {
      val.addEventListener('click', (ev) => {
        const el = ev.currentTarget,
          bodyEl = el.nextElementSibling;
  
        if(el.classList.contains('is-active')) {
          el.classList.remove('is-active');
          bodyEl.style.display = 'none';
        } else {
          el.classList.add('is-active');
          bodyEl.style.display = 'block';
        }
      });
    });
  };
  return {
    init: init
  };

})();

export default collapseCB;
