import { Toggle } from "./toggle"
import { Paragraph } from "./paragraph"
import { IBlock, IContainer } from "../../interfaces"
import { Video } from "./video"
import { Image } from "./image"
import { Embed } from "./embed"
export class Panel implements IContainer {
  private children: Array<IBlock> = []

  constructor(public handle: HTMLElement) {
    this.add(new Paragraph())
    this.add(new Embed())
    this.add(new Paragraph())
    let toggle = new Toggle()
    toggle.add(new Image())
    toggle.add(new Paragraph())
    toggle.add(new Video())
    this.add(toggle)
  }

  read(): any {
    throw new Error("Method not implemented.")
  }

  render() {
    for (let block of this.children) {
      this.handle.appendChild(block.draw())
    }
  }

  add(child: IBlock) {
    this.children.push(child)
  }

  remove(child: IBlock) {
    this.children = this.children.filter((x) => x.id != child.id)
  }
}
