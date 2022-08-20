import './lib/core/styles/reset.css'
import './lib/core/styles/basic.css'
import { Blocky } from './lib'

document.addEventListener("DOMContentLoaded", function () {
  let app = document.getElementById("editor")!;

  let blocky: Blocky = new Blocky(app)
  blocky.render();
});

window.addEventListener("paste", function (event: ClipboardEvent) {
  //event.preventDefault();

  let clipboardData = event.clipboardData;
  if (clipboardData) {
    let parser = new DOMParser();
    parser.parseFromString(
      clipboardData.getData("text/html"),
      "text/html"
    );
    
  }
} as EventListener);