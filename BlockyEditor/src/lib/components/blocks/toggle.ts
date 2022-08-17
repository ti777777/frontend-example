import { IBlock } from "../../interfaces/block";
import { IContainer } from "../../interfaces/container";
import { BlockBase } from "../base/blockBase";

export class Toggle extends BlockBase implements IBlock,IContainer {
    private children: Array<IBlock> = []

    read() {
        throw new Error("Method not implemented.");
    }

    draw(): HTMLElement {
        throw new Error("Method not implemented.");
    }
    
    add(child: IBlock){
        this.children.push(child)
    }

    remove(child: IBlock){
        
    }
}