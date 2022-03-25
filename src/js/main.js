import { controlHeaderBurger } from './burger';
import { controlDropwdown } from './dropdown';
import { initSpecParallax } from './rellax';
import { initSpoilersJoin } from './spoilers/join';
import { typeIntroTitle } from './text-typing';

controlHeaderBurger();
typeIntroTitle();
initSpecParallax();
controlDropwdown();
initSpoilersJoin();

AOS.init({
  disable: 'mobile',
  easing: 'ease',
  once: true
});
