import { IDrawable } from './../../interfaces/drawable';
import { BlockBase } from '../blockBase';
import { createElement } from "../../common/dom"

export class Toolbar implements IDrawable{
    private wrapper: HTMLElement = createElement("div")

    constructor(
        public block: BlockBase
    ){}

    draw():HTMLElement{
        return this.wrapper
    }
}