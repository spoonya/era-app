import { isMediaBreakpoint } from '../helpers';
import { CLASSES } from '../constants';

export class Spoiler {
  constructor(container) {
    this.spoilerContainer = container;
    this.spoilers = [...this.spoilerContainer.querySelectorAll('details')];
    this.summaries = this.spoilerContainer.querySelectorAll('summary');
    this.isOnMedia = false;
    this.mediaBreakpoint = container.dataset.spoilersMedia || 767.98;
    this.isDesktop = container.dataset.spoilersDesktop;
    this._init();
  }

  _onToggle(event) {
    if (!isMediaBreakpoint(this.mediaBreakpoint) && !this.isDesktop) return;

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

  _showSummaries() {
    this.summaries.forEach((summary) => {
      summary.classList.add(CLASSES.active);
    });
  }

  _hideSummaries() {
    this.summaries.forEach((summary) => {
      summary.classList.remove(CLASSES.active);
    });
  }

  _controlSpoiler() {
    if (this.isDesktop) return;

    if (isMediaBreakpoint(this.mediaBreakpoint) && this.isOnMedia) return;

    if (isMediaBreakpoint(this.mediaBreakpoint)) {
      this.isOnMedia = true;

      this._showSummaries();

      this.spoilers.forEach((spoiler) => {
        spoiler.open = false;
      });
    } else {
      this.isOnMedia = false;

      this._hideSummaries();

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
