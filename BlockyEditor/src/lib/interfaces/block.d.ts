import { IDrawable } from "./drawable";
import { BlockType } from "./type";

export interface IBlock extends IDrawable{
  id: string
  type: BlockType
  read(): object
}
