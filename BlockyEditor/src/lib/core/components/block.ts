import { EventList } from "./../../common/event-list";
import { createElement } from "../../common/dom";
import { uuid } from "../../common/guid";
import { IBlock } from "../interfaces";
import { BlockType } from "../model/type";

export class Block implements IBlock {
  id: string = uuid();
  wrapper!: HTMLElement;
  type!: BlockType;
  contentArea: HTMLElement = createElement("div");
  blockArea: HTMLElement = createElement("div");
  readonly: boolean = false;

  constructor() {
    this.wrapper = createElement("div");
    this.wrapper.setAttribute("block-id", this.id);
    this.wrapper.style.display = "flex";
    this.wrapper.appendChild(this.contentArea);
    this.contentArea.style.display = "flex";
    this.contentArea.style.flexDirection = "column";
    this.contentArea.style.flex = "1";
    this.contentArea.appendChild(this.blockArea);
  }

  addEventListener(listener: (event: Event, block: Block) => void): void {
    for (let eventName of EventList) {
      this.blockArea.addEventListener(eventName, (event) => {
        event.stopPropagation();
        listener(event, this);
      });
    }
  }

  read(): object {
    throw new Error("Method not implemented.");
  }

  draw(): HTMLElement {
    throw new Error("Method not implemented.");
  }

  addEvents() {
    this.wrapper;
  }

  addStyle() {}
}
