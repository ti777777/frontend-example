import { IContainer } from './interfaces/container.d';
import { IBlock } from './interfaces/block.d';
import { Panel } from "./blocks/panel"
import { BlockBuilder } from './model/builder';
export class Core {
    panel!: Panel;

    constructor(public handle: HTMLElement,public blocks: any) {
      this.panel = new Panel(this.handle);
      for(let block of blocks){
        let builder:BlockBuilder = new BlockBuilder();
        builder.setType(block.type)
        this.insertNewBlock(builder.build())
      }
    }

    render(){
        this.panel.render()
    }

    save(): object {
        return this.panel.read()
    }

    addListenerToBlocks(eventName: string,listener: (event: Event,block: IBlock)=>void){
        this.panel.addListener(eventName,listener)
    }
    
    findBlockById(id: string): IBlock{
        throw new Error()
    }

    findParentById(id: string): IContainer<IBlock>{
        throw new Error()
    }

    moveTofirst(blockId: string, parent: string) {}

    insertfirstChild(block: IBlock, parent: string) {}

    insertNewBlock(block: IBlock){
        this.panel.children.push(block)
    }

    remove(blockId: string) {}
}