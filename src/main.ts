import './style.css'
import { setupCounter } from './counter'
import  maskForm  from './application/app.html?raw'

const body = document.querySelector<HTMLDivElement>('#app')

if(body){
  body.innerHTML = maskForm 
}

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
