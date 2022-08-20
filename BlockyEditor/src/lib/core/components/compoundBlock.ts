import { createElement } from '../../common/dom';

import { IContainer,IBlock } from "../interfaces"
import { Block } from "./block"
export class CompoundBlock extends Block implements IContainer<IBlock> {
  children: Array<IBlock> = []
  childrenArea: HTMLElement = createElement("div")

  constructor(){
    super()
    this.childrenArea.style.padding = "0"
    this.wrapper.appendChild(this.childrenArea)
  }

  add(child: IBlock) {
    this.children.push(child)
  }

  remove(child: IBlock) {
    this.children = this.children.filter((x) => x.id != child.id)
  }
}
