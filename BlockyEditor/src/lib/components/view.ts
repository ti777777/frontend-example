import { BlockyModel } from "../model/model";

export class BlockyTemplate {
  handle!: HTMLElement;
  model!: BlockyModel;
  constructor(handle: HTMLElement, model: BlockyModel) {
    this.handle = handle;
    this.model = model;
  }

  update(model: BlockyModel) {
    this.model = model;
    this.render();
  }

  render() {

  }
}
