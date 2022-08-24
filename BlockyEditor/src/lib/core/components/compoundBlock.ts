import { createElement } from '../../common/dom';

import { IContainer,IBlock } from "../interfaces"
import { Block } from "./block"
export class CompoundBlock extends Block implements IContainer<IBlock> {
  children: Array<IBlock> = []
  chidrenWrapper: HTMLElement = createElement("div")
  indentArea: HTMLElement = createElement("div")

  constructor() {
    super()
    this.indentArea.style.flexShrink = "0"
    this.indentArea.style.padding = "3px"
    this.contentArea.before(this.indentArea)
    this.contentArea.appendChild(this.chidrenWrapper)
  }

  add(child: IBlock) {
    this.children.push(child)
  }

  remove(child: IBlock) {
    this.children = this.children.filter((x) => x.id != child.id)
  }
}
