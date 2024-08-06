import { createCustomSelect } from "./modules/dropdowns.js";
import { useDynamicAdapt } from './modules/dynamicAdapt.js';
import { burgerMenu } from "./modules/burger.js";
import Inputmask from "./modules/inputmask.es6.js";
import { modals } from "./modules/modals.js";

// Вызов адаптива
useDynamicAdapt();

// Вызов дропдаунов
createCustomSelect();

// Вызов бургер меню
burgerMenu();

// Вызов модальных окон
modals();

// Форма поиска
document.getElementById('header-search-form').addEventListener('submit', (e) => {
  e.preventDefault();
});

// Свайперы
const productSwiper1 = new Swiper(".top-left-block-two__swiper", {
  direction: "horizontal",
  spaceBetween: 38,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      direction: "horizontal",
      slidesPerView: 'auto',
    },
    651: {
      direction: "vertical",
      slidesPerView: 3,
    },
    950: {
      direction: "horizontal",
    },
    1250: {
      direction: "horizontal",
    },
  },
});

const productSwiper2 = new Swiper(".top-left-block-one__swiper", {
  spaceBetween: 10,
  thumbs: {
    swiper: productSwiper1,
  },
});

const similarSwiper = new Swiper(".similar__swiper", {
  spaceBetween: 32,
  slidesPerView: 4,
  slidesPerGroup: 4,
  navigation: {
    nextEl: '.similar__swiper-button-next',
    prevEl: '.similar__swiper-button-prev',
  },
  a11y: {
    prevSlideMessage: "Предыдущий слайд",
    nextSlideMessage: "Следующий слайд",
    firstSlideMessage: "Это первый слайд",
    lastSlideMessage: "Это последний слайд",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 16,
    },
    950: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1250: {
      spaceBetween: 32,
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});

const modalSwiper1 = new Swiper(".modal-product__swiper-bottom", {
  spaceBetween: 78,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".modal-product__swiper-button-next",
    prevEl: ".modal-product__swiper-button-prev",
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
      slidesPerView: 4,
    },
  },
});

const modalSwiper2 = new Swiper(".modal-product__swiper-top", {
  spaceBetween: 10,
  thumbs: {
    swiper: modalSwiper1,
  },
});

// Валидация для модального окна
let validationModal = new JustValidate ('#modal-form', {
  errorLabelCssClass: ['modal-buy__label-error'],
  errorFieldCssClass: ['modal-buy__input-error'],
  successFieldCssClass: ['modal-buy__input-success'],
});

const modalInputName = document.getElementById('modal-name');
const modalInputPhone = document.getElementById('modal-phone');

let inputPhoneModal = document.getElementById('modal-phone');

let im = new Inputmask('+7(999)999-99-99');

im.mask(inputPhoneModal)

validationModal.addField('#modal-name', [
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
.addField('#modal-phone', [
  {
    validator: (value) => {
      const phone = inputPhoneModal.inputmask.unmaskedvalue();
      return Boolean(Number(phone) && phone.length > 0);
    },
    errorMessage: 'Введите номер телефона'
  },
  {
    validator: (value) => {
      const phone = inputPhoneModal.inputmask.unmaskedvalue();
      return Boolean(Number(phone) && phone.length === 10);
    },
    errorMessage: 'Введите телефон полностью'
  },
])
.addField('#modal-agreement', [
  {
    rule: 'required',
    errorMessage: 'Вы должны дать согласие',
  },
])
.onSuccess(() => {
  modalInputName.classList.remove('modal-buy__input-success');
  modalInputName.value = '';
  modalInputPhone.classList.remove('modal-buy__input-success');
  modalInputPhone.value = '';
  modal2.classList.add('--invisible');
  modal1.classList.remove('--invisible');
});

// Модалки
const modal1 = document.getElementById('modal-1');
const modal2 = document.getElementById('modal-2');
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

