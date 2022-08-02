
var initElement = document.getElementById("app");
var json = mapDOM(initElement, true);

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
        nodeList.forEach((x: Node, i: number) => {
          if (nodeList[i].nodeType == Node.TEXT_NODE) {
            let nodeValue = nodeList[i].nodeValue?.replaceAll(/\s|\n/gm, "");   
            if (nodeValue != "") {
              let element = 
              {
                type : nodeList[i].parentElement,
                content : nodeValue
              };
              console.log(element)
              object["element"].push(element);
            }
          } else {
            object["children"].push({});
            treeHTML(
              nodeList[i] as Element,
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

