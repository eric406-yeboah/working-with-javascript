// access the button

const btnSearch = document.querySelector('#btnSearch')
const txtVerse = document.querySelector('#txtVerse')
const txtContent = document.querySelector('#textContent')
const button =document.querySelector('button')



 


// bible api based point
const BASE_POINT="https://bible-api.com/";

// adding event listiner
btnSearch.addEventListener('click',()=>{
    let inputValue = txtVerse.value
    // determine if user provide content
    if(inputValue.trim().length < 1){
     alert('please provide content')
     return
    }

    
    const url =`${BASE_POINT}${inputValue}`

    
    fetch(url).then(res=> res.json()).then(res=> {
    txtContent.innerHTML=res.text
    console.log(res.reference);
})
})



