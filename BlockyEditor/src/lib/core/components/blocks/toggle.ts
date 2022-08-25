import { createBasicContentEditable, createElement } from '../../../common/dom';
import { CompoundBlock } from "../compoundBlock";

export class Toggle extends CompoundBlock {
  read(): object {
    throw new Error("Method not implemented.");
  }

  draw(): HTMLElement {
    const icon = createToggleIconElement()
    icon.style.flexShrink = "auto"

    this.indentArea.appendChild(icon)
    this.blockArea.appendChild(createBasicContentEditable())

    for (let child of this.children) {
      let childElement = child.draw();
      this.chidrenWrapper.appendChild(childElement);
    }

    return this.wrapper;
  }
}

const createToggleIconElement = (): HTMLElement => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "width", "16px");
  svg.setAttributeNS(null, "height", "16px");
  svg.setAttributeNS(null, "viewBox", "0 0 256 512");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttributeNS(
    null,
    "d",
    "M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
  );

  svg.appendChild(path);
  const icon:HTMLElement = createElement("span")
  icon.appendChild(svg)
  return icon;
};
