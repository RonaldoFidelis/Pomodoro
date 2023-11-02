export class Methods {
  constructor() {
    this._minute = 0;
    this._previusTime = 0;
    this._output = null;
    this.seconds = 0;
    this.interval = null;
  }

  set minute(time) {
    this._minute = time;
    this._previusTime = this._minute;
  }

  set output(output) {
    this._output = output;
  }

  start() {
    this.interval = setInterval(() => {
      if (this.seconds == 0) {
        this._minute--;
        this.seconds = 59;
      } else {
        this.seconds--;
      }

      const formattedMinute = this._minute.toString().padStart(2, '0');
      const formattedSeconds = this.seconds.toString().padStart(2, '0');
      
      this._output.textContent = `${formattedMinute}:${formattedSeconds}`;

      if (this._minute == 0 && this.seconds == 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }
  
  pause(){
    console.log('Ainda falta implementar.')
  }

  stop() {
    if (this.interval != null) {
      clearInterval(this.interval);
      this._output = null;
      this.interval = null;
      this.seconds = 0;
      console.log('Parou!');
    } else {
      console.log('Não tem nenhum temporizador rodando atualmente.');
    }
  }
}
