import { IBlock } from "../../interfaces/block";
import { IContainer } from "../../interfaces/container";
export class Panel implements IBlock,IContainer{
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