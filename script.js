const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const stop = document.getElementById("stop");

let second = 0,minute = 0,hour = 0;

let timer;

start.addEventListener("click",()=> {
    timer = setInterval(startStopWatch,1000);

});
stop.addEventListener("click",() => {
    clearInterval(timer);
});

reset.addEventListener("click",() => {
    second = 0;
    minute = 0;
    hour = 0;
    display();
    clearInterval(timer);
});
function startStopWatch(){
    second++;
    if(second == 60){
        minute++;
        second = 0;
    }
    if(minute == 60){
        hour++;
        minute = 0;
    }
    display();
}

function display(){
    seconds.textContent = solve(second);
    minutes.textContent = solve(minute);
    hours.textContent = solve(hour);

}

function solve(time){
    if(time  < 10){
        return "0" + time;
    }
    return time;
}

display();