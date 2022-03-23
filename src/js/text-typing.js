export function typeIntroTitle() {
  const split = function (element) {
    const words = $(element).text().split('');

    for (let i = 0; i < words.length; i++) {
      words[i] = `<span>${words[i]}</span>`;
    }

    const text = words.join('');
    $(element).html(text);
  };

  const textify = function (element, method, delay) {
    split(element);
    $(`${element} span`).css('opacity', '0');
    $(`${element} span`).css('position', 'relative');

    const inSpead = 20;
    let count = 0;

    setTimeout(() => {
      count = 0;
      $(`${element} span`).each(function () {
        if (method === 'fade') {
          $(this)
            .delay(0 + inSpead * count)
            .animate({ opacity: '1' }, 200);
        } else if (method === 'bounce') {
          $(this)
            .delay(0 + inSpead * count)
            .animate({ opacity: '1', top: '-6px' }, 220, 'easeOutCubic');
          $(this)
            .delay(0 + (inSpead * count) / 4)
            .animate({ opacity: '1', top: '0px' }, 220);
        }
        count += 1;
      });
    }, delay);
  };

  textify('#title-fade', 'fade', 100);
  textify('#title-bounce', 'bounce', 900);
}
