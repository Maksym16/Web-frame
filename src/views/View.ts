import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};
  constructor(public parent: Element, public model: T) {
    this.model.on('change', () => {
      this.render();
    });
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let key in eventsMap) {
      const [eventName, selector] = key.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[key]);
      });
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = ''; //to delete old form
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}
