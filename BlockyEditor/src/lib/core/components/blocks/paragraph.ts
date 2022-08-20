import { createBasicContentEditable } from '../../../common/dom';
import { BlockType } from "../../model/type";
import { Block } from "../block"
export class Paragraph extends Block {
  type = BlockType.Text
  model: any = {}

  draw():HTMLElement{
    this.contentArea.appendChild(createBasicContentEditable())
    return this.wrapper
  }

  read(): any {
    return this.model
  }
}
