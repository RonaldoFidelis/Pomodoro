import { Pomodoro } from "./controller/pomodoro.mjs";

const output = document.querySelector('.output');

const pomodoro = new Pomodoro();

pomodoro.time = 25;
pomodoro.outPut = output;

pomodoro.methods.minute = pomodoro._time;
pomodoro.methods.output = pomodoro._outPut;

console.log(pomodoro.aboutClass());

document.addEventListener('DOMContentLoaded', function () {
  pomodoro.methods.start();

  // simular os eventos de start e stop
});

