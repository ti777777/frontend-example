import { BlockyType } from "../model/model";

export interface IModel{
    blockyType: BlockyType;
    content: string | null;
    children: IModel[];
}