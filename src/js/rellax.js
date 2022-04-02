import { isMobile } from './helpers';

export function initSpecParallax() {
  if (isMobile() || !document.querySelector('.rellax')) return;

  const rellax = new Rellax('.rellax', {
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
}
