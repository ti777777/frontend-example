import { IBlock } from "./block.d";
import { IDrawable } from "./drawable";
import { BlockType } from "../model/type";

export interface IBlock extends IDrawable {
  id: string;
  type: BlockType;
  model?: any;
  addListener(eventName: string,listener: (event: Event, block: IBlock) => void): void;
  read(): object;
}
