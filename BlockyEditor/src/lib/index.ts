import { Panel } from "./core/components/blocks/panel";
import { EditorContext } from "./core/context/editorContext";
import { BlockConverter } from "./core/model/converter";

export class Blocky {
  panel!: Panel;
  constructor(public handle: HTMLElement) {
    this.panel = new Panel(this.handle);
    console.log(EditorContext.getInstance())
  }

  static fromHtml(handle: HTMLElement, src: Node): Blocky {
    let ret: Blocky = new Blocky(handle);
    let blocks = BlockConverter.fromHtml(src);
    
    for(let block of blocks){
      ret.panel.add(block)
    }

    ret.handle = handle;
    return ret;
  }

  render() {
    this.panel.render();
  }

  save() : object{
    return this.panel.read();
  }
}
