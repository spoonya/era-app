export function controlAnchorLinks() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  if (!anchorLinks.length) return;

  anchorLinks.forEach((anchorLink) => {
    anchorLink.addEventListener('click', (e) => {
      const id = anchorLink.getAttribute('href');

      if (id === '#') return;

      e.preventDefault();
      const target = document.querySelector(id);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}
