import { Toggle } from './toggle';
import { Paragraph } from './paragraph';
import { IBlock } from "../../interfaces/block";
import { IContainer } from "../../interfaces/container";
export class Panel implements IContainer{
    
    private children: Array<IBlock> = []

    constructor(
        public handle: HTMLElement
    ){
        this.add(new Paragraph())
        this.add(new Paragraph())
        this.add(new Paragraph())
        this.add(new Paragraph())
        let toggle = new Toggle();
        toggle.add(new Paragraph())
        toggle.add(new Paragraph())
        toggle.add(new Paragraph())
        this.add(toggle)
    }

    read() {
        throw new Error("Method not implemented.");
    }

    render(){
        for(let block of this.children){
            this.handle.appendChild(block.draw())
        }
    }
    
    add(child: IBlock){
        this.children.push(child)
    }

    remove(child: IBlock){
        
    }
}