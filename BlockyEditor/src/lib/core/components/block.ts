import { createElement } from "../../common/dom"
import { uuid } from "../../common/guid"
import { IBlock } from "../interfaces"
import { BlockType } from "../model/type"

export class Block implements IBlock {
  id: string = uuid()
  wrapper!: HTMLElement
  type!: BlockType
  contentArea: HTMLElement = createElement("div")
  readonly: boolean = false

  constructor() {
    this.wrapper = createElement("div", [])
    this.wrapper.className = "block-wrapper"
    this.wrapper.setAttribute("block-id",this.id)
    this.appendComponents()
    let style: CSSStyleDeclaration = this.wrapper.style
    style.display = "flex"
    this.contentArea.className = "content-wrapper"
    this.contentArea.style.flex = "1"
   
  }

  read():object {
    throw new Error("Method not implemented.")
  }

  draw(): HTMLElement {
    throw new Error("Method not implemented.")
  }

  appendComponents(){
      this.wrapper.appendChild(this.contentArea)
  }
  
  addEvents(){
    this.wrapper
  }

  addStyle(){
  }
}
