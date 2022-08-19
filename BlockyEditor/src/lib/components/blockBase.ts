import { Dragger } from "./base/dragger/dragger"
import { Toolbar } from "./base/toolbar/toolbar"
import { Menu } from "./base/menu/menu"
import { createBasicContentEditable, createElement } from "../common/dom"
import { uuid } from "../common/guid"
import { IBlock } from "../interfaces"
import { BlockType } from "../interfaces/type"

export class BlockBase implements IBlock {
  id: string = uuid()
  wrapper!: HTMLElement
  type!: BlockType
  contentWrapper: HTMLElement = createElement("div")
  readonly: boolean = false
  toolBar?: Toolbar
  menu?: Menu
  dragger?: Dragger

  constructor() {
    this.wrapper = createElement("div", [])
    this.wrapper.setAttribute("block-id",this.id)
    if(!this.readonly){
      // this.dragger = new Dragger(this)
      // this.toolBar = new Toolbar(this)
      // this.menu = new Menu(this)
      // this.wrapper.appendChild(this.dragger.draw())
      // this.wrapper.appendChild(this.menu.draw())
      // this.wrapper.appendChild(this.toolBar.draw())
      this.wrapper.appendChild(this.contentWrapper)
    }
    let style: CSSStyleDeclaration = this.wrapper.style
    style.display = "flex"
    this.contentWrapper.className = "w"
    this.contentWrapper.style.flex = "1"
  }

  read():object {
    throw new Error("Method not implemented.")
  }

  draw(): HTMLElement {
    throw new Error("Method not implemented.")
  }

}
