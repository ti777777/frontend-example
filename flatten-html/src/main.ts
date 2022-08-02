var initElement = document.getElementById("app");
//var json = mapDOM(initElement, true);

function mapDOM(element: Node, json: boolean) {
  var treeObject = {};

  let parser, docNode;

  if (typeof element === "string") {
    if (window.DOMParser) {
      parser = new DOMParser();
      docNode = parser.parseFromString(element, "text/xml");
    }
    if (docNode) {
      element = docNode.firstChild as Node;
    }
  }

  function treeHTML(element: Element, object: any) {
    object["tag"] = element.nodeName;
    var nodeList = element.childNodes as NodeListOf<Node>;
    if (nodeList != null) {
      if (nodeList.length) {
        object["element"] = [];
        object["children"] = [];
        nodeList.forEach((x: Node) => {
          if (x.nodeType == Node.TEXT_NODE) {
            let nodeValue = x.nodeValue?.replaceAll(/\s|\n/gm, "");
            if (nodeValue != "") {
              object["element"].push({
                type: x.parentElement,
                content: nodeValue,
              });
            }
          } else if (x instanceof HTMLVideoElement) {
            object["element"].push({
              type: "video",
              content: x.src,
            });
          } else {
            object["children"].push({});
            treeHTML(
              x as Element,
              object["children"][object["children"].length - 1]
            );
          }
        });

        if (object["children"].length == 0) {
          delete object["children"];
        }
        if (object["element"].length == 0) {
          delete object["element"];
        }
      }
    }
    if (element.attributes && element.attributes.length) {
      object["attributes"] = {};
      for (var i = 0; i < element.attributes.length; i++) {
        object["attributes"][element.attributes[i].nodeName] =
          element.attributes[i].nodeValue;
      }
    }
  }
  treeHTML(element as Element, treeObject);

  return treeObject;
}

enum RowType {
  None,
  Text,
  Image,
  Video,
}

class DomObject {
  public rowType?: RowType;
  public content?: string | null;
  public children?: DomObject[];
  constructor() {}
}

function traveseNode(root: Node): DomObject {
  let domObject: DomObject = new DomObject();

  if (root.nodeType == Node.TEXT_NODE) {
    let nodeValue = root.nodeValue?.replaceAll(/\s|\n/gm, "");
    if (nodeValue != "") {
      domObject.rowType = RowType.Text;
      domObject.content = nodeValue;
    }
  } else {
    if (root instanceof HTMLImageElement || root instanceof HTMLVideoElement) {
      domObject.rowType =
        root instanceof HTMLImageElement ? RowType.Image : RowType.Video;
      domObject.content = root.src;
    } else {
      if (root.childNodes && root.childNodes.length > 0) {
        domObject.children = [];
        root.childNodes.forEach((child) => {
          let c = traveseNode(child);
          if (c.content || c.children) {
            domObject.children?.push(c);
          }
        });
      }
    }
  }

  if (!domObject.content) {
    delete domObject.content;
  }

  if (!domObject.children) {
    delete domObject.children;
  }

  if (!domObject.rowType) {
    delete domObject.rowType;
  }

  return domObject;
}

function flatObject(src: DomObject): DomObject {
  let ret: DomObject = new DomObject()
  delete ret.rowType
  delete ret.content
  ret.children = []

  function flat(root: DomObject, ret: DomObject[]) {
    if (!root.children) {
      let obj: DomObject = new DomObject();
      obj.content = root.content;
      obj.rowType = root.rowType;
      delete obj.children;
      ret.push(obj);
    }

    if (root.children && root.children.length > 0) {
      root.children.forEach((child) => {
        flat(child, ret);
      });
    }
  }

  flat(src, ret.children);

  return ret;
}

let travesed = traveseNode(initElement as Node);

console.log(travesed);
console.log(flatObject(travesed));
