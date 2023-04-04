export const chooseColor = () => {

    const chooseButton = document.querySelector<HTMLButtonElement>('.choose-button')!
    const errorMessage = document.querySelector<HTMLSpanElement>('.error')!
    const output = document.querySelector<HTMLDivElement>('.cor')!
    const rgb = document.querySelector<HTMLSpanElement>('.rgb')!
    const corTitle = document.querySelector<HTMLTitleElement>('.cor-title')!
    const ultimaCor = localStorage.getItem('corSelecionada')!
    console.log(corTitle);

    if(!localStorage.getItem('corSelecionada')){
        corTitle.innerText = "Ainda não tem nenhuma cor selecionada :/"
      }else {
        corTitle.innerText = "Última cor selecionada:"
        output.style.backgroundColor = ultimaCor
        rgb.innerText = ultimaCor
      }

    chooseButton.addEventListener('click', ev => {

        ev.preventDefault()
        const dropper = new EyeDropper();

        dropper
            .open()
            .then((result) => {
                output.style.backgroundColor = result.sRGBHex
                localStorage.setItem('corSelecionada', result.sRGBHex)
                rgb.innerText = result.sRGBHex
                corTitle.innerText = "Última cor selecionada:"
            })
            .catch((e) => {
                errorMessage.style.display = 'block'
                errorMessage.innerText = " ", e
            });
    })
    
}