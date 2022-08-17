
import { Dragger } from "./dragger";
import { Toolbar } from "./toolbar";
import { Menu } from "./menu";
import { createElement } from "../../common/dom";
import { BlockType } from "../../model/model";

export class BlockBase {
  private wrapper!: HTMLElement;
  type!: BlockType
  contentElement!: HTMLElement;
  toolBox: HTMLElement = Toolbar()
  menu: HTMLElement = Menu()
  dragger: HTMLElement = Dragger()

  constructor() {
    this.wrapper = createElement("div",[this.toolBox,this.menu,this.dragger]);
    let style: CSSStyleDeclaration = this.wrapper.style;
    style.padding = "20px";
    style.border = "1px solid black";
  }
}
