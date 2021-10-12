import { useEffect, useState } from "react";
import DynamicCard from "../DynamicCard";
import StaticCard from "../StaticCard";
import * as S from "./styles";

function getPrevNumber(number: number, unit: string): number {
  if (unit === "hours") {
    return number === 24 ? 0 : number;
  }
  if (unit === "minutes" || unit === "second") {
    return number === 60 ? 0 : number;
  }
  return number;
}

const FlipClockUnit = ({ number, unit }: { number: number; unit: string }) => {
  const currentNumber = number;
  const previousNumber = getPrevNumber(number + 1, unit);
  const [swap, setSwap] = useState(false);

  useEffect(() => {
    setSwap((prev) => !prev);
  }, [number]);

  const number1 = swap ? previousNumber : currentNumber;
  const number2 = !swap ? previousNumber : currentNumber;

  const animation1 = swap ? "fold" : "unfold";
  const animation2 = !swap ? "fold" : "unfold";

  return (
    <S.Container>
      <S.Wrapper>
        <S.FlipClockUnit>
          <StaticCard position={"upper"} number={currentNumber} />
          <StaticCard position={"lower"} number={previousNumber} />
          <DynamicCard number={number1} animation={animation1} />
          <DynamicCard number={number2} animation={animation2} />
          <S.LeftHole />
          <S.RightHole />
          <S.MiddleBar />
        </S.FlipClockUnit>
      </S.Wrapper>
    </S.Container>
  );
};

export default FlipClockUnit;
