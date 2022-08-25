
import { Core } from "./core";
import { BlockConverter } from "./core/model/converter";

export class Editor {
  core!: Core 

  constructor(handle:HTMLElement){
    this.core = new Core(handle)
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
    this.core.context.render();
  }

  save(): object {
    return this.core.context.read();
  }
}
