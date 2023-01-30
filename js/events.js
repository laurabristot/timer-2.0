import { Button } from "./buttons.js";


export function Events({
  controllers,
  timer,
  sound
}){

  Button.Play.onclick = function() {
    controllers.playPause()
    timer.countdown()
    sound.pressButton()
  }

  Button.Pause.onclick = function() {
    controllers.playPause()
    timer.stopCountdown()
    sound.pressButton()

  }

  Button.Add.onclick = function (){
    timer.addFiveMinutes()
    sound.pressButton()

  }

  Button.Remove.onclick = function (){
    timer.removeFiveMinutes()
    sound.pressButton()

  }

  Button.Stop.onclick = function(){
    timer.resetTimer()
    controllers.reset()
  }
}