import { IEvent } from "./../interfaces/IEvent";
import { IEditor } from "./../interfaces/IEditor";
import { createElement } from "../common/dom";
export class Paragraph implements IEditor {
  public element!: HTMLElement

  constructor() {
    this.element = createElement("div",[],"type something ...")
    this.element.contentEditable = "true";
    this.setStyle();
    this.bindEvents();
  }

  setStyle(){
    let style:CSSStyleDeclaration = this.element.style

    style.border = "1px solid #eee"
  } 

  bindEvents() {
    let events: Array<IEvent> = [];
    Array.from(events).forEach((event) => {
      this.element.addEventListener(event.name, event.handler);
    });
  }

  save(): Object {
    return {}
  }

  render(model?: Object): HTMLElement {
    return this.element;
  }
}
