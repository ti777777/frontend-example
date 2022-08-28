import { Component } from ".."
import { createElement } from "../../common/dom"

export class CreateButton extends Component{
  private wrapper: HTMLElement = createElement("div")

  draw(): HTMLElement {
    const element = createIconElement()
    this.wrapper.appendChild(element)
    return this.wrapper
  }
}

const createIconElement = (): SVGSVGElement => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "width", "16px");
  svg.setAttributeNS(null, "height", "16px");
  svg.setAttributeNS(null, "viewBox", "0 0 448 512");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttributeNS(
    null,
    "d",
    "M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
  );

  svg.appendChild(path);
  return svg;
}