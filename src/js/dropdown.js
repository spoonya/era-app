import { CLASSES } from './constants';

export function controlDropwdown() {
  const selected = document.querySelector('#service-selected');
  const optionsContainer = document.querySelector('#service-container');

  const optionsList = document.querySelectorAll('.form__option');

  let selectedIndex = -1;

  selected.addEventListener('click', () => {
    optionsContainer.classList.toggle(CLASSES.active);
  });

  optionsList.forEach((option, index) => {
    option.addEventListener('click', () => {
      selectedIndex = index;
      selected.innerHTML = option.querySelector('label').innerHTML;
      optionsContainer.classList.remove(CLASSES.active);
      selected.classList.add(CLASSES.active);
    });
  });

  selected.addEventListener('click', () => {
    selected.classList.remove(CLASSES.active);
  });

  window.addEventListener('click', (e) => {
    const path = e.path || (e.composedPath && e.composedPath());

    if (path.includes(selected)) return;

    if (optionsContainer.classList.contains(CLASSES.active)) {
      optionsContainer.classList.remove(CLASSES.active);
    }

    if (selectedIndex !== -1) {
      selected.classList.add(CLASSES.active);
    }
  });
}
