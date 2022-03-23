import { controlDropwdown } from './dropdown';
import { initSpecParallax } from './rellax';
import { typeIntroTitle } from './text-typing';

typeIntroTitle();
initSpecParallax();
controlDropwdown();

AOS.init({
  disable: 'phone',
  easing: 'ease',
  once: true
});
