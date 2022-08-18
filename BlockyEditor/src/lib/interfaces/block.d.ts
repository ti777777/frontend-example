import { IDrawable } from "./drawable";

export interface IBlock extends IDrawable{
  id: string
  read(): any;
}
