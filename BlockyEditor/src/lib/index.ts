import { Panel } from './components/blocks/panel';
import { BlockModel } from "./model/model";

export class Blocky {
  panel!: Panel;
  model!: BlockModel[];
  constructor(
    public handle: HTMLElement
  ) {
    this.panel = new Panel(this.handle)
  }
  static fromHtml(handle: HTMLElement, src: Node): Blocky {
    let ret: Blocky = new Blocky(handle);
    ret.model = BlockModel.convertHtmlToModel(src);
    ret.handle = handle;
    return ret;
  }

  render() {
    this.panel.render();
  }

  save() {}
}
