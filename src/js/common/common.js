const Common = (function() {
  const pressESC = () => {
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        /* action */
      }
    });
  };

  const clickBody = () => {
    document.body.addEventListener('click', (ev) => {
      const className = ``;

      if (!(ev.target).closest(className).length) {}
    });
  };

  const preventBehavior = () => {
    const link = document.querySelectorAll("a");

    link.forEach((val, idx) => {
      val.addEventListener("click", (ev) => {
        if (val.getAttribute("href") === "#") {
          ev.preventDefault();
        }
      });
    });
  };

  const initEventListeners = function() {};
  const initLoad = function() {
    // pressESC();
    // clickBody();
    preventBehavior();
  };
  return {
    initLoad: initLoad
  };
})();

export default Common;
