import { DateTime, Duration } from "./luxon.js";

const resultTime = document.querySelector('#result_time');
const dur = Duration.fromObject({seconds: 1});
let soundTik = new Howl({
    src: ['js/beep-6.mp3'],
    volume: 0.5
});
let soundDone = new Howl({
    src: ['js/beep-4.mp3'],
    volume: 0.5
});
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
            resultTime.innerHTML = '<p>Timer is done</p>'
            soundDone.play();
            return clearInterval(this.interval);
        }
        return secondTime.diff(firstTime, ['hours', 'minutes', 'seconds']).toObject();
    }
    timer(){
        return this.interval = setInterval(()=>{
            soundTik.play()
            this.firstTime = this.firstTime.plus(dur);
            resultTime.innerHTML = this.diffTimeToHtml(this.diffTimes())
        }, 1000);
    }
    pauseTimer() {
        if (!this.state) {
            console.log('pause')
            this.state = true;
            return clearInterval(this.interval)
        } else {
            console.log('play')
            this.state = false;
            return this.timer();
        }
    }
}
