export interface IEditor{
    render():HTMLElement
    children?: IEditor
}