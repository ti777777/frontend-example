import { IEvent } from './../interfaces/IEvent';
export class ClickEvent implements IEvent{
    name: string = "click";
    handler(evt:Event):void{
        console.log(this)
    }
}