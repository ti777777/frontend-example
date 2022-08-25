import { Helloworld } from "./Helloworld";

const helloWorld = new Helloworld(document.getElementById("app")!)

helloWorld.render()

helloWorld.addListener((event)=>{
  console.log(event.type)
})