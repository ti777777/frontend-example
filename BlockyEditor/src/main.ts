import { Editor } from './lib/index';
import './lib/core/styles/reset.css'
import './lib/core/styles/basic.css'

document.addEventListener("DOMContentLoaded", function () {
  let app = document.getElementById("editor")!;

  let editor: Editor = new Editor(app)
  
  editor.render();
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