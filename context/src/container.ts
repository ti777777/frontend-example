
export interface IEvent{
    name: string
    handler: (evt:Event) => void
}

export class Drag implements IEvent{
    constructor(
        public context:Context,
        public name:string
    ){ }

    handler(evt:Event){
        let target = evt.target as HTMLElement
        this.context.dragElement = target
    }
}

export class Container {
  context!: Context;
  elements: Array<Element> = [];
  constructor() {
    this.context = new Context()
    this.context.elements = this.elements
  }

  newElement(name: string) {
    let element: Element = Element.new(this.context, name);

    this.elements.push(element);
  }
}

export class Context {
  public handle: HTMLElement = document.getElementById("app")!;
  public isOnSelect: boolean = false;
  public dragElement?: HTMLElement;
  public elements: Element[] = []
}

export class Element {
  handler?: (evt:Event) => void
  constructor(public context: Context, public name: string) {}

  getEvents(){

  }

  static new(context: Context, name: string): Element {
    let ele = new Element(context, name)

    let div = document.createElement("div")
    let btn = document.createElement("button")
    let txt = document.createTextNode(name)
    btn.textContent = "按鈕"
    btn.addEventListener()
    div.appendChild(txt)
    div.appendChild(btn)

    context.handle.appendChild(div);

    return ele;
  }
}
