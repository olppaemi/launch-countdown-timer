import * as S from "./styles";

const Card = ({ number }: { number: number }) => {
  return (
    <S.Card>
      <S.LeftHole />
      <S.RightHole />
      <S.MiddleLine />
      <S.Wrapper>{number.toString().padStart(2, "0")}</S.Wrapper>
    </S.Card>
  );
};

export default Card;
