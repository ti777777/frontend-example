import { IContainer } from './interfaces/container.d';
import { IBlock } from './interfaces/block.d';
import { Context } from "./components/blocks/context";
export class Core {
    context!: Context;

    constructor(public handle: HTMLElement) {
      this.context = new Context(this.handle);
    }
    
    static findBlockById(id: string): IBlock{
        throw new Error()
    }

    static findParentById(id: string): IContainer<IBlock>{
        throw new Error()
    }
    moveToNext(blockId: string, position: string) {}

    moveTofirst(blockId: string, parent: string) {}

    insertAfter(block: IBlock, position: string) {}

    insertfirstChild(block: IBlock, parent: string) {}

    remove(blockId: string) {}
}