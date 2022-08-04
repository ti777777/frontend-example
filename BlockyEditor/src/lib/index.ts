import { BlockyModel } from "./model";
import { BlockyTemplate } from "./view";

export class Blocky {
  handle!: HTMLElement;
  model!: BlockyModel;
  view!: BlockyTemplate;
  children!: Blocky[];
  constructor() {}
  static fromHtml(handle: HTMLElement, src: Node): Blocky {
    let ret: Blocky = new Blocky();
    let model: BlockyModel = BlockyModel.convertHtmlToModel(src);
    ret.children = [];
    ret.model = model;
    ret.view = new BlockyTemplate(handle, model);
    return ret;
  }

  render() {
    this.view.render();
  }
}
