export const createElement = (
  tag: string,
  children?: Array<Node>,
  text?: string
): HTMLElement => {
  const element = document.createElement(tag);

  if (text) {
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
  }

  if (children && children.length > 0) {
    children.forEach((child) => {
      element.appendChild(child);
    });
  }

  return element;
};

export const createTextNode = (text: string): Text => {
  return document.createTextNode(text);
};

export const createBasicContentEditable = (): HTMLElement => {
  const element: HTMLElement = createElement("div", [], "1");
  element.contentEditable = "true";
  element.style.minHeight = "18px";
  element.style.outline = "none";
  return element;
};

export const parseElementFromString = (text: string): HTMLElement => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/html");
  return doc.body.firstChild as HTMLElement;
};
