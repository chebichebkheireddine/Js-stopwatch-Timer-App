// Varbel declaration
const minutesLable = document.getElementById('minutes');
const secondsLable = document.getElementById('secends');
const miliSecondsLable = document.getElementById('milisecends');
// btn varble  declaration
const btnStart= document.getElementById('startBtn');
const btnStop= document.getElementById('stopBtn');
const btnPause= document.getElementById('pauseBtn');
const btnReset= document.getElementById('resetBtn');
// Lap list varble
const lapList= document.getElementById('lapList');
// varble for time
let minutes = 0;
let seconds=0;
let miliSeconds=0;
let intervale ;

// Event listner
btnStart.addEventListener('click',startTimer);
btnStop.addEventListener('click',stopTimer);
btnPause.addEventListener('click',pausTimer);
btnReset.addEventListener('click',resetTimer);

// function for Timer
function startTimer(){

    intervale = setInterval(updateTimer,10);
    btnStart.disabled = true;

}
function stopTimer(){ 
    clearInterval(intervale);
    addOnLapList();
    restTimerData();
    btnStart.disabled=false;
    
}
function pausTimer(){
    clearInterval(intervale);
    btnStart.disabled=false;
    
}
function resetTimer(){
    clearInterval(intervale);
    restTimerData();
    btnStart.disabled=false;
    
}
function updateTimer(){
 miliSeconds++;
 if(miliSeconds===100){
    miliSeconds=0;
    seconds++;
    if(seconds===60){
        seconds=0;
        minutes++;
    }
 }   
 displayTimer();
}
// funtion to display time
function displayTimer(){

miliSecondsLable.textContent= padTime( miliSeconds);
secondsLable.textContent= padTime(seconds);
minutesLable.textContent= padTime(minutes);
}
//  function to format timer with String Method
function padTime(time){
    return time.toString().padStart(2,'0'); 
}
function restTimerData(){
    minutes=0;
    seconds=0;
    miliSeconds=0;
    displayTimer();
}
// function to add lap list
function addOnLapList() {
    const lapTime=`${padTime(minutes)}:${padTime(seconds)}:${padTime(miliSeconds)}`;
    const listItem =document.createElement('li');
    listItem.innerHTML=`<span>Lap ${lapList.childElementCount+1}:</span>${lapTime}`;
    lapList.appendChild(listItem); 
}
