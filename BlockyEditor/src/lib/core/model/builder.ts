import { Paragraph, Image, Toggle } from "../blocks"
import { Block } from "../blocks/block"
import { CompoundBlock } from "../blocks/compoundBlock"
import { BlockType } from "./type"

export class BlockBuilder{
    private _block: Block = new Block()

    constructor(){}

    setType(type: BlockType){
        switch(type){
            case BlockType.Text:
                this._block = new Paragraph()
                break
            case BlockType.Image:
                this._block = new Image()
                break
            case BlockType.Toggle:
                this._block = new Toggle()
        }
    }

    setModel(model: any){
        this._block.model = model

        if(this._block instanceof CompoundBlock){
            if(model && model.children){
                for(let child of model.children){
                    let builder:BlockBuilder = new BlockBuilder()
                    builder.setType(child.type)
                    builder.setModel(child.model)
                    this._block.children.push(builder.build())
                }
            }
        }
    }

    build(): Block{
        return this._block;
    }
}