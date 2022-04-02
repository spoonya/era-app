import { CLASSES } from './constants';

export function controlLangButton() {
  const langButton = document.querySelector('#lang-button');
  const langList = document.querySelector('#lang-list');

  langButton.addEventListener('click', () => {
    langList.classList.toggle(CLASSES.active);
    langButton.classList.toggle(CLASSES.active);
  });

  window.addEventListener('click', (e) => {
    const path = e.path || (e.composedPath && e.composedPath());

    if (path.includes(langButton)) return;

    if (langList.classList.contains(CLASSES.active)) {
      langList.classList.remove(CLASSES.active);
      langButton.classList.remove(CLASSES.active);
    }
  });
}
