export interface IEditor{
    save():Object
    render(model?:Object):HTMLElement
    children?: Array<IEditor>
}