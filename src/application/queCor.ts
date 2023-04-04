import useEyeDropper from "use-eye-dropper"

export const chooseColor = () => {

    const searchButton = document.querySelector<HTMLButtonElement>('.choose-button')!
    const errorMessage = document.querySelector<HTMLSpanElement>('.error')!
    const output = document.querySelector<HTMLDivElement>('.quadrado')!
    
    const eyeDropper = new EyeDropper();

    searchButton.addEventListener('click', event => {
        const dropper  =  new (window as any).EyeDropper()
        dropper.open().then((result: any) => {
            console.log(result.sRGBHex);
        })
    })
}