import "./style.css";

window.addEventListener('paste',function(event:ClipboardEvent) {
  //event.preventDefault();

  let clipboardData = event.clipboardData;
  if(clipboardData){

    console.log(clipboardData.getData("text/html"))
    if(clipboardData.files && clipboardData.files.length > 0){
      for(let file in clipboardData.files){
        console.log(file)
      }
    }
  }
}as EventListener)