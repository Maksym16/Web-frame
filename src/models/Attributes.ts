export class Attributes<T> {
  constructor(public data: T) {}

  //we can use generics on metods Definition as well
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(props: T): void {
    Object.assign(this.data, props);
  }
}
