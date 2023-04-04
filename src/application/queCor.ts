export const chooseColor = () => {

    const chooseButton = document.querySelector<HTMLButtonElement>('.choose-button')!
    const errorMessage = document.querySelector<HTMLSpanElement>('.error')!
    const currentColors = document.querySelectorAll<HTMLDivElement>('.cor')!
    const titles = document.querySelectorAll<HTMLTitleElement>('.cor-title')!
    const corAtual = document.getElementById('cor-atual')!
    const corAnterior = document.getElementById('cor-anterior')!
    const rgbAtual = document.getElementById('rgb-atual')!
    const rgbAnterior = document.getElementById('rgb-anterior')!
    const corTitle = document.getElementById('title-cores')!
    let ant = localStorage.getItem('corAnterior')!
    let ultimaCor = localStorage.getItem('corSelecionada')!
    console.log(corTitle);
    const btnLimpa = document.getElementById('btn-limpa')!

    if(!localStorage.getItem('corSelecionada')){
        corTitle.innerText = "Ainda não tem nenhuma cor selecionada :/"
        currentColors.forEach(data => data.style.display = 'none')
        titles.forEach(data => data.style.display = 'none')
      }else {
        corTitle.innerText = "Cores:"
        currentColors.forEach(data => data.style.display = 'flex')
        titles.forEach(data => data.style.display = 'block')
        corAtual.style.backgroundColor = ultimaCor
        rgbAtual.innerText = ultimaCor
        corAnterior.style.backgroundColor = ant
        rgbAnterior.innerText = ant
      }

    chooseButton.addEventListener('click', ev => {

        ev.preventDefault()
        const dropper = new EyeDropper();

        dropper
            .open()
            .then((result) => {
                corAtual.style.backgroundColor = result.sRGBHex
                if(localStorage.getItem('corSelecionada') != null){
                    localStorage.setItem('corAnterior', ultimaCor)!
                    ant = localStorage.getItem('corAnterior')!
                    corAnterior.style.backgroundColor = ant
                    rgbAnterior.innerText = ant
                }
                localStorage.setItem('corSelecionada', result.sRGBHex)
                rgbAtual.innerText = result.sRGBHex
                corTitle.innerText = "Cores:"
                currentColors.forEach(data => data.style.display = 'flex')
                titles.forEach(data => data.style.display = 'block')
                ultimaCor = localStorage.getItem('corSelecionada')!
            })
            .catch((e) => {
                errorMessage.style.display = 'block'
                errorMessage.innerText = " ", e
            })
        
            
    })

    btnLimpa.addEventListener('click', ev => {
        ev.preventDefault()
        localStorage.removeItem('corAnterior')
        localStorage.removeItem('corSelecionada')
        corTitle.innerText = "Você apagou as cores :/"
        currentColors.forEach(data => data.style.display = 'none')
        titles.forEach(data => data.style.display = 'none')
    })
    
}