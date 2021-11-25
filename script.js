const btn = document.querySelector('button')
const img =document.querySelector('img')

const URL = 'https://dog.ceo/api/breeds/image/random'

// btn.addEventListener('click', () => {
//     fetch(URL).then(res => res.json()).then(data => img.setAttribute('src', data.message)).catch(err => console.error(err))
// })



async function showImage(){
    const response = await axios.get(URL)
    img.setAttribute('src', response.data.message)
}

btn.addEventListener('click', ()=> showImage())







