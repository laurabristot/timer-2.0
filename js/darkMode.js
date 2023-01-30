const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")
const application = document.querySelector('.application')

export function DarkMode(){

  moon.onclick = () => {
    moon.classList.toggle("hide")
    sun.classList.toggle("hide")
    application.classList.toggle("darkMode")
  }

  sun.onclick = () => {
    moon.classList.toggle("hide")
    sun.classList.toggle("hide")
    application.classList.toggle("darkMode")
  }

  

}