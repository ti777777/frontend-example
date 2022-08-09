
import { Blocky } from './lib'
import { Menu } from './lib/components/menu';

document.addEventListener("DOMContentLoaded", function () {
  let app = document.getElementById("app")!;
});

window.addEventListener("paste", function (event: ClipboardEvent) {
  //event.preventDefault();

  let clipboardData = event.clipboardData;
  if (clipboardData) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(
      clipboardData.getData("text/html"),
      "text/html"
    );
    
    let blocky: Blocky = Blocky.fromHtml(document.getElementById("#app")!,doc)
    blocky.render();
    console.log(blocky)
  }
} as EventListener);