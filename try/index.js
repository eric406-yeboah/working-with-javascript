const amount = document.getElementById('amount')
const select1 = document.getElementById('select1')
const select2 = document.getElementById('select2')
const con = document.getElementById('con')
const result = document.getElementById('result')
const version=11.7;
let total=0
function ghana(){
    if(select1.value==='USD' && select2.value==='GHC'){
      total=parseFloat(amount.value) * version
      result.textContent= `${total} USD`
    }

    else if(select1.value==='GHC' && select2.value==='USD')
    total=parseFloat(amount.value) / version
    result.textContent= `${total}GHC`
}

con.addEventListener('click',ghana)





