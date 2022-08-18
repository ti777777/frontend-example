
import { IBlock } from "../../interfaces/block";
import { BlockBase } from "../base/blockBase";
export class Paragraph extends BlockBase implements IBlock {
  private model: any = {};

  draw():HTMLElement{
    this.contentWrapper.contentEditable = "true";
    return this.wrapper;
  }

  read(): any {
    return this.model
  }
}
