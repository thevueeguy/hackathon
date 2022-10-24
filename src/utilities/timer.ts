function parseDate(data: any): any {
  return Date.parse(data);
}

function getTimeRemaining(endtime: any){
  const total = parseDate(new Date(endtime)) - parseDate(new Date());
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

export function initializeClock(id: any, endtime: any) {
    // console.log(   Date.parse((new Date(endtime).toString())) -  Date.parse((new Date()).toString())  ); 

    const timeinterval = setInterval(() => {
      const t = getTimeRemaining(endtime);
      const headline: any = document.getElementById(`${id}headline-timer`);
      const days: any = document.getElementById(`${id}days`);
      const hours: any = document.getElementById(`${id}hours`);
      const minutes: any = document.getElementById(`${id}minutes`);
      const seconds: any = document.getElementById(`${id}seconds`);

      days.innerHTML = t.days;
      hours.innerHTML = t.hours;
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;
      headline.innerHTML = "Starts in";

      if (t.total <= 0) {
        clearInterval(timeinterval);
      } else {
      }
    },1000);
  }

  