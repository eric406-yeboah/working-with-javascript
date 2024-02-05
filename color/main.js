const btnClick = document.querySelector('#btnClick')
const btnInput = document.querySelector('#color')

const colors =['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9]
btnClick.addEventListener('click',()=>{
    let color ='#'
    for(let i=0;i<3;i++){
    let generatedIndex = Math.floor(Math.random() * colors.length)
    let generatedColors = colors[generatedIndex];
    color +=generatedColors
    }
    
    document.body.style.backgroundColor = color
})

btnInput.addEventListener('input',()=>{
    document.body.style.backgroundColor = btnInput.value
    
})


