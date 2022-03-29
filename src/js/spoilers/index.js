import { isMediaBreakpoint } from '../helpers';

export class Spoiler {
  constructor(container) {
    this.spoilerContainer = container;
    this.spoilers = [...this.spoilerContainer.querySelectorAll('details')];
    this.isOnMedia = false;
    this.isDesktop = container.dataset.spoilersDesktop;
    this._init();
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

  _init() {
    this._controlSpoiler();

    window.addEventListener('resize', () => this._controlSpoiler());

    this.spoilers.forEach((el) =>
      el.addEventListener('toggle', (e) => this._onToggle(e))
    );
  }

  static init({ selector }) {
    const spoilerContainers = document.querySelectorAll(selector);

    if (!spoilerContainers.length) return;

    spoilerContainers.forEach((container) => {
      const spoiler = new Spoiler(container);
    });
  }
}
