import { Dragger } from "./dragger";
import { Toolbar } from "./toolbar";
import { Menu } from "./menu";
import { createElement } from "./../common/dom";

export class EditorBase {
  UI!:HTMLElement;
  private wrapper!: HTMLElement;
  constructor() {
    this.wrapper = createElement("div", this.getBasicComponents());
  }

  getBasicComponents(): Array<HTMLElement> {
    return [Menu(""), Toolbar(), Dragger()];
  }

  render(): HTMLElement{
    return this.wrapper.appendChild(this.UI)
  }
}
