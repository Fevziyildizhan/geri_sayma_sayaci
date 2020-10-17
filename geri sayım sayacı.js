<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GERİ SAYIM</title>
    <style type="text/css">
    html {
    background-color: #333232;
    height: 100%;
}

h1 {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}

#container {
    height: 200px;
    width: 700px;
    background-color: #F5E4C3;
    margin: 0 auto;
    border: 5px solid #88B169;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
}

/*label*/
.label {
    margin: 0;

    justify-self: center;
    align-self: center;
    font-size: 30px;
}

#hour-label {
    grid-area: 1 / 2 / 1 / 3;
}

#min-label {
    grid-area: 1 / 3 / 1 / 4;
}

#sec-label {
    grid-area: 1 / 4 / 1 / 5;
}

/*times*/
.time {
    justify-self: center;
    align-self: center;

    border: none;
    background-color: #ffffff00;
    font-size: 50px;
    width: 70px;
    height: 50px;
}

#hour {
    grid-area: 2 / 2 / 2 / 3;
}

.semicolon {
    justify-self: center;
    align-self: center;

    font-size: 30px;
    margin: 0;
}
#p1 {
    grid-area: 2 / 2 / 2 / 4;
}

#minute {
    grid-area: 2 / 3 / 2 / 4;
}

#p2 {
    grid-area: 2 / 3 / 2 / 5;
}

#sec {
    grid-area: 2 / 4 / 2 / 5;
}

/*buttons*/

.btn {
    align-self: center;
    
    width: 100px;
    height: 40px;

    font-size: 30px;
    justify-self: center;
}

#start {
    grid-area: 3 / 2 / 3 / 4;
}

#reset {
    grid-area: 3 / 3 / 3 / 5;
}


    </style>
</head>
<body>
    <div id="container">
        <p id="hour-label" class="label">Hours</p><p id="min-label" class="label">Minutes</p><p id="sec-label" class="label">Seconds</p>
        <input id="hour" type="number" max="99" min="0" value="0" class="time"><p id="p1" class="semicolon">:</p><input id="minute" type="number" max="60" min="0" value="0" class="time"><p id="p2" class="semicolon">:</p><input id="sec" type="number" max="60" min="0" value="0" class="time">
        <button id="start" class="btn">Start</button>
        <button id="reset" class="btn">Reset</button>
    </div>
   <script src="geri sayım.js"></script>
   let start = document.getElementById('start');
let reset = document.getElementById('reset');

let h = document.getElementById('hour')
let m = document.getElementById('minute')
let s = document.getElementById('sec')


var startTimer = null;

function timer(){

if(h.value == 0 && m.value == 0 && h.value == 0){
    h.value = 0;
    m.value = 0;
    s.value = 0;
}else if(s.value !=0){
    s.value--;

}else if( m.value != 0 && h.value == 0){
    s.value = 59;
    m.value--;

}else if(h.value !=0 && m.value == 0){

    m.value = 59;
    h.value--;
}
   return

}

function stopTimer(){

  clearInterval(startTimer)

}

start.addEventListener('click',function(){


 function  startInterval(){
     startTimer = setInterval(function(){
         timer()
     },1000)
     
 }
 startInterval()

})


reset.addEventListener('click',function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopTimer()

})

</div>
</body>
</html>
