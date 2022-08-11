import { IEvent } from "./../interfaces/IEvent";
import { BlockyType } from "./../model/model";
import { IBlock } from "../interfaces/IBlock";
export class EditBlockBuilder {
  editor!: IBlock;

  constructor() {}

  setType(type: BlockyType) {}

  setData(data: any) {}

  registerEvent([...events]: Array<IEvent>) {}

  build(): IBlock {
    return this.editor;
  }
}
