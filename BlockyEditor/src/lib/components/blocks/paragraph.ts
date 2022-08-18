import { BlockType } from "../../interfaces/type.d";
import { BlockBase } from "../blockBase"
export class Paragraph extends BlockBase {
  type = BlockType.Text
  model: any = {}

  draw():HTMLElement{
    this.contentWrapper.contentEditable = "true"
    return this.wrapper
  }

  read(): any {
    return this.model
  }
}
