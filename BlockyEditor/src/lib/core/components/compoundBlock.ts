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

  draw(): HTMLElement {
    

    for (let child of this.children) {
      let childElement = child.draw();
      this.chidrenWrapper.appendChild(childElement);
    }
    return this.wrapper
  }

  addListener(eventName: string, listener: (event: Event, block: IBlock) => void): void {
    this.blockArea.addEventListener(eventName,(event)=>{
      event.stopPropagation();
      listener(event, this);
    })

    for(let child of this.children){
      child.addListener(eventName,listener)
    }
  }
}
