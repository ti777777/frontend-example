import { IBlock } from "./core/interfaces/block.d";
import { Context } from "./core/components/blocks/context";
import { BlockConverter } from "./core/model/converter";

export class Blocky {
  context!: Context;
  constructor(public handle: HTMLElement) {
    this.context = new Context(this.handle);
  }

  static fromHtml(handle: HTMLElement, src: Node): Blocky {
    let ret: Blocky = new Blocky(handle);
    let blocks = BlockConverter.fromHtml(src);

    for (let block of blocks) {
      ret.context.add(block);
    }

    ret.handle = handle;
    return ret;
  }

  move(blockId: string, position: string) {}

  insertAfter(block: IBlock, position: string) {}

  remove(blockId: string) {}

  render() {
    this.context.render();
  }

  save(): object {
    return this.context.read();
  }
}
