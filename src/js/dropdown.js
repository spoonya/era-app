import { CLASSES } from './constants';

export function controlDropwdown() {
  const selectedList = document.querySelectorAll(
    '[data-form-dropdown-selected]'
  );

  selectedList.forEach((selected) => {
    const dropdown = selected.closest('[data-form-dropdown]');
    const optionsContainer = dropdown.querySelector(
      '[data-form-dropdown-container]'
    );
    let isSelected = false;

    optionsContainer.addEventListener('click', (e) => {
      // Prevent label click
      e.preventDefault();

      const option = e.target.closest('[data-form-dropdown-option]');

      if (e.target.tagName === 'DIV') {
        option.querySelector('input').checked = true;
      }

      selected.textContent = option.querySelector('label').innerText;
      optionsContainer.classList.remove('active');
      isSelected = true;

      console.log(option.querySelector('input'));
    });

    selected.addEventListener('click', () => {
      optionsContainer.classList.toggle(CLASSES.active);
      selected.classList.remove(CLASSES.active);
    });

    window.addEventListener('click', (e) => {
      const path = e.path || (e.composedPath && e.composedPath());

      if (path.includes(selected)) return;

      if (optionsContainer.classList.contains(CLASSES.active)) {
        optionsContainer.classList.remove(CLASSES.active);
      }

      if (isSelected) {
        selected.classList.add(CLASSES.active);
      }
    });
  });
}
