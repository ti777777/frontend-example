import { CompoundBlockBase } from '../base/compoundBlockBase';

export class Toggle extends CompoundBlockBase{
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