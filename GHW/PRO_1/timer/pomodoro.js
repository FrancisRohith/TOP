const min = document.querySelector('.minutes')
const sec = document.querySelector('.seconds')
const workTimeInput = document.querySelector('.workTime')
const breakTimeInput = document.querySelector('.breakTime')
const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const resetBtn = document.querySelector('.reset')
const mode = document.querySelector('.pomodoroMode')
const progressBar = document.getElementById('progress')

let timerId = null
let isWorkTime = true

let workTime = 25
let breakTime = 5
let timeLeft = workTime*60

function initTimer(){
    console.log(workTime)
    console.log(breakTime)
    timeLeft = (isWorkTime ? workTime : breakTime) * 60
    console.log(timeLeft)
    updateTime()
}

function updateTime(){
    const minutes = Math.floor(timeLeft/60)
    const seconds = Math.floor(timeLeft%60)
    min.textContent = minutes.toString().padStart(2,"0")
    sec.textContent = seconds.toString().padStart(2,"0")
    updateProgressBar()
}

function startTimer(){
    initTimer()
    if(timerId==null){
        timerId = setInterval(()=>{
            timeLeft -= 1
            updateTime()
            if(timeLeft === 0) switchMode()
    },1000)
    }
}

function pauseTimer(){
    clearInterval(timerId)
    timerId = null
    startBtn.disabled = false
    
}
function resetTimer(){
    pauseTimer()
    initTimer()
}

startBtn.addEventListener('click',()=>{
    startTimer()
    startBtn.disabled = true
    resetBtn.disabled = false
})
pauseBtn.addEventListener('click',()=>{
    pauseTimer()
})

resetBtn.addEventListener('click',()=>{
    resetTimer()
})

workTimeInput.addEventListener('change',(e)=>{
    workTime = parseInt(e.target.value)
    if(isWorkTime){
        resetTimer()
    }
})

breakTimeInput.addEventListener('change',(e)=>{
    breakTime = parseInt(e.target.value)
    if(!isWorkTime){
        resetTimer()
    }
})

function switchMode(){
    isWorkTime = !isWorkTime
    timeLeft = (isWorkTime ? workTime : breakTime) * 60
    mode.textContent =  isWorkTime ? 'work' : 'break'
    initTimer()
}

function updateProgressBar(){
    const totalTime = (isWorkTime ? workTime : breakTime)*60
    const progress = (totalTime-timeLeft)/totalTime *100
    progressBar.style.width = `${progress}%`
    progressBar.style.backgroundColor = isWorkTime ? '#4caf50' : '#2196f3'
}