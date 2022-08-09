export interface IEditor{
    setup(data: any):void
    readData():any
    render():HTMLElement
    children?: Array<IEditor>
}