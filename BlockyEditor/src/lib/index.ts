
import { Core } from "./core";
import { Paragraph, Toggle } from "./core/components/blocks";
import { BlockConverter } from "./core/model/converter";

export class Editor {
  core!: Core 

  constructor(handle:HTMLElement,option?: any){
    this.core = new Core(handle)

    if(option.toolBar.enabled){
    }
    
    let toggle = new Toggle()
    toggle.add(new Paragraph())
    this.core.context.add(new Paragraph())
    this.core.context.add(toggle)
  }

  static fromHtml(handle: HTMLElement, src: Node): Editor {
    let ret: Editor = new Editor(handle);
    let blocks = BlockConverter.fromHtml(src);

    for (let block of blocks) {
      ret.core.context.add(block);
    }

    ret.core.handle = handle;
    return ret;
  }

  render() {
    this.core.render();
  }

  save(): object {
    return this.core.save();
  }
}
