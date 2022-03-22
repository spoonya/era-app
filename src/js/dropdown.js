export function controlDropwdown() {
  const selected = document.querySelector('#service-selected');
  const optionsContainer = document.querySelector('#service-container');

  const optionsList = document.querySelectorAll('.form__option');

  selected.addEventListener('click', () => {
    optionsContainer.classList.toggle('active');
  });

  optionsList.forEach((o) => {
    o.addEventListener('click', () => {
      selected.innerHTML = o.querySelector('label').innerHTML;
      optionsContainer.classList.remove('active');
    });
  });
}
