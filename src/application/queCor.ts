

export const chooseColor = () => {

    const chooseButton = document.querySelector<HTMLButtonElement>('.choose-button')!
    const errorMessage = document.querySelector<HTMLSpanElement>('.error')!
    const output = document.querySelector<HTMLDivElement>('.cor')!

    console.log(chooseButton);
    console.log(errorMessage);
    console.log(output);
    
    
    


    chooseButton.addEventListener('click', () => {

        const dropper = new EyeDropper();

        dropper
            .open()
            .then((result) => {
                console.log(result.sRGBHex);
            })
            .catch((e) => {
                errorMessage.style.display = 'block'
                errorMessage.innerText = " ", e
            });
    })

    // chooseButton.onclick = () => {
    //     const eyeDropper = new EyeDropper();

    //     eyeDropper
    //         .open()
    //         .then((result) => {
    //             console.log(result.sRGBHex);
    //         })
    //         .catch((e) => {
    //             errorMessage.style.display = 'block'
    //             errorMessage.innerText = " ", e
    //         });
    // }
}