import { controlHeaderBurger } from './burger';
import { controlDropwdown } from './dropdown';
import { initSpecParallax } from './rellax';
import { typeIntroTitle } from './text-typing';
import { Spoiler } from './spoilers';

controlHeaderBurger();
typeIntroTitle();
initSpecParallax();
controlDropwdown();

const spoilersJoin = new Spoiler('#spoilers-join details');
const spoilersStages = new Spoiler('#spoilers-stages details');
const spoilersAso = new Spoiler('#spoilers-aso details', true);

AOS.init({
  disable: 'mobile',
  easing: 'ease',
  once: true
});
