import { CLASSES } from './constants';

export function typeIntroTitle() {
  const titleFade = document.querySelector('#title-fade');
  const titleBounce = document.querySelector('#title-bounce');
  const titleWrapper = document.querySelector('.title.hidden');

  if (!titleFade && !titleBounce) return;

  titleWrapper.classList.remove(CLASSES.hidden);

  titleFade.innerHTML = titleFade.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  titleBounce.innerHTML = titleBounce.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: false })
    .add({
      targets: '#title-fade span',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 500,
      delay: (el, i) => 50 * (i + 1)
    })
    .add({
      targets: '#title-bounce span',
      opacity: [0, 1],
      translateY: ['1.1em', 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i
    });
}
