
import { IBlock } from "../interfaces/IBlock";
import { createElement } from "../common/dom";
export class Paragraph implements IBlock {
  private model: any = {};
  public element!: HTMLElement;

  constructor() {
    this.element = createElement("div", [], "type something ...");
    this.element.contentEditable = "true";
    this.setStyle();
  }

  setStyle() {
    let style: CSSStyleDeclaration = this.element.style;
    style.border = "1px solid #eee";
  }

  setup(data: any): void {
    this.model = data
  }

  readData(): any {
    return this.model
  }

  render(): HTMLElement {
    if (this.model) this.element.innerHTML = this.model;
    return this.element;
  }
}
