import { IBlock } from "../interfaces";

export class EditorContext {
  private static instance: EditorContext;

  blockMap: Map<string, IBlock> = new Map();

  parentBlockMap: Map<string, string> = new Map();

  private constructor() {}
  public static getInstance(): EditorContext {
    if (!EditorContext.instance) {
      EditorContext.instance = new EditorContext();
    }

    return EditorContext.instance;
  }

  getParentBlockById(childId: string): IBlock {
    const parentId = this.parentBlockMap.get(childId)!;

    return this.blockMap.get(parentId)!;
  }
}
