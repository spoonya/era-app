import { CLASSES, DOM } from './constants';

const header = document.querySelector('#header');
const burgerMenu = document.querySelector('#header-burger');
const burgerBtn = document.querySelector('#burger-button');

export function toggleBurger() {
  burgerBtn.addEventListener('click', function () {
    DOM.body.classList.toggle(CLASSES.scrollHidden);
    header.classList.toggle(CLASSES.open);
    this.classList.toggle(CLASSES.active);
    burgerMenu.classList.toggle(CLASSES.active);
  });
}

export function controlHeaderBurger() {
  toggleBurger();
}
