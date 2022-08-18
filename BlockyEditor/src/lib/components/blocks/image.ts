import { createElement } from "../../common/dom";
import { BlockType } from "../../interfaces/type.d";
import { BlockBase } from "../blockBase";

export class Image extends BlockBase{
  type = BlockType.Image
  model: any = {}

  draw():HTMLElement{
    let element: HTMLImageElement = createElement("img") as HTMLImageElement
    element.src= "https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg"
    this.contentWrapper.appendChild(element)
    return this.wrapper
  }

  read(): any {
    return this.model
  }
}