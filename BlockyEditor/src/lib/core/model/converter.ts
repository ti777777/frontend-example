import { Image, Paragraph,Video } from "../components/blocks";
import { Block } from "../components/block";

export class BlockConverter{
  constructor() {}

  static fromHtml(src: Node): Array<Block> {
    let ret: Array<Block> = [];

    function flat(root: Node, ret: Block[]) {
      if (root.nodeType == Node.TEXT_NODE) {
        let nodeValue = root.nodeValue?.replaceAll(/^\s+$/gm, "");
        nodeValue = nodeValue?.replaceAll(/^\n+$/gm, "");
        if (nodeValue != "") {
          let block = new Paragraph();
          block.model.content = nodeValue!;
          ret.push(block);
        }
      }

      if (root instanceof HTMLVideoElement) {
        let block = new Video();
        block.model.src = root.src;
        ret.push(block);
      }

      if (root instanceof HTMLImageElement) {
        let block = new Image();
        block.model.src = root.src;
        ret.push(block);
      }

      if (root.childNodes && root.childNodes.length > 0) {
        root.childNodes.forEach((child) => {
          flat(child, ret);
        });
      }
    }
    flat(src, ret);

    return ret;
  }
}
