let name=prompt("Lütfen isminizi giriniz:");
let myName=document.querySelector("#myName");
myName.innerHTML = ` ${name}`;

function time(){
    
    const date=new Date;

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
    
    let day =["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    let dayName = day[date.getDay()]
    
    let clock=document.querySelector("#myClock");
    clock.innerHTML = `${hour}:${minute}:${second} ${dayName}`;
}

setInterval(time,1000);
