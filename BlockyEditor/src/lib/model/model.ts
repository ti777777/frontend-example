
export enum BlockType {
  None = "None",
  Text = "Text",
  Header1 = "Header1",
  Header2 = "Header2",
  Header3 = "Header3",
  ListItem = "ListItem",
  NumericListItem = "NumericListItem",
  Image = "Image",
  Video = "Video",
  Code = "Code",
  Embed = "Embed",
  Map = "Map",
  Table = "Table",
}

export class BlockModel{
  public blockyType!: BlockType;
  public content!: string | null;
  public children!: BlockModel[];

  constructor() {}

  static convertHtmlToModel(src: Node): Array<BlockModel> {
    let ret: Array<BlockModel> = [];

    function flat(root: Node, ret: BlockModel[]) {
      if (root.nodeType == Node.TEXT_NODE) {
        let nodeValue = root.nodeValue?.replaceAll(/^\s+$/gm, "");
        nodeValue = nodeValue?.replaceAll(/^\n+$/gm, "");
        if (nodeValue != "") {
          let model = new BlockModel();
          model.content = nodeValue!;
          model.blockyType = BlockType.Text;
          ret.push(model);
        }
      }

      if (root instanceof HTMLVideoElement) {
        let model = new BlockModel();
        model.content = root.src;
        model.blockyType = BlockType.Video;
        ret.push(model);
      }

      if (root instanceof HTMLImageElement) {
        let model = new BlockModel();
        model.content = root.src;
        model.blockyType = BlockType.Image;
        ret.push(model);
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
