
import { createElement } from "../../common/dom";
import { CompoundBlockBase } from "../compoundBlockBase";

export class ListItem extends CompoundBlockBase {
  read(): object {
    throw new Error("Method not implemented.");
  }

  draw(): HTMLElement {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, "width", "16px");
    svg.setAttributeNS(null, "height", "16px");
    svg.setAttributeNS(null, "viewBox", "0 0 512 512");
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttributeNS(null, "d", "M512 165.4c0 127.9-70.05 235.3-175.3 270.1c-20.04 7.938-41.83 12.46-64.69 12.46c-64.9 0-125.2-36.51-155.7-94.47c-54.13 49.93-68.71 107-68.96 108.1C44.72 472.6 34.87 480 24.02 480c-1.844 0-3.727-.2187-5.602-.6562c-12.89-3.098-20.84-16.08-17.75-28.96c9.598-39.5 90.47-226.4 335.3-226.4C344.8 224 352 216.8 352 208S344.8 192 336 192C228.6 192 151 226.6 96.29 267.6c.1934-10.82 1.242-21.84 3.535-33.05c13.47-65.81 66.04-119 131.4-134.2c28.33-6.562 55.68-6.013 80.93-.0054c56 13.32 118.2-7.412 149.3-61.24c5.664-9.828 20.02-9.516 24.66 .8282C502.7 76.76 512 121.9 512 165.4z")

    svg.appendChild(path)

    this.indentArea.appendChild(svg);

    let element:HTMLElement = createElement("div",[],"123")
    element.contentEditable = "true"
    let style:CSSStyleDeclaration = element.style
    style.display = "flex"

    this.contentWrapper.appendChild(element)

    for (let child of this.children) {
      let childElement = child.draw();
      this.contentWrapper.appendChild(childElement);
    }

    return this.wrapper;
  }
}
