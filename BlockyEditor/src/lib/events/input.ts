import { IEvent } from './../interfaces/IEvent';
export class InputEvent implements IEvent{
    name: string = "input";
    handler(evt:Event){
    }
}