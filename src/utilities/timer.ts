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
    const clock: any = document.getElementById(id);
    const timeinterval = setInterval(() => {
      const t = getTimeRemaining(endtime);
      clock.innerHTML = 'days: ' + t.days + ' ' +
                        'hours: '+ t.hours + ' ' +
                        'min: ' + t.minutes + ' ' +
                        'sec: ' + t.seconds;

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    },1000);
  }

  