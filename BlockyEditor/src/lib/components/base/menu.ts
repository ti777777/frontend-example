import { createElement,createTextNode } from "../../common/dom";

export const Menu = (): HTMLElement => {
  return createElement(
    "div",
    [
      createElement("span", [], "option 1"),
      createTextNode(" "),
      createElement("span", [], "option 2"),
      createTextNode(" "),
      createElement("span", [], "option 3"),
    ]
  );
};
