import { CLASSES, DOM } from './constants';
import { isMobile } from './helpers/is-mobile';

const header = document.querySelector('#header');
const burger = document.querySelector('#header-burger');
const menuArrows = document.querySelectorAll('#header-burger nav a + svg');
const burgerBtn = document.querySelector('#burger-button');

function setMenuArrowsBehaviour() {
  if (!isMobile()) return;

  menuArrows.forEach((arrow) => {
    DOM.body.classList.add(CLASSES.touch);
    arrow.classList.add(CLASSES.show);

    arrow.addEventListener('click', () => {
      const subMenu = arrow.nextElementSibling;
      const currentArrow = arrow;
      const subMenuContainer = arrow.closest('li');

      subMenuContainer.classList.toggle(CLASSES.active);
      subMenu.classList.toggle(CLASSES.active);
      currentArrow.classList.toggle(CLASSES.active);

      subMenu.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
}

function toggleBurger() {
  burgerBtn.addEventListener('click', function () {
    DOM.body.classList.toggle(CLASSES.scrollHidden);
    header.classList.toggle(CLASSES.open);
    this.classList.toggle(CLASSES.active);
    burger.classList.toggle(CLASSES.active);
  });
}

export function controlHeaderBurger() {
  toggleBurger();
  setMenuArrowsBehaviour();
}
