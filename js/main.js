import {loadScript} from './load.js';
import { diffToHtml, diffDates} from './difDate.js';
import MyTimer from './timer.js';

const timer = document.querySelector('.timer');
const dateCalc = document.querySelector('.dateCalc');
const resBtn = document.querySelector('#resulter')
const resultDate = document.querySelector('#result_date');
const first_date = document.querySelector('#first_date');
const second_date = document.querySelector('#second_date');
const first_time = document.querySelector('#first_time');
const second_time = document.querySelector('#second_time');
const toggle = document.querySelector('#toggleBtn');
const pause = document.querySelector('#pause');


let state = [true];
let sound = new Howl({
    src: ['js/00171.mp3'],
    volume: 0.5
});
toggle.addEventListener('click', ()=>{
    sound.play();
    if (state[0]) {
        timer.style.display = 'none';
        dateCalc.style.display = 'block';
    } else {
        timer.style.display = 'block';
        dateCalc.style.display = 'none';
    }
    state[0] = !state[0];
})
loadScript('js/timer.js',()=>{
    loadScript('js/difDate.js')
})

resBtn.addEventListener('click',()=>{
        const timerClass = new MyTimer(first_time.value, second_time.value);
        resultDate.innerHTML = diffToHtml(diffDates(first_date.value, second_date.value));
        timerClass.timer();
        pause.addEventListener('click', ()=>{
            timerClass.pauseTimer();
        })
})