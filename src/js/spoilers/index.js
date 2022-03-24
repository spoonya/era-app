import { isMediaBreakpoint } from '../helpers';

export class Spoiler {
  constructor(selector) {
    this.spoilers = [...document.querySelectorAll(selector)];
    this.isOnMedia = false;
  }

  _onToggle(event) {
    const detailsOpened = this.spoilers.filter((el) => el.hasAttribute('open'));

    if (!detailsOpened.length || !isMediaBreakpoint()) return;

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
