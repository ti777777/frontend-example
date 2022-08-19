import { createElement } from './../common/dom';
import { IDrawable } from './../interfaces/drawable.d';
export class SvgIcon implements IDrawable{
    draw(): HTMLElement {
        let element: HTMLElement = createElement("i")
        return element
    }
}