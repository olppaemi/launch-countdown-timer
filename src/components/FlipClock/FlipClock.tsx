import FlipClockUnit from "../FlipClockUnit";
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
      <FlipClockUnit number={days} unit={"days"} />
      <FlipClockUnit number={hours} unit={"hours"} />
      <FlipClockUnit number={minutes} unit={"minutes"} />
      <FlipClockUnit number={seconds} unit={"seconds"} />
    </S.FlipClock>
  );
};

export default FlipClock;
