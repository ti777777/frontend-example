import { createBasicContentEditable } from '../../common/dom';
import { BlockType } from "../model/type";
import { Block } from "../blocks/block"
export class Paragraph extends Block {
  type = BlockType.Text

  draw():HTMLElement{
    this.blockArea.appendChild(createBasicContentEditable(this.model.content))
    return this.wrapper
  }

  read(): any {
    return this.model
  }
}
