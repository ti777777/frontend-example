import { IBlock } from "../../interfaces/block"
import { IContainer } from "../../interfaces/container"
import { BlockBase } from "./blockBase"
export class CompoundBlockBase extends BlockBase implements IContainer {
  children: Array<IBlock> = []

  add(child: IBlock) {
    this.children.push(child)
  }

  remove(child: IBlock) {
    this.children = this.children.filter((x) => x.id != child.id)
  }
}
