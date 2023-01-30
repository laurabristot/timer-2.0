import { Button } from "./buttons.js"
import { ResetScenario } from "./scenarios.js"

export function Controllers(){
  function reset() {
    Button.Play.classList.remove('hide')
    Button.Pause.classList.add('hide')
    ResetScenario()
    }
  
  function playPause() {
    Button.Play.classList.toggle('hide')
    Button.Pause.classList.toggle('hide')
  }



  return {
    reset,
    playPause,
  }
}