import { isMobile } from './helpers/is-mobile';

export function initSpecParallax() {
  if (isMobile()) return;

  const rellax = new Rellax('.rellax', {
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });
}
