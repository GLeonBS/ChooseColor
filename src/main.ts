import './style.scss'
import  bodyPage  from './application/queCor.html?raw'
import {chooseColor} from './application/queCor'

const body = document.querySelector<HTMLDivElement>('#app')

if(body){
  body.innerHTML = bodyPage 
  chooseColor()
}
