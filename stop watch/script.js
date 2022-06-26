var seconds = 00;
var hundreds = 00;
var minutes = 00;

var appendHundreds = document.getElementById('hundreds');
var appendSeconds = document.getElementById('seconds');
var appendminutes = document.getElementById('minutes');
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');
var interval; 

//Start button click
function startTimer() {
    hundreds++
     
    if (hundreds > 9) {
        appendHundreds.innerHTML = hundreds;
    } 
    if (hundreds > 99) {
    
        seconds++
        appendSeconds.innerHTML = "0"+ seconds;
        hundreds = 0;
        appendHundreds.innerHTML = "0" + 0;;
    }
    if (seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
    
        minutes++
        appendminutes.innerHTML =  minutes;
        seconds=0;
        hundreds = 0;
        appendHundreds.innerHTML = "0" + 0;
        appendSeconds.innerHTML = "0"+0;

    }
    if (minutes > 9){
        appendminutes.innerHTML = minutes;
    }
}

    buttonStart.onclick = function(){
        if(interval) {
            clearInterval(interval);}

        interval = setInterval(startTimer); 
    }
   
    buttonStop.onclick = function(){
        clearInterval(interval);
    }

    buttonReset.onclick = function (){
        clearInterval(interval)
        hundreds = "00";
        seconds = "00";
        minutes="00";
        appendSeconds.innerHTML = seconds;
        appendHundreds.innerHTML = hundreds;
        appendminutes.innerHTML = minutes;

    }