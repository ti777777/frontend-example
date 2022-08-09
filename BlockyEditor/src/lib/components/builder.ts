import { IEvent } from './../interfaces/IEvent';
import { BlockyType } from './../model/model';
import { IEditor } from './../interfaces/IEditor';
export class EditorBuilder{
    editor!: IEditor
    
    constructor(){
        
    }

    setType(type: BlockyType){

    }

    setData(data: any){
    }

    registerEvent([...events]:Array<IEvent>){
        
    }

    build():IEditor{
        return this.editor
    }
}