export enum BlockyType {
  None,
  Text,
  Header1,
  Header2,
  Header3,
  ListItem,
  NumericListItem,
  Image,
  Video,
  Code,
  Embed,
  Map,
  Table,
}

export class BlockyModel {
  public blockyType!: BlockyType;
  public content?: string | null;
  public children?: BlockyModel[];

  constructor() {}

  static convertHtmlToModel(src: Node): BlockyModel {
    let ret: BlockyModel = new BlockyModel();
    ret.children = [];

    function flat(root: Node, ret: BlockyModel[]) {
      if (root.nodeType == Node.TEXT_NODE) {
        let nodeValue = root.nodeValue?.replaceAll(/^\s+$/gm, "");
        nodeValue = nodeValue?.replaceAll(/^\n+$/gm, "");
        if (nodeValue != "") {
          let model = new BlockyModel();
          model.content = nodeValue;
          model.blockyType = BlockyType.Text;
          ret.push(model);
        }
      }

      if (root instanceof HTMLVideoElement) {
        let model = new BlockyModel();
        model.content = root.src;
        model.blockyType = BlockyType.Video;
        ret.push(model);
      }

      if (root instanceof HTMLImageElement) {
        let model = new BlockyModel();
        model.content = root.src;
        model.blockyType = BlockyType.Image;
        ret.push(model);
      }

      if (root.childNodes && root.childNodes.length > 0) {
        root.childNodes.forEach((child) => {
          flat(child, ret);
        });
      }
    }
    flat(src, ret.children);

    return ret;
  }
}
