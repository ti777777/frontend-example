import { IContainer } from './interfaces/container.d';
import { Panel } from "./blocks/panel"
import { BlockBuilder } from './model/builder';
import { Block } from './blocks/block';
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

    addListenerToBlocks(eventName: string,listener: (event: Event,block: Block)=>void){
        this.panel.addListener(eventName,listener)
    }
    
    findBlockById(id: string): Block{
        throw new Error()
    }

    findParentById(id: string): IContainer<Block>{
        throw new Error()
    }

    moveTofirst(blockId: string, parent: string) {}

    insertfirstChild(block: Block, parent: string) {}

    insertNewBlock(block: Block){
        this.panel.children.push(block)
    }

    remove(blockId: string) {}
}