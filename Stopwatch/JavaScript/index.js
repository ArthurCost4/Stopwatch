let sec=0
let min=0
let hr=0

let interval

function comece(){
    timer()
    interval= setInterval(timer,10)


}

function pare(){
    clearInterval(interval)

}

function reseta(){
    hr = 00;
    min = 00;
    sec = 00;
    document.getElementById('timer').innerText = "00:00:00"
}


function format(input) {
    return input > 10 ? input : `0${input}`
  }

function timer(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('timer').innerText=format(hr)+':'+format(min)+':'+format(sec)
}