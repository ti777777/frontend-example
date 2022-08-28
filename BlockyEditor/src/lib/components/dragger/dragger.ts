import { createElement } from "../../common/dom";
import { Component } from '..';

export class Dragger extends Component{
  private wrapper: HTMLElement = createElement("div");

  draw(): HTMLElement {
    return this.wrapper;
  }
}
