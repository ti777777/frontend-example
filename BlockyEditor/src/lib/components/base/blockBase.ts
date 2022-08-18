
import { Dragger } from "./dragger";
import { Toolbar } from "./toolbar";
import { Menu } from "./menu";
import { createElement } from "../../common/dom";
import { BlockType } from "../../model/model";
import { uuid } from "../../common/guid";

export class BlockBase {
  id: string = uuid()
  wrapper!: HTMLElement;
  type!: BlockType
  contentWrapper: HTMLElement = createElement("div", [], "Type something ...");
  toolBox: HTMLElement = Toolbar()
  menu: HTMLElement = Menu()
  dragger: HTMLElement = Dragger()

  constructor() {
    this.wrapper = createElement("div",[this.toolBox,this.menu,this.dragger,this.contentWrapper]);
    let style: CSSStyleDeclaration = this.wrapper.style;
    style.padding = "20px";
    style.border = "1px solid black";
  }
}
