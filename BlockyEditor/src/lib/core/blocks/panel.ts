import { Block } from "./block"
import { CompoundBlock } from "./compoundBlock"
export class Panel extends CompoundBlock{
  children: Array<Block> = []

  constructor(public handle: HTMLElement) {
    super()
  }

  read(): object {
    throw new Error("Method not implemented.")
  }

  render() {
    for (let block of this.children) {
      this.handle.appendChild(block.draw())
    }
  }

  add(child: Block) {
    this.children.push(child)
  }

  remove(child: Block) {
    this.children = this.children.filter((x) => x.id != child.id)
  }
}
