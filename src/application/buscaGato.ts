export const buscarGato = () => {
    // const baseUrl = 'https://api.thecatapi.com/v1/breeds/';

    const searchInput = document.querySelector<HTMLInputElement>('.search-input')!
    const searchButton = document.querySelector<HTMLButtonElement>('.search-button')!
    const container = document.querySelector('.gato')!
    
    

    searchButton.addEventListener('click', event => {
        const dropper  =  new EyeDropper()
        let output = document.querySelector<HTMLDivElement>('.quadrado')!
        dropper.open().then((result: any) => {
            console.log(result.sRGBHex);
        })
    })
    //criar constante que busca a mensagem de erro no HTML

    // let nomeGato
    // let gato
    // let card

    // fetch(baseUrl)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.error(err))

    // function requestCat(url : string, name: string){
    //     fetch(url + name)
    //         .then(response => response.json())
    //         .then(data => {
    //             gato = data
    //             console.log(gato);
    //         })
    //         .catch(err => console.error(err))
            
    // }
    
    // searchButton.addEventListener('click', event => {
    //     event.preventDefault()
    //     nomeGato = searchInput.value.toLowerCase()
    //     requestCat(baseUrl, nomeGato)
    // })
    
}