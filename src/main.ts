import './style.css'
import  bodyPage  from './application/buscaGato.html?raw'
import {buscarGato} from './application/buscaGato'

const body = document.querySelector<HTMLDivElement>('#app')

if(body){
  body.innerHTML = bodyPage 
  buscarGato()
}
