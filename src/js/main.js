import { controlDropwdown } from './dropdown';
import { typeIntroTitle } from './text-typing';

typeIntroTitle();
controlDropwdown();

AOS.init({
  disable: 'phone',
  easing: 'ease',
  once: true
});
