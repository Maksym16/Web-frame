import { User } from '../models/User';

export abstract class View {
  constructor(public parent: Element, public model: User) {
    this.model.on('change', () => {
      this.render();
    });
  }

  abstract eventsMap(): { [key: string]: () => void };
  abstract template(): string;

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let key in eventsMap) {
      const [eventName, selector] = key.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[key]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = ''; //to delete old form
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
