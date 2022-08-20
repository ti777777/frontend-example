import { IDrawable } from '../../core/interfaces/drawable';

import { BlockBase } from "../../core/components/block";
import { createElement } from "../../common/dom";

export class Dragger implements IDrawable {
  private wrapper: HTMLElement = createElement("div");

  constructor(public block: BlockBase) {}

  draw(): HTMLElement {
    return this.wrapper;
  }
}
