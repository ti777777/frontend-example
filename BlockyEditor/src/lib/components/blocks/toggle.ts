import { CompoundBlockBase } from './../base/compundBlockBase';
import { IBlock } from "../../interfaces/block";

export class Toggle extends CompoundBlockBase implements IBlock {
    read() {
        throw new Error("Method not implemented.");
    }

    draw(): HTMLElement {
        for(let child of this.children){
            let childElement = child.draw()
            this.contentWrapper.appendChild(childElement)
        }

        return this.wrapper
    }
}