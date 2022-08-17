import { Panel } from './components/blocks/panel';
import { BlockModel } from "./model/model";

export class Blocky {
  handle!: HTMLElement;
  panel!: Panel;
  model!: BlockModel[];
  constructor() {}
  static fromHtml(handle: HTMLElement, src: Node): Blocky {
    let ret: Blocky = new Blocky();
    ret.model = BlockModel.convertHtmlToModel(src);
    ret.handle = handle;
    return ret;
  }

  private clearHandleInnerHTML() {
    this.handle.innerHTML = "";
  }

  render() {
    this.panel.draw();
  }

  save() {}
}
