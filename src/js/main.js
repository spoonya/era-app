import { controlHeaderBurger } from './burger';
import { controlDropwdown } from './dropdown';
import { initSpecParallax } from './rellax';
import { typeIntroTitle } from './text-typing';
import { Spoiler } from './spoilers';

controlHeaderBurger();
typeIntroTitle();
initSpecParallax();
controlDropwdown();

Spoiler.init({
  selector: '[data-spoilers]'
});

AOS.init({
  disable: 'mobile',
  easing: 'ease',
  once: true
});
