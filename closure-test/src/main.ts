import { setAlert } from './alert'

const parent: HTMLElement = document.createElement("div")
const child: HTMLElement = document.createElement("div")
parent.textContent = "parent"
child.textContent = "child"

parent.appendChild(child)
document.getElementById("app")!.appendChild(parent)

setAlert(child)
setAlert(parent)
