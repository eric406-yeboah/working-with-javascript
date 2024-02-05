const btn=document.getElementById('btnClick')
const ctn=document.getElementById('ctnClick')
const click=document.getElementById('num')
const clear=document.getElementById('clear')

let num =0;
 function nom(){
    click.textContent =num;
 }

btnClick.addEventListener('click',()=>{
    num++;
    nom();
 });


ctnClick.addEventListener('click',()=>{
    num--;
    nom();
 });

function reset(){
    click.textContent ='0';
}

clear.addEventListener('click',reset);
