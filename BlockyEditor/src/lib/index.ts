import { Container } from './components/blocks/container';
import { IModel } from "./interfaces/IModel";
import { BlockyModel } from "./model/model";

export class Blocky {
  handle!: HTMLElement;
  container!: Container;
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
    this.container.render();
  }

  save() {}
}
