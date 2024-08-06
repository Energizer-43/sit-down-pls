export const burgerMenu = function() {
  const burger = document.getElementById('burger');
  const navTop = document.getElementById('burger-menu');
  const navBottom = document.getElementById('burger-menu2');
  const navItemsTop = document.querySelectorAll('.header-center__link');
  const navItemsBottom = document.querySelectorAll('.header-top__link');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    navTop.classList.toggle('header-center__nav--visible');
    navBottom.classList.toggle('header-center__nav--visible');
  });

  navItemsTop.forEach(el => {
    el.addEventListener('click', () => {
      burger.classList.remove('burger--active');
      navTop.classList.remove('header-center__nav--visible');
      navBottom.classList.remove('header-center__nav--visible');
    })
  })

  navItemsBottom.forEach(el => {
    el.addEventListener('click', () => {
      burger.classList.remove('burger--active');
      navTop.classList.remove('header-center__nav--visible');
      navBottom.classList.remove('header-center__nav--visible');
    })
  })
}
