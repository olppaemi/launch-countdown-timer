import * as S from "./styles";

const DynamicCard = ({
  animation,
  number,
}: {
  animation: string;
  number: number;
}) => {
  return (
    <S.DynamicCard $animation={animation}>
      <S.Clock $animation={animation}>
        {number.toString().padStart(2, "0")}
      </S.Clock>
    </S.DynamicCard>
  );
};

export default DynamicCard;
