import { useEffect, useState } from "react";
import Card from "../Card";

const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;

const CountDown = () => {
  const countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();

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
    <div>
      <Card>{days}</Card>
      <Card>{hours}</Card>
      <Card>{minutes}</Card>
      <Card>{seconds}</Card>
    </div>
  );
};

export default CountDown;
