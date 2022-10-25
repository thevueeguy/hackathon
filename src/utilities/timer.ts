function parseDate(data: any): any {
  return Date.parse(data);
}

function getTimeRemaining(startTime: any) {
  const total = parseDate(new Date(startTime)) - parseDate(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

export function initializeClock(id: any, startTime: any, endTime: any) {
  const timeinterval = setInterval(() => {

    const t = getTimeRemaining(startTime);
    const headline: any = document.getElementById(`${id}headline-timer`);
    const days: any = document.getElementById(`${id}days`);
    const hours: any = document.getElementById(`${id}hours`);
    const minutes: any = document.getElementById(`${id}minutes`);
    const seconds: any = document.getElementById(`${id}seconds`);
    const badge: any = document.getElementById(`${id}badge-timer`);

    days.innerHTML = t.days;
    hours.innerHTML = t.hours;
    minutes.innerHTML = t.minutes;
    seconds.innerHTML = t.seconds;
    badge.style.backgroundColor  = "antiquewhite";
    badge.innerHTML = "Upcoming";

    if (t.total <= 0) {
      const u = getTimeRemaining(endTime);
      if (u.total <= 0) {
        clearInterval(timeinterval);
        headline.innerHTML = "Ended on";
        const ele: any = document.getElementById(`${id}countdown-timer`);
        ele.innerHTML = `<p>${new Date(endTime)}</p>`;
        badge.style.backgroundColor  = "mistyrose";
        badge.style.color  = "grey";
        badge.innerHTML = "Past";

      } else {
        headline.innerHTML = "Ends in";
        days.innerHTML = u.days;
        hours.innerHTML = u.hours;
        minutes.innerHTML = u.minutes;
        seconds.innerHTML = u.seconds;
        badge.style.backgroundColor  = "darkseagreen";
        badge.style.color  = "green";
        badge.innerHTML = "Active";
      }
    } else {
      headline.innerHTML = "Starts in";
    }
  }, 1000);

  return timeinterval;
}
