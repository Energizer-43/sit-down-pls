import { createCustomSelect } from "./modules/dropdowns.js";
import { useDynamicAdapt } from './modules/dynamicAdapt.js';
import { burgerMenu } from "./modules/burger.js";

// Вызов адаптива
useDynamicAdapt();

// Вызов дропдаунов
createCustomSelect();

// Вызов бургер меню
burgerMenu();

// Форма поиска
document.getElementById('header-search-form').addEventListener('submit', (e) => {
  e.preventDefault();
});

// Свайпер
const catalogSwiper = new Swiper('.catalog__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 3,
    fill: "row",
  },
  spaceBetween: 32,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'catalog__swiper-pagination-bullet-custom',
    bulletActiveClass: 'catalog__swiper-pagination-bullet-custom--active',
    renderBullet: function(index, className) {
      return '<button class="' + className + '">' + (index + 1) + "</button>";
    },
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 3,
        fill: "row",
      },
      spaceBetween: 16,
    },
    650: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 3,
        fill: "row",
      },
    },
    950: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 3,
        fill: "row",
      },
    },
  },
});

// Range Slider

import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
      start: [2000, 150000],
      connect: true,
      step: 1,
      range: {
        'min': 2000,
        'max': 150000
      }
  });

  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on('update', function(values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let array = [null, null];
    array[i] = value;

    rangeSlider.noUiSlider.set(array);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    })
  })
}

// Дропдауны с чекбоксами

const catalogBtns = document.querySelectorAll('[data-catalog-btn]');
const catalogContent = document.querySelectorAll('[data-catalog-content]');


catalogBtns.forEach(el => {
  el.addEventListener('click', (e) => {
    let currentBtn = e.currentTarget;
    let dropdown = currentBtn.nextElementSibling;

    catalogBtns.forEach(el => {
      if (el !== currentBtn) {
        el.classList.remove('--open');
      };
    });

    catalogContent.forEach(el => {
      if (el !== dropdown) {
        el.classList.remove('--open');
      }
    });

    dropdown.classList.toggle('--open');
    currentBtn.classList.toggle('--open');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.menu')) {
    catalogBtns.forEach(el => {
      el.classList.remove('--open');
    });

    catalogContent.forEach(el => {
      el.classList.remove('--open');
    });
  }
})
