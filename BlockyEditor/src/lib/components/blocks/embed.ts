import { createElement } from "../../common/dom";
import { BlockType } from "../../interfaces/type.d";
import { BlockBase } from "../blockBase";

export class Embed extends BlockBase{
  type = BlockType.Embed
  model: any = {}

  draw():HTMLElement{
    let element:HTMLEmbedElement = createElement("embed") as HTMLEmbedElement
    element.width = "100%"
    element.height = "700px"
    element.src = "/assets/SMOlecture.pdf"
    this.contentWrapper.appendChild(element)
    return this.wrapper
  }

  read(): any {
    return this.model
  }
}