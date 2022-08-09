import { IModel } from './interfaces/IModel';
import { IEditor } from './interfaces/IEditor';
import { BlockyModel } from "./model/model";

export class Blocky {
  handle!: HTMLElement;
  model!: Array<IModel>;
  list!: Array<IEditor> ;
  constructor() {}
  static fromHtml(handle: HTMLElement, src: Node): Blocky {
    let ret: Blocky = new Blocky();
    ret.model = BlockyModel.convertHtmlToModel(src);
    ret.handle = handle;
    return ret;
  }

  render() {
    
  }

  save() {

  }
}
