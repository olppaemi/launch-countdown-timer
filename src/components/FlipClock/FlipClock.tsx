import FlipCard from "../FlipCard";
import * as S from "./styles";

const FlipClock = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  return (
    <S.FlipClock>
      <FlipCard number={days} unit={"days"} />
      <FlipCard number={hours} unit={"hours"} />
      <FlipCard number={minutes} unit={"minutes"} />
      <FlipCard number={seconds} unit={"seconds"} />
    </S.FlipClock>
  );
};

export default FlipClock;
