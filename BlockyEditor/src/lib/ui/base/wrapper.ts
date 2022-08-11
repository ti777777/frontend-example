
import { Paragraph } from "../paragraph";
import { IBlock } from "../../interfaces/IBlock";
import { Dragger } from "./dragger";
import { Toolbar } from "./toolbar";
import { Menu } from "./menu";
import { createElement } from "../../common/dom";

export class BlockWrapper {
  wrapper!: HTMLElement;

  constructor();
  constructor(block?: IBlock) {
    let components = this.getBasicComponents();
    if (block) {
      components.push(block.render());
    } else {
      let model: any = "Type something ...";
      let block = new Paragraph();
      block.setup(model);
      components.push(block.render());
    }
    this.wrapper = createElement("div", components);
  }


  getBasicComponents(): Array<HTMLElement> {
    return [Menu(""), Toolbar(), Dragger()];
  }

  render(): HTMLElement {
    let style: CSSStyleDeclaration = this.wrapper.style;

    style.padding = "20px";
    style.border = "1px solid black";

    return this.wrapper;
  }
}
