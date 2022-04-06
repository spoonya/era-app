import { controlHeaderBurger } from './burger';
import { controlDropwdown } from './dropdown';
import { initSpecParallax } from './rellax';
import { typeIntroTitle } from './text-typing';
import { Spoiler } from './spoilers';
import { controlLangButton } from './lang-button';
import { controlModal } from './modal';
import { controlUploadButton } from './form/upload-button';

controlHeaderBurger();
controlLangButton();
typeIntroTitle();
initSpecParallax();
controlDropwdown();
controlModal();
controlUploadButton();

Spoiler.init({
  selector: '[data-spoilers]'
});

AOS.init({
  disable: 'mobile',
  easing: 'ease',
  once: true
});
