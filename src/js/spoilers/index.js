import { isMediaBreakpoint } from '../helpers';

export class Spoiler {
  constructor(selector, isDesktop = false) {
    this.spoilers = [...document.querySelectorAll(selector)];
    this.isOnMedia = false;
    this.isDesktop = isDesktop;
    this.init();
  }

  _onToggle(event) {
    if (!isMediaBreakpoint() && !this.isDesktop) return;

    const detailsOpened = this.spoilers.filter((el) => el.hasAttribute('open'));

    if (!detailsOpened.length) return;

    if (event.target.open) {
      detailsOpened.forEach((el) => {
        if (el === event.target) {
          return;
        }

        el.open = false;
      });
    }
  }

  _controlSpoiler() {
    if (this.isDesktop) return;

    if (isMediaBreakpoint() && this.isOnMedia) return;

    if (isMediaBreakpoint()) {
      this.isOnMedia = true;

      this.spoilers.forEach((spoiler) => {
        spoiler.open = false;
      });
    } else {
      this.isOnMedia = false;

      this.spoilers.forEach((spoiler) => {
        spoiler.open = true;
      });
    }
  }

  init() {
    if (!this.spoilers.length) return;

    this._controlSpoiler();

    window.addEventListener('resize', () => this._controlSpoiler());

    this.spoilers.forEach((el) =>
      el.addEventListener('toggle', (e) => this._onToggle(e))
    );
  }
}
