import { Button } from "./buttons.js"
const forestSound = new Audio('.././assets/sounds/forest.mp3')
const rainSound = new Audio('.././assets/sounds/rain.mp3')
const shopSound = new Audio('.././assets/sounds/shop.mp3')
const fireSound = new Audio('.././assets/sounds/fire.mp3')

export function Scenarios(){
    Button.Forest.onclick = () => {
      Button.Forest.classList.toggle('selected')
      Button.Rain.classList.remove('selected')
      Button.Shop.classList.remove('selected')
      Button.Fire.classList.remove('selected')
      if (Button.Forest.classList.contains('selected')){
        forestSound.play()
        rainSound.pause() 
        shopSound.pause() 
        fireSound.pause() 
      } else {
        forestSound.pause() 
      }
    }
    
    Button.Rain.onclick = () => {
      Button.Forest.classList.remove('selected')
      Button.Rain.classList.toggle('selected')
      Button.Shop.classList.remove('selected')
      Button.Fire.classList.remove('selected')
      if (Button.Rain.classList.contains('selected')){
        forestSound.pause()
        rainSound.play()
        shopSound.pause() 
        fireSound.pause()
      } else {
        rainSound.pause() 
      }
    }
    
    
    Button.Shop.onclick = () => {
      Button.Forest.classList.remove('selected')
      Button.Rain.classList.remove('selected')
      Button.Shop.classList.toggle('selected')
      Button.Fire.classList.remove('selected')
      if (Button.Shop.classList.contains('selected')){
        forestSound.pause()
        rainSound.pause() 
        shopSound.play() 
        fireSound.pause()
      } else {
        shopSound.pause() 
      }
    }
    
    Button.Fire.onclick = () => {
      Button.Forest.classList.remove('selected')
      Button.Rain.classList.remove('selected')
      Button.Shop.classList.remove('selected')
      Button.Fire.classList.toggle('selected')
      if (Button.Fire.classList.contains('selected')){
        forestSound.pause()
        rainSound.pause() 
        shopSound.pause() 
        fireSound.play()
      } else {
        fireSound.pause() 
      }

      

  }
  
  return {
  }
}


export function ResetScenario(){
  forestSound.pause()
  rainSound.pause() 
  shopSound.pause() 
  fireSound.pause()
  Button.Forest.classList.remove('selected')
  Button.Rain.classList.remove('selected')
  Button.Shop.classList.remove('selected')
  Button.Fire.classList.remove('selected')
}