export class Helloworld{

    private id: string = "789888"
    private button: HTMLElement = document.createElement("button")

    constructor(
        public handle: HTMLElement
    ){
        this.button.textContent = "Click me"
    }

    render(){
        this.handle.append(this.button)
    }

    addListener(listener:(event: Event,id: string)=>void){
        this.button.addEventListener('click',(event)=>{
            listener(event,this.id)
        })
    }
}