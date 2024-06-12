(function () {
  const items = document.querySelectorAll('.slider .item');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');

  let activeIndex = 3;

  function updateSlider() {
      let stt = 0;

      items[activeIndex].style.transform = `none`;
      items[activeIndex].style.zIndex = 1;
      items[activeIndex].style.filter = 'none';
      items[activeIndex].style.opacity = 1;

      for (let i = activeIndex + 1; i < items.length; i++) {
          stt++;
          items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
          items[i].style.zIndex = -stt;
          items[i].style.filter = 'blur(5px)';
          items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }

      stt = 0;
      for (let i = activeIndex - 1; i >= 0; i--) {
          stt++;
          items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
          items[i].style.zIndex = -stt;
          items[i].style.filter = 'blur(5px)';
          items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
  }

  updateSlider();

  next.addEventListener('click', () => {
      if (activeIndex < items.length - 1) {
          activeIndex++;
          updateSlider();
      }
  });

  prev.addEventListener('click', () => {
      if (activeIndex > 0) {
          activeIndex--;
          updateSlider();
      }
  });

  // Swipe functionality using pointer events
  let startX = 0;
  let endX = 0;
  const threshold = 50; // Minimum swipe distance to trigger slide

  const slider = document.querySelector('.slider');
  slider.addEventListener('pointerdown', (e) => {
      startX = e.clientX;
      slider.setPointerCapture(e.pointerId);
  });

  slider.addEventListener('pointermove', (e) => {
      if (startX !== 0) {
          endX = e.clientX;
      }
  });

  slider.addEventListener('pointerup', (e) => {
      if (startX !== 0) {
          if (startX - endX > threshold) {
              // Swipe left
              if (activeIndex < items.length - 1) {
                  activeIndex++;
                  updateSlider();
              }
          } else if (endX - startX > threshold) {
              // Swipe right
              if (activeIndex > 0) {
                  activeIndex--;
                  updateSlider();
              }
          }
          // Reset values
          startX = 0;
          endX = 0;
      }
      slider.releasePointerCapture(e.pointerId);
  });

})();
