import { Scenarios } from "./scenarios.js";
import { Controllers } from "./controllers.js";
import { Timer } from "./timer.js";
import { Events } from "./events.js";
import { Sound } from "./sounds.js";
import { DarkMode } from "./darkMode.js";

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const controllers = Controllers()
const sound = Sound()


const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controllers.reset
})

Scenarios()

Events({controllers, timer, sound})

DarkMode()

