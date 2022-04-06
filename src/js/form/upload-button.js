export function controlUploadButton() {
  const uploadButtons = document.querySelectorAll('input[type="file"]');

  if (!uploadButtons.length) return;

  uploadButtons.forEach((uploadButton) => {
    const placeholder = uploadButton
      .closest('.form__control')
      .querySelector('.form__placeholder span');
    const placeholderInitial = placeholder ? placeholder.textContent : '';

    uploadButton.addEventListener('change', () => {
      const fileName = uploadButton.value.split('\\').pop();

      placeholder.textContent = fileName || placeholderInitial;
    });
  });
}
