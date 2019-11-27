//responsible for events atteched to user
type Callback = () => void;
export class Eventing {
  events: {
    [key: string]: Callback[];
  } = {};
  //on convert to arrow function becouse now this keyword will reference to user insted of undefined
  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || []; //when we first create a user events are undefined
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach(callback => {
      callback();
    });
  };
}
