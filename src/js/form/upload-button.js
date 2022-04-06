export function controlUploadButton() {
  const uploadButtons = document.querySelectorAll('input[type="file"]');

  if (!uploadButtons.length) return;

  uploadButtons.forEach((uploadButton) => {
    uploadButton.addEventListener('change', () => {
      const fileName = uploadButton.value.split('\\').pop();
      const placeholder = uploadButton
        .closest('.form__control')
        .querySelector('.form__placeholder span');

      placeholder.textContent = fileName;
    });
  });
}
