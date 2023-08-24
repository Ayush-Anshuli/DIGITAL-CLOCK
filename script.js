setInterval (function(){

    let c = new Date()
    
    let hrs = c.getHours()
    let min = c.getMinutes()
    let sec = c.getSeconds()

    let abc = "AM"
    if(hrs>12){
        hrs=hrs-12;
        abc="PM"
    }


    if(hrs<10){
        hrs = `0${hrs}`
    }

    if(min<10){
        min = `0${min}`
    }

    if(sec<10){
        sec = `0${sec}`
    }



    document.getElementsByClassName("time")[0].innerHTML=hrs;
    document.getElementsByClassName("time")[1].innerHTML=min;
    document.getElementsByClassName("time")[2].innerHTML=sec;
    
    am_pm.innerHTML = abc


},1000)