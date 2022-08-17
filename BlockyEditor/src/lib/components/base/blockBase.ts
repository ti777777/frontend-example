
import { Dragger } from "./dragger";
import { Toolbar } from "./toolbar";
import { Menu } from "./menu";
import { createElement } from "../../common/dom";

export class BlockBase {
  private wrapper!: HTMLElement;
  element!: HTMLElement;
  constructor() {
    let components = this.getBasicComponents();
    this.wrapper = createElement("div", [...components,this.element]);
    let style: CSSStyleDeclaration = this.wrapper.style;
    style.padding = "20px";
    style.border = "1px solid black";
  }

  getBasicComponents(): Array<HTMLElement> {
    return [Menu(""), Toolbar(), Dragger()];
  }
}
