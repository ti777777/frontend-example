export interface IEvent {
  name: string;
  handler: (evt: Event) => void;
}
