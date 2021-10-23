const timer = (id, deadline) => {
  const addZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const getTimeRemaining = (endtime) => {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / 1000 / 60 / 60 / 24);

    return {
      total,
      seconds,
      minutes,
      hours,
      days,
    };
  };

  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector);
    const seconds = timer.querySelector("#seconds");
    const minutes = timer.querySelector("#minutes");
    const hours = timer.querySelector("#hours");
    const days = timer.querySelector("#days");
    const timeInterval = setInterval(setClock, 1000);

    function setClock(endTime) {
      const time = getTimeRemaining(endtime);
      seconds.textContent = addZero(time.seconds);
      minutes.textContent = addZero(time.minutes);
      hours.textContent = addZero(time.hours);
      days.textContent = addZero(time.days);

      if (time < 1) {
        seconds.textContent = "00";
        minutes.textContent = "00";
        hours.textContent = "00";
        days.textContent = "00";

        clearInterval(timeInterval);
      }
    }
    setClock(id, deadline);
  };

  setClock(id, deadline);
};

export default timer;
