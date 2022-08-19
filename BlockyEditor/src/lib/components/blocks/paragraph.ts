import { createBasicContentEditable } from './../../common/dom';
import { BlockType } from "../../interfaces/type.d";
import { BlockBase } from "../blockBase"
export class Paragraph extends BlockBase {
  type = BlockType.Text
  model: any = {}

  draw():HTMLElement{
    this.contentWrapper.appendChild(createBasicContentEditable())
    return this.wrapper
  }

  read(): any {
    return this.model
  }
}
