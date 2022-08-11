import { BlockWrapper } from './ui/base/wrapper';
import { IModel } from "./interfaces/IModel";
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
    for (let i = 0; i < 10; i++) {
      let wrapper:BlockWrapper = new BlockWrapper()

      this.handle.appendChild(wrapper.render())
    }
  }

  save() {}
}
