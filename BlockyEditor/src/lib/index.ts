import { BlockyModel } from "./model/model";
import { BlockyTemplate } from "./components/view";

export class Blocky {
  handle!: HTMLElement;
  model!: BlockyModel;
  view!: BlockyTemplate;
  constructor() {}
  static fromHtml(handle: HTMLElement, src: Node): Blocky {
    let ret: Blocky = new Blocky();
    let model: BlockyModel = BlockyModel.convertHtmlToModel(src);
    ret.model = model;
    ret.view = new BlockyTemplate(handle, model);
    return ret;
  }

  render() {
    this.view.render();
  }
}
