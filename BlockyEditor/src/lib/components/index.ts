import { Core } from "../core";
import { CreateButton } from "./createButton/createButton";
import { Dragger } from "./dragger/dragger";
import { Menu } from "./menu/menu";
import { Toolbar } from "./toolbar/toolbar";

export class Component {
  private static instance: Component;

  constructor(core: Core) {
    if (!Component.instance) {
      Component.instance = new Component(core);
    }
  }

  static Bootstrap(core: Core, option: any){
    // new Toolbar(core),
    // new CreateButton(core),
    // new Menu(core),
    // new Dragger(core)
  }
}
