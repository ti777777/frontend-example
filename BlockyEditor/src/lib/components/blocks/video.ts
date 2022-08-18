import { createElement } from "../../common/dom";
import { BlockType } from "../../interfaces/type.d";
import { BlockBase } from "../blockBase";

export class Video extends BlockBase{
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
    this.contentWrapper.appendChild(element)
    return this.wrapper
  }

  read(): any {
    return this.model
  }
}