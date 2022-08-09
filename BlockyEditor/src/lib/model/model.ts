import { IModel } from './../interfaces/IModel';
export enum BlockyType {
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

export class BlockyModel implements IModel{
  public blockyType!: BlockyType;
  public content!: string | null;
  public children!: IModel[];

  constructor() {}

  static convertHtmlToModel(src: Node): Array<BlockyModel> {
    let ret: Array<BlockyModel> = [];

    function flat(root: Node, ret: BlockyModel[]) {
      if (root.nodeType == Node.TEXT_NODE) {
        let nodeValue = root.nodeValue?.replaceAll(/^\s+$/gm, "");
        nodeValue = nodeValue?.replaceAll(/^\n+$/gm, "");
        if (nodeValue != "") {
          let model = new BlockyModel();
          model.content = nodeValue!;
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
    flat(src, ret);

    return ret;
  }
}
