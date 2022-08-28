import { createElement } from "../../common/dom";
import { BlockType } from "../model/type";
import { Block } from "../blocks/block";

export class Image extends Block{
  type = BlockType.Image
  model: any = {}

  draw():HTMLElement{
    let element: HTMLImageElement = createElement("img") as HTMLImageElement
    element.src= "https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg"
    this.contentArea.appendChild(element)
    return this.wrapper
  }

  read(): any {
    return this.model
  }
}