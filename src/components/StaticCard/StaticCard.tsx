import * as S from "./styles";

const StaticCard = ({
  position,
  number,
}: {
  position: string;
  number: number;
}) => {
  return (
    <S.StaticCard $position={position}>
      <S.Clock $position={position}>
        {number.toString().padStart(2, "0")}
      </S.Clock>
    </S.StaticCard>
  );
};

export default StaticCard;
