import {Sound} from "./sounds.js"

const sound = Sound()

export function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}){

  let timerTimeout
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  function updateTimerDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function resetTimer(){
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeout)
  }

  function countdown() {
    timerTimeout = setTimeout(function(){
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      
      updateTimerDisplay(minutes, 0)

      if (minutes <= 0 && seconds <= 0){
        resetControls()
        sound.timerEnd()
        updateTimerDisplay()
        return
      }
  
      if(seconds <= 0) {
        seconds = 60

        --minutes
      }
      
      updateTimerDisplay(minutes, String(seconds-1) )
      
      
      countdown()
      }, 1000)
  }

  function addFiveMinutes() {
    let newMinutes = Number(minutesDisplay.textContent) + 5
    if (newMinutes >= 65 ){
      alert('Tempo máximo suportado é de 60 minutos')
      return
    }else{
      updateTimerDisplay(newMinutes, seconds)
    }
  }

  function removeFiveMinutes() {
    let newMinutes = Number(minutesDisplay.textContent) - 5
    
    if(newMinutes <= 0 && newMinutes > -5){
      newMinutes =  Number(minutesDisplay.textContent) - 1
      updateTimerDisplay(newMinutes, seconds)
    } else if (newMinutes <= 0){
      return
    } else {
      updateTimerDisplay(newMinutes, seconds)
    }
  }

  function stopCountdown(){
    clearTimeout(timerTimeout)
  }

  return {
    updateTimerDisplay,
    countdown,
    resetTimer,
    stopCountdown,
    addFiveMinutes,
    removeFiveMinutes
  }
}
