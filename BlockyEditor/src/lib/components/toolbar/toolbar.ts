import { createElement } from "../../common/dom"
import { Component } from '..';
import { Core } from '../../core';

export class Toolbar extends Component{
    private wrapper: HTMLElement = createElement("div")

    draw():HTMLElement{
        return this.wrapper
    }
}

const createToolBar = (core: Core) =>{
    
}