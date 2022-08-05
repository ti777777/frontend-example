import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="card">
      <div id="menu"></div>
      <div id="main">
      </div>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#menu')!)
