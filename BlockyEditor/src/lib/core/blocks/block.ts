import { createElement } from "../../common/dom";
import { uuid } from "../../common/guid";
import { IBlock } from "../interfaces";
import { BlockType } from "../model/type";

export class Block implements IBlock {
  id: string = uuid();
  wrapper!: HTMLElement;
  type!: BlockType;
  model?: any;
  contentArea: HTMLElement = createElement("div");
  blockArea: HTMLElement = createElement("div");
  readonly: boolean = false;

  constructor(model?: any) {
    this.model = model;
    this.wrapper = createElement("div");
    this.wrapper.setAttribute("block-id", this.id);
    this.wrapper.style.display = "flex";
    this.wrapper.appendChild(this.contentArea);
    this.contentArea.style.display = "flex";
    this.contentArea.style.flexDirection = "column";
    this.contentArea.style.flex = "1";
    this.contentArea.appendChild(this.blockArea);
  }

  read(): object {
    throw new Error("Method not implemented.");
  }

  draw(): HTMLElement {
    throw new Error("Method not implemented.");
  }

  addListener(eventName: string,listener: (event: Event, block: IBlock) => void): void {
    this.blockArea.addEventListener(eventName,(event)=>{
      event.stopPropagation();
      listener(event, this);
    })
  }

  addStyle() {}
}
