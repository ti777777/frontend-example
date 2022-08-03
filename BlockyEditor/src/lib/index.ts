enum BlockyType {
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

class BlockyModel{
    public blockyType!: BlockyType;
    public content?: string | null;
}

export class Blocky {
    public model! : BlockyModel;
    public children! : Blocky[];
    constructor() {}
    static fromHtml(src: Node): Blocky {
        let ret: Blocky = new Blocky();
        ret.children = [];
      
        function flat(root: Node, ret: Blocky[]) {
          if (root.nodeType == Node.TEXT_NODE) {
            let nodeValue = root.nodeValue?.replaceAll(/^\s+$/gm, "");
            nodeValue = nodeValue?.replaceAll(/^\n+$/gm, "");
            if (nodeValue != "") {
              let obj: Blocky = new Blocky();
              let model = new BlockyModel();
              model.content = nodeValue;
              model.blockyType = BlockyType.Text;
              obj.model = model;
              ret.push(obj);
            }
          }
      
          if (root instanceof HTMLVideoElement) {
            let obj: Blocky = new Blocky();
            let model = new BlockyModel();
            model.content = root.src;
            model.blockyType = BlockyType.Video;
            obj.model = model;
            ret.push(obj);
          }
      
          if (root instanceof HTMLImageElement) {
            let obj: Blocky = new Blocky();
            let model = new BlockyModel();
            model.content = root.src;
            model.blockyType = BlockyType.Image;
            obj.model = model;
            ret.push(obj);
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

    toHtml(): Node{
        let doc!: Node
        return doc;
    }
}

