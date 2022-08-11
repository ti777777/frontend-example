export interface IBlock{
    setup(data: any):void
    readData():any
    render():HTMLElement
    children?: Array<IBlock>
}