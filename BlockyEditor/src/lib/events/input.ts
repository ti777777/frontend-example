import { IEvent } from '../interfaces/event';
export class InputEvent implements IEvent{
    name: string = "input";
    handler(evt:Event){
    }
}