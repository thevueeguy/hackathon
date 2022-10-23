function parseDate(data: any): any {
  return Date.parse(data);
}

function getTimeRemaining(endtime: any){
  const total = Date.parse(endtime) - parseDate(new Date());
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
    const clock: any = document.getElementById(id);
    const timeinterval = setInterval(() => {
      const t = getTimeRemaining(endtime);
      clock.innerHTML = 'days: ' + t.days + '<br>' +
                        'hours: '+ t.hours + '<br>' +
                        'minutes: ' + t.minutes + '<br>' +
                        'seconds: ' + t.seconds;
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    },1000);
  }

  