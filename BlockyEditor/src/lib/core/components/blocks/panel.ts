import { Paragraph, Toggle } from "."
import { IBlock, IContainer } from "../../interfaces"
export class Panel implements IContainer<IBlock>{
  private children: Array<IBlock> = []

  constructor(public handle: HTMLElement) {
    let toggle = new Toggle(this)
    toggle.add(new Paragraph(toggle))
    this.add(new Paragraph(this))
    this.add(toggle)
  }

  read(): object {
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
