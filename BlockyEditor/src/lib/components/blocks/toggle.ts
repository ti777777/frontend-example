import { createTextNode } from '../../common/dom'
import { CompoundBlockBase } from '../compoundBlockBase'

export class Toggle extends CompoundBlockBase{
    read() :object{
        throw new Error("Method not implemented.")
    }

    draw(): HTMLElement {
        this.contentWrapper.appendChild(createTextNode(">"))
      
        for(let child of this.children){
            let childElement = child.draw()
            this.contentWrapper.appendChild(childElement)
        }

        return this.wrapper
    }
}