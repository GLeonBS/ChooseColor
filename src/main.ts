import './style.css'
import { setupCounter } from './counter'
import  bodyPage  from './application/app.html?raw'

const body = document.querySelector<HTMLDivElement>('#app')

if(body){
  body.innerHTML = bodyPage 
}

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
