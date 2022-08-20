import { createElement } from "../../../common/dom";
import { BlockType } from "../../model/type";
import { Block } from "../block";

export class Embed extends Block{
  type = BlockType.Embed
  model: any = {}

  draw():HTMLElement{
    let element:HTMLEmbedElement = createElement("embed") as HTMLEmbedElement
    element.width = "100%"
    element.height = "700px"
    element.src = "/assets/SMOlecture.pdf"
    this.contentArea.appendChild(element)
    return this.wrapper
  }

  read(): any {
    return this.model
  }
}