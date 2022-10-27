import './style.css'
const catImg=document.querySelector<HTMLImageElement>('#cat-img')
const nextCatBtn=document.getElementById('next-cat-btn') as HTMLButtonElement

document.addEventListener('DOMContentLoaded',fetchCatUrl)

nextCatBtn.addEventListener('click',fetchCatUrl)

function fetchCatUrl():void
{
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response=>response.json())
    .then(data=>{
        if (catImg){
            catImg.src=data[0].url
        }
    })
    .catch(error=>console.log(error))
}