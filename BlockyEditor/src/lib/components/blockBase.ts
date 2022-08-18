import { Dragger } from "./base/dragger"
import { Toolbar } from "./base/toolbar"
import { Menu } from "./base/menu"
import { createElement } from "../common/dom"
import { BlockType } from "../model/model"
import { uuid } from "../common/guid"
import { IBlock } from "../interfaces"

export class BlockBase implements IBlock {
  id: string = uuid()
  wrapper!: HTMLElement
  type!: BlockType
  contentWrapper: HTMLElement = createElement(
    "div",
    [],
    "Type something ..."
  )
  readonly: boolean = false
  toolBar?: Toolbar
  menu?: Menu
  dragger?: Dragger

  constructor() {
    this.wrapper = createElement("div", [])
    if(!this.readonly){
      this.dragger = new Dragger(this)
      this.toolBar = new Toolbar(this)
      this.menu = new Menu(this)
      this.wrapper.appendChild(this.dragger.draw())
      this.wrapper.appendChild(this.menu.draw())
      this.wrapper.appendChild(this.toolBar.draw())
    }
    let style: CSSStyleDeclaration = this.wrapper.style
    style.padding = "20px"
    style.border = "1px solid black"
  }

  read() {
    throw new Error("Method not implemented.")
  }

  draw(): HTMLElement {
    throw new Error("Method not implemented.")
  }

}
