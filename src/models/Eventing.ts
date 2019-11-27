//responsible for events atteched to user
type Callback = () => void;
export class Eventing {
  events: {
    [key: string]: Callback[];
  } = {};

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || []; //when we first create a user events are undefined
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach(callback => {
      callback();
    });
  }
}
