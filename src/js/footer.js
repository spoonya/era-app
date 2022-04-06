import { CLASSES } from './constants';

export function controlFooterMenu() {
  const menuArrows = document.querySelectorAll('#footer-menu a + svg');

  menuArrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      const subMenu = arrow.nextElementSibling;
      const currentArrow = arrow;
      const subMenuContainer = arrow.closest('li');

      subMenuContainer.classList.toggle(CLASSES.active);
      subMenu.classList.toggle(CLASSES.active);
      currentArrow.classList.toggle(CLASSES.active);
    });
  });
}
