import { createCustomSelect } from "./modules/dropdowns.js";
import Inputmask from "./modules/inputmask.es6.js";
import { useDynamicAdapt } from './modules/dynamicAdapt.js'
import { burgerMenu } from "./modules/burger.js";
// import { modals } from "./modules/modals.js";

// Вызов адаптива
useDynamicAdapt();

// Вызов дропдаунов
createCustomSelect();

// Вызов бургер меню
burgerMenu();

// Вызов модальных окон
// modals();

// Форма поиска
document.getElementById('header-search-form').addEventListener('submit', (e) => {
  e.preventDefault();
});

// Свайперы
const heroSwiper = new Swiper('.hero__swiper', {
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'hero__swiper-pagination-bullet-custom',
    bulletActiveClass: 'hero__swiper-pagination-bullet-custom--active',
    renderBullet: function(index, className) {
      return `<div class="${className}" data-index="${index}">
      <svg width='20' height='20'>
      <circle cx='10' cy='10' r='9' stroke='white' stroke-width='2' fill='none' />
      <circle id="path" cx='10' cy='10' r='9' fill='none' />
      </svg>
      </div>`
    },
  },
  a11y: {
    paginationBulletMessage: 'Тут название слайда {{index}}',
  },
});

const specialSwiper = new Swiper('.special__swiper', {
  spaceBetween: 32,
  navigation: {
    nextEl: '.special__swiper-button-next',
    prevEl: '.special__swiper-button-prev',
  },
  a11y: {
    prevSlideMessage: "Предыдущий слайд",
    nextSlideMessage: "Следующий слайд",
    firstSlideMessage: "Это первый слайд",
    lastSlideMessage: "Это последний слайд",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1250: {
      slidesPerView: "auto",
    },
  },
});

const usefulSwiper = new Swiper('.useful__swiper', {
  spaceBetween: 32,
  navigation: {
    nextEl: '.useful__swiper-button-next',
    prevEl: '.useful__swiper-button-prev',
  },
  a11y: {
    prevSlideMessage: "Предыдущий слайд",
    nextSlideMessage: "Следующий слайд",
    firstSlideMessage: "Это первый слайд",
    lastSlideMessage: "Это последний слайд",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1250: {
      slidesPerView: 2,
    },
  },
});

// Показать/скрыть карточки в секции "Высокий рейтинг"
const ratingHiddenCards = document.querySelectorAll('.rating__hidden-card');
const ratingBtn = document.querySelector('.rating__btn-more');

ratingBtn.addEventListener('click', () => {
  ratingHiddenCards.forEach(el => { el.classList.toggle('rating__hidden-card') });
  ratingBtn.textContent = (ratingBtn.textContent === 'Скрыть') ? ratingBtn.textContent = 'Смотреть больше товаров' : ratingBtn.textContent = 'Скрыть';
});

// Валидация и маска
let validation = new JustValidate ('#feedback-form', {
  errorLabelCssClass: ['feedback__label-error'],
  errorFieldCssClass: ['feedback__input-error'],
  successFieldCssClass: ['feedback__input-success'],
});

const feedbackInputName = document.getElementById('feedback-name');
const feedbackInputPhone = document.getElementById('feedback-phone');
const feedbackInputEmail = document.getElementById('feedback-email');

let inputPhone = document.getElementById('feedback-phone');

let im = new Inputmask('+7(999)999-99-99');

im.mask(inputPhone);

validation.addField('#feedback-name', [
  {
    rule: 'required',
    errorMessage: 'Введите имя'
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Минимум 2 символа',
  },
  {
    rule: 'maxLength',
    value: 15,
    errorMessage: 'Максимум 15 символов',
  },
  {
    rule: 'customRegexp',
    value: /[a-z-а-я]/gi,
    errorMessage: 'Недопустимый формат'
  },
])
.addField('#feedback-phone', [
  {
    validator: (value) => {
      const phone = inputPhone.inputmask.unmaskedvalue();
      return Boolean(Number(phone) && phone.length > 0);
    },
    errorMessage: 'Введите номер телефона'
  },
  {
    validator: (value) => {
      const phone = inputPhone.inputmask.unmaskedvalue();
      return Boolean(Number(phone) && phone.length === 10);
    },
    errorMessage: 'Введите телефон полностью'
  },
])
.addField('#feedback-email', [
  {
    rule: 'required',
    errorMessage: 'Введите email'
  },
  {
    rule: 'email',
    errorMessage: 'Недопустимый формат'
  },
])
.addField('#feedback-agreement', [
  {
    rule: 'required',
    errorMessage: 'Вы должны дать согласие',
  },
])

.onSuccess(() => {
  feedbackInputName.classList.remove('feedback__input-success');
  feedbackInputName.value = '';
  feedbackInputPhone.classList.remove('feedback__input-success');
  feedbackInputPhone.value = '';
  feedbackInputEmail.classList.remove('feedback__input-success');
  feedbackInputEmail.value = '';
  modal1.classList.remove('--invisible')
})

// Модалка
const modal1 = document.getElementById('modal-1');
const modal1closeBtn = document.querySelector('[data-modal-close]');

modal1.addEventListener('click', function() {
  modal1.classList.add('--invisible');
})

modal1closeBtn.addEventListener('click', () => {
  modal1.classList.add('--invisible');
})

modal1.querySelector('.modal__window').addEventListener('click', (e) => {
  e.stopPropagation();
})
