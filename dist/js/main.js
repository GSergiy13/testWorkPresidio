$(function () {

  //headerScroll
  window.addEventListener('scroll', () => {
    document.querySelector('.header__top').classList.toggle('scroll__header', window.scrollY > 0);
  });

  // MenuBars
  document.querySelector('.bars').addEventListener('click', function () {
    this.classList.toggle('bars__active');
    this.nextElementSibling.classList.toggle('menu__list-active');
  });

  // WindowWidthSlider
  let intFrameWidth = window.innerWidth;

  if (intFrameWidth < 768) {
    $('.tabs-container').slick({
      dots: true,
      arrows: false,
      autoplay: true
    });
  }

  //  Tabs

  $('.tab').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });


  // drop
  let dropElement = document.getElementsByClassName("faq-content__drop");

  for (let i = 0; i < dropElement.length; i++) {
    dropElement[i].addEventListener("click", function (e) {
      closeAll(e.target);
      this.classList.toggle("faq-content__drop--active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
      showImage(e.target.dataset.picture)
    });
  }

  // showImage
  function showImage(id) {
    const image = document.getElementById(id);
    document.querySelectorAll('.faq-content__picture-img').forEach(img => img.style.display = 'none')
    image.style.display = 'block'
  }

  function closeAll(tar) {
    let dropElements = document.querySelectorAll('.faq-content__drop');
    for (let i = 0; i < dropElements.length; i++) {
      if (dropElements[i] == tar) {
        continue;
      }
      dropElements[i].classList.remove('faq-content__drop--active');
      let panel = dropElements[i].nextElementSibling;
      panel.style.maxHeight = null;
    }
  }

});