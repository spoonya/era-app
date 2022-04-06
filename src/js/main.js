import { controlHeaderBurger } from './burger';
import { controlDropwdown } from './dropdown';
import { initSpecParallax } from './rellax';
import { typeIntroTitle } from './text-typing';
import { Spoiler } from './spoilers';
import { controlLangButton } from './lang-button';
import { controlModal } from './modal';
import { controlUploadButton } from './form/upload-button';
import { controlFooterMenu } from './footer';

controlHeaderBurger();
controlLangButton();
typeIntroTitle();
initSpecParallax();
controlDropwdown();
controlModal();
controlUploadButton();
controlFooterMenu();

Spoiler.init({
  selector: '[data-spoilers]'
});

AOS.init({
  disable: 'mobile',
  easing: 'ease',
  once: true
});
