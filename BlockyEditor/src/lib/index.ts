import { Core } from "./core";
import { Component } from "./components";

export class Editor {
  private core!: Core;

  constructor(handle: HTMLElement, option?: any) {
    if (option && option.blocks) {
      this.core = new Core(handle, option.blocks);
    } else {
      this.core = new Core(handle, [
        { type: "paragraph", model: { content: "123" } },
      ]);
    }
    this.initializeComponents(option);
  }

  private async initializeComponents(option: any) {
    Component.Bootstrap(this.core, option);
  }

  render() {
    this.core.render();
  }

  save(): object {
    return this.core.save();
  }
}
