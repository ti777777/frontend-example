import { IBlock } from "../../interfaces/block";
export class Container implements IBlock{
    private children: Array<IBlock> = []

    read() {
        throw new Error("Method not implemented.");
    }

    render(): HTMLElement {
        throw new Error("Method not implemented.");
    }
    
    add(child: IBlock){
        this.children.push(child)
    }

    remove(child: IBlock){
        
    }
}