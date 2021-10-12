import { useEffect, useState } from "react";
// import Card from "../Card";
import FlipClock from "../FlipClock";
import * as S from "./styles";

const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;

const CountDown = () => {
  const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  // https://www.w3schools.com/howto/howto_js_countdown.asp
  useEffect(() => {
    setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setDays(Math.floor(distance / DAYS));
      setHours(Math.floor((distance % DAYS) / HOURS));
      setMinutes(Math.floor((distance % HOURS) / MINUTES));
      setSeconds(Math.floor((distance % MINUTES) / SECONDS));
    }, 1000);
  }, [countDownDate]);

  return (
    <S.Container>
      <FlipClock
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </S.Container>
  );
};

export default CountDown;
