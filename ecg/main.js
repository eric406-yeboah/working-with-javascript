
let imgg=document.getElementById('im')

let btn=document.getElementById('btnClick')

btn.addEventListener('click',function(){
    if(btn.innerText=='turn off'){
        turnOn()
    }

    else{
        turnOff()
    }
})

function turnOff(){
    imgg.src='on.jpg'
    btn.innerText='turn off'
}


function turnOn(){
    imgg.src='off.jpg'
    btn.innerText='turn on'
}




 