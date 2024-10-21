let count=0;
const seconds = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");
const hours = document.querySelector("#hours");

let stopTime = true;

const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const pause = document.querySelector("#pause");

function timer(){
    console.log(count++);
    seconds.innerText = count%60;
    minutes.innerText = Math.floor(count/60);
    hours.innerText = Math.floor(count/3600);
}
let timeInterval;
start.addEventListener("click",()=>{
    if(stopTime){
        stopTime = false;
        timeInterval = setInterval(timer,1000);
        pause.style.display = "inline";
        start.style.display = "none";
    }
});

reset.addEventListener("click",()=>{
    clearInterval(timeInterval);
    seconds.innerText = "0";
    minutes.innerText = "0";
    hours.innerText = "0";
    stopTime = true;
    count=0;
    pause.style.display = "none";
    start.style.display = "inline";
});

pause.addEventListener("click",()=>{
    if(stopTime){
        stopTime = 0;
        pause.innerText = "Pause"
        timeInterval=setInterval(timer,1000);
    }
    else{
        stopTime = 1;
        pause.innerText = "Resume"
        clearInterval(timeInterval);
    }
})


function fun(){
    console.log(count++);
}