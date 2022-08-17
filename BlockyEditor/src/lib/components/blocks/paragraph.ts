
import { IBlock } from "../../interfaces/block";
import { createElement } from "../../common/dom";
import { BlockBase } from "../base/blockBase";
export class Paragraph extends BlockBase implements IBlock {
  private model: any = {};

  render(){
    this.element = createElement("div", [], "type something ...");
    this.element.contentEditable = "true";
  }

  read(): any {
    return this.model
  }

}
