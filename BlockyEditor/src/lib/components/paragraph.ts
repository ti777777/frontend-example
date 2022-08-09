import { IEvent } from "./../interfaces/IEvent";
import { createElement } from "./../common/dom";
import { IEditor } from "./../interfaces/IEditor";
import { EditorBase } from "./base";
export class Paragraph extends EditorBase implements IEditor {
  constructor() {
    super();
    this.intialUI()
    this.bindEvents()
  }

  intialUI(){
    this.UI = createElement("p", [], "paragrapgh");
  }

  bindEvents() {
    let events: Array<IEvent> = [];
    Array.from(events).forEach((event) => {
      this.UI.addEventListener(event.name, event.handler);
    });
  }
}
