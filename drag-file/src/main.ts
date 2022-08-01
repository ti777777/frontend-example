(function () {
  document.addEventListener("DOMContentLoaded", function () {
    let fileInput = document.createElement("input");

    fileInput.setAttribute("type", "file");

    let dropContainer = document.createElement("div");

    dropContainer.style.margin = "0 auto";

    dropContainer.style.height = "100vh";

    dropContainer.style.width = "100vw";

    dropContainer.style.border = "3px solid black";

    dropContainer.style.textAlign = "center";

    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      dropContainer.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e: Event) {
      e.preventDefault();
      e.stopPropagation();
    }

    dropContainer.ondrop = function (evt: DragEvent) {
      if (evt && evt.dataTransfer) {
        fileInput.files = evt.dataTransfer.files;

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(evt.dataTransfer.files[0]);
        dataTransfer.items.add(evt.dataTransfer.files[3]);
        fileInput.files = dataTransfer.files;
      }

      evt.preventDefault();
    };

    dropContainer.appendChild(fileInput);

    document.querySelector<HTMLDivElement>("#app")!.appendChild(dropContainer);
  });
})();
