import { EditorWrapper } from './components/base/wrapper';
import { Paragraph } from './components/paragraph';
import { IModel } from "./interfaces/IModel";
import { IEditor } from "./interfaces/IEditor";
import { BlockyModel } from "./model/model";

export class Blocky {
  handle!: HTMLElement;
  model!: Array<IModel>;
  constructor() {}
  static fromHtml(handle: HTMLElement, src: Node): Blocky {
    let ret: Blocky = new Blocky();
    ret.model = BlockyModel.convertHtmlToModel(src);
    ret.handle = handle;
    return ret;
  }

  private clearHandleInnerHTML() {
    this.handle.innerHTML = "";
  }

  render() {
    this.clearHandleInnerHTML();
    // this.model.forEach(m=>{

    // })
    for (let i = 0; i < 10; i++) {
      let wrapper:EditorWrapper = new EditorWrapper()

      this.handle.appendChild(wrapper.render())
    }
  }

  save() {}
}
