import { DateTime } from "./luxon.js";
import './beep-6.mp3';
import './beep-4.mp3';

const resultTime = document.querySelector('#result_time');
export default class MyTimer {
    constructor(firstTime, secondTime) {
        this.firstTime = DateTime.fromISO(firstTime);
        this.secondTime = DateTime.fromISO(secondTime);
        this.state = false;
        this.interval = '';
    }
    diffTimeToHtml = diff => {
        return ` 
        <span> 
            ${diff.hours ? 'Часов: ' + diff.hours : ''}
            ${diff.minutes ? 'Минут: ' + diff.minutes : ''} 
            ${diff.seconds ? 'Секунд: ' + diff.seconds : ''} 
        </span> 
    `
    };
    diffTimes(firstTime, secondTime) {
        firstTime = this.firstTime;
        secondTime = this.secondTime;
        if (firstTime > secondTime) {
            resultTime.innerHTML = '<p>Timer is done</p><audio autoplay><source src="./beep-4.mp3" type="audio/mpeg"></audio>'
            return clearInterval(this.interval);
        }
        return secondTime.diff(firstTime, ['hours', 'minutes', 'seconds']).toObject();
    }
    timer(){
        return this.interval = setInterval(()=>{

            this.firstTime = this.firstTime.plus({seconds: 1});
            resultTime.innerHTML = `
                <audio autoplay>
                <source src="./beep-6.mp3" type="audio/mpeg">
              </audio>
              ${this.diffTimeToHtml(this.diffTimes())}
            `
        }, 1000);
    }
    pauseTimer() {
        if (!this.state) {
            this.state = true;
            return clearInterval(this.interval);
        } else {
            this.state = false;
            return this.timer();
        }
    }
}
