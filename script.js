
let display = document.getElementById('display')
let [hour,sec,min] = [0,0,0]
let timer = null

//stop watch function
function stopWatch(){
    sec++
    if(sec == 60){
        sec = 0
        min++
        if(min == 60){
            min = 0;
            hour++
        }
    }
    
    let h = hour < 10 ? '0'+hour : hour
    let m = min < 10 ? '0'+ min : min
    let s = sec < 10 ? '0'+sec : sec
    display.innerHTML = `${h}:${m}:${s}`
}

//start button function
function startWatch(){
    if(timer !== null){
        clearInterval(timer)
    }
    //start timer when button is clicked
    timer = setInterval(stopWatch,1000)
}

//Stop button
function stopButton(){
    //Stops interval counting 
    clearInterval(timer)
}

//reset watch
function resetWatch(){
    clearInterval(timer)
    display.innerHTML = "00:00:00"
}