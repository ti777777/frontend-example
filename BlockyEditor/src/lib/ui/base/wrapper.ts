
import { Paragraph } from "./../paragraph";
import { IEditor } from "./../../interfaces/IEditor";
import { Dragger } from "./dragger";
import { Toolbar } from "./toolbar";
import { Menu } from "./menu";
import { createElement } from "../../common/dom";

export class EditorWrapper {
  wrapper!: HTMLElement;

  constructor();
  constructor(editor?: IEditor) {
    let components = this.getBasicComponents();
    if (editor) {
      components.push(editor.render());
    } else {
      let model: any = "Type something ...";
      let editor = new Paragraph();
      editor.setup(model);
      components.push(editor.render());
    }
    this.wrapper = createElement("div", components);
  }


  getBasicComponents(): Array<HTMLElement> {
    return [Menu(""), Toolbar(), Dragger()];
  }

  render(): HTMLElement {
    let style: CSSStyleDeclaration = this.wrapper.style;

    style.padding = "20px";
    style.border = "1px solid black";

    return this.wrapper;
  }
}
