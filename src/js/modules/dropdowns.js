export const createCustomSelect = () => {
  const selectCity = document.querySelector('.header-top__select');
  const selectCategory = document.querySelector('.header-bottom__select');

  const choiceOne = new Choices(selectCity, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom',
  });

  const choiceTwo = new Choices(selectCategory, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom',
  })

  // Дропдаун города
const headerTopDropdown = document.querySelector('.header-top__dropdown');

const headerTopChoices = headerTopDropdown.querySelector('.choices').classList.add('header-top__choices');
const headerTopChoicesInner = headerTopDropdown.querySelector('.choices__inner').classList.add('header-top__choices-inner');
const headerTopChoicesList = headerTopDropdown.querySelector('.choices__list').classList.add('header-top__choices-list');
const headerTopChoicesItem = headerTopDropdown.querySelectorAll('.choices__item');

headerTopChoicesItem.forEach(e => e.classList.add('header-top__choices-item'));

// Дропдаун категории
const headerBottomDropdown = document.querySelector('.header-bottom__dropdown');

const headerBottomChoices = headerBottomDropdown.querySelector('.choices').classList.add('header-bottom__choices');
const headerBottomChoicesInner = headerBottomDropdown.querySelector('.choices__inner').classList.add('header-bottom__choices-inner');
const headerBottomChoicesList = headerBottomDropdown.querySelector('.choices__list').classList.add('header-bottom__choices-list');
const headerBottomChoicesItem = headerBottomDropdown.querySelectorAll('.choices__item');

headerBottomChoicesItem.forEach(e => e.classList.add('header-bottom__choices-item'));
}

