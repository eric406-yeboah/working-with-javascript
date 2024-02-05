function updateDigitalClock (){
 const now = new Date();
 const hours = now.getHours().toString().padStart(2,'0');
 const minute = now.getMinutes().toString().padStart(2,'0');
 const seconds = now.getSeconds().toString().padStart(2,'0');

 const digital=document.getElementById('digital');
 digital.textContent=`${hours}:${minute}:${seconds}`;


}
setInterval(updateDigitalClock,1000);
updateDigitalClock();