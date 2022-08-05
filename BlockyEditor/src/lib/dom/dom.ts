export enum NodeType {
  TEXT,
  ELEMENT,
}

export interface IAttributes {
  [key: string]: any;
}

export class ElementNode {
  nodeType: NodeType = NodeType.ELEMENT;
  tag!: string;
  attributes!: IAttributes;
  children!: Node[];
}

export class TextNode {
  public nodeType: NodeType = NodeType.TEXT;
  constructor(public value: string) {}
}

export type Node = ElementNode | TextNode;

export const el = (
  tag: string,
  attributes?: IAttributes,
  children?: Node[]
): ElementNode => {
  let node!: ElementNode;
  node.nodeType = NodeType.ELEMENT;
  node.tag = tag;
  if (attributes) node.attributes = attributes;
  if (children) {
    node.children = children.map((child) => {
      if (child.nodeType == NodeType.ELEMENT) {
        let node = child as ElementNode;
        return el(node.tag, node.attributes, node.children);
      }
      return txt((child as TextNode).value);
    });
  }
  return node;
};

export const txt = (value: string): TextNode => new TextNode(value);
