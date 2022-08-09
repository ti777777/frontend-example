import { createElement,createTextNode } from "../../common/dom";

export const Menu = (text:string): HTMLElement => {
  return createElement(
    "div",
    [
      createElement("span", [], "option 1"),
      createTextNode(" "),
      createElement("span", [], "option 2"),
      createTextNode(" "),
      createElement("span", [], "option 3"),
    ],
    text
  );
};
