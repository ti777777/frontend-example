import "./style.css";
import { BrowserMultiFormatReader } from './zxing';

window.addEventListener("load", function () {
  const codeReader = new BrowserMultiFormatReader();
  console.log("ZXing code reader initialized");
  const decodeBtn = document.getElementById("decodeButton");
  const resultElement = document.getElementById("result") as HTMLDivElement;
  if (decodeBtn) {
    decodeBtn.addEventListener("click", () => {
      const img = document.getElementById("img") as HTMLImageElement;
      if (img) {
        codeReader
          .decodeFromImage(img)
          .then((result: any) => {
            resultElement.textContent = result.text;
          })
          .catch((err:any) => {
            resultElement.textContent = err;
          });
        console.log(`Started decode for image from ${img.src}`);
      }
    });
  }
});
