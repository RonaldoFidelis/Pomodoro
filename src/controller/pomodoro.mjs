import { Methods } from "./methods.mjs";

export class Pomodoro {

  constructor() {
    this._time = null;
    this._outPut = null;
    this.methods = new Methods();
  }
  
  set time(time) {
    this._time = time;
  }
  
  set outPut(output) {
    this._outPut = output;
  }

  aboutClass() {
    return `Current time: ${this._time}
    \nOutPut: ${this._outPut}
    \nMethods:[
    \n${this.methods.start}
    \n${this.methods.pause}
    \n${this.methods.stop}
    ]`;
  }
}


