import './TimerStore.css'
import { useEffect, useState } from 'react';

/*const getTimeLeft= ()=>{
    let hour = Date.prototype.getHours()
    let difference = Date(``) - +new Date();
}*/


function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function initializeClock(endtime) {
    var stringTime="";
    function updateClock() {
      var t = getTimeRemaining(endtime);

      if (t.total <= 0) {
        clearInterval(timeinterval);

        var newTime = Date.parse(endtime);
        var nowTime = Date.parse(new Date());

        while (newTime <= nowTime) {
          newTime = newTime + 1 * 24 * 60 * 60 * 1000; // add 24hours
        }

        var deadline = new Date(newTime);
        initializeClock(deadline);
      } else {
       stringTime = ("0" + t.hours).slice(-2)+":"+("0" + t.minutes).slice(-2)+":"+("0" + t.seconds).slice(-2);
       return stringTime
       /*hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);*/
      }
    }
    
    
    var timeinterval = setInterval(updateClock, 1000);
    return updateClock();
  }

export function TimerStore(){
    const [timerStore,setTimerStore]=useState("");
    
    useEffect(()=>{
        var deadline = "December 7 2023 18:00:00 GMT-0600";
        let time=initializeClock(deadline);
        setTimerStore(time);

        setInterval(()=>{
            time=initializeClock(deadline);
            setTimerStore(time);
        },1000)
    },[])

    

    return (
        <span className="timer">Resets in {timerStore}🕐</span>
    )
}