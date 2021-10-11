import { useEffect, useState } from "react";
import Card from "../Card";
import * as S from "./styles";

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
    <S.Container>
      <S.CardWrapper>
        <Card>{days}</Card>
        <S.Label>Days</S.Label>
      </S.CardWrapper>
      <S.CardWrapper>
        <Card>{hours}</Card>
        <S.Label>Hours</S.Label>
      </S.CardWrapper>
      <S.CardWrapper>
        <Card>{minutes}</Card>
        <S.Label>Minutes</S.Label>
      </S.CardWrapper>
      <S.CardWrapper>
        <Card>{seconds}</Card>
        <S.Label>Seconds</S.Label>
      </S.CardWrapper>
    </S.Container>
  );
};

export default CountDown;
