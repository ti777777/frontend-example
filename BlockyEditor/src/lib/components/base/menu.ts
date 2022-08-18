import { IDrawable } from './../../interfaces/drawable';
import { BlockBase } from '../blockBase'
import { createElement, createTextNode } from "../../common/dom"

export class Menu implements IDrawable{
  private wrapper: HTMLElement = createElement("div", [
    createElement("span", [], "option 1"),
    createTextNode(" "),
    createElement("span", [], "option 2"),
    createTextNode(" "),
    createElement("span", [], "option 3"),
  ])

  constructor(
    public block: BlockBase
  ){}

  draw(): HTMLElement {
    return this.wrapper
  }
}
