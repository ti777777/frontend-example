import { createElement } from './../common/dom';

import { IContainer,IBlock } from "../interfaces"
import { BlockBase } from "./blockBase"
export class CompoundBlockBase extends BlockBase implements IContainer<IBlock> {
  children: Array<IBlock> = []
  indentArea: HTMLElement = createElement("div")

  constructor(){
    super()
    this.indentArea.style.flexShrink = "1"
    this.contentWrapper.style.padding = "0"
    this.contentWrapper.before(this.indentArea)
  }

  add(child: IBlock) {
    this.children.push(child)
  }

  remove(child: IBlock) {
    this.children = this.children.filter((x) => x.id != child.id)
  }
}
