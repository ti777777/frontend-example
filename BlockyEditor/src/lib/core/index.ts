import { IContainer } from './interfaces/container.d';
import { IBlock } from './interfaces/block.d';
export class Editor {
    static findBlockById(id: string): IBlock{
        throw new Error()
    }

    static findContainerById(id: string): IContainer<IBlock>{
        throw new Error()
    }
}