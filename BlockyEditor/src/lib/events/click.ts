import { IEvent } from '../interfaces/event'
export class ClickEvent implements IEvent{
    name: string = "click"
    handler(evt:Event):void{
    }
}