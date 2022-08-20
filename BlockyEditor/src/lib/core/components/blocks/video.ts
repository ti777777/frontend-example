import { createElement } from "../../../common/dom";
import { BlockType } from "../../model/type";
import { Block } from "../block";

export class Video extends Block{
  type = BlockType.Video
  model: any = {}

  draw():HTMLElement{
    let element:HTMLVideoElement = createElement("video") as HTMLVideoElement
    let source:HTMLSourceElement = createElement("source") as HTMLSourceElement
    element.style.width = "100%"
    element.controls = true
    element.autoplay = true
    element.muted = true
    source.src = "/assets/BigBuckBunny.mp4"
    source.type = "video/mp4"
    element.appendChild(source)
    this.contentArea.appendChild(element)
    return this.wrapper
  }

  read(): any {
    return this.model
  }
}