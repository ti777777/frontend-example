import { createElement } from "../../common/dom"
import { uuid } from "../../common/guid"
import { EditorContext } from "../context/editorContext"
import { IBlock } from "../interfaces"
import { BlockType } from "../model/type"

export class Block implements IBlock {
  id: string = uuid()
  wrapper!: HTMLElement
  type!: BlockType
  contentArea: HTMLElement = createElement("div")
  readonly: boolean = false

  constructor() {
    EditorContext.getInstance().blockMap.set(this.id,this)
    this.wrapper = createElement("div")
    this.wrapper.setAttribute("block-id",this.id)
    this.wrapper.style.display = "flex"
    this.wrapper.appendChild(this.contentArea)
    this.contentArea.style.display = "flex"
    this.contentArea.style.flexDirection = "column"
    this.contentArea.style.flex = "1"
  }

  read():object {
    throw new Error("Method not implemented.")
  }

  draw(): HTMLElement {
    throw new Error("Method not implemented.")
  }
  
  addEvents(){
    this.wrapper
  }

  addStyle(){
  }
}
