import { FC } from "react";
import * as S from "./styles";

const Card: FC = ({ children }) => {
  return (
    <S.Card>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Card>
  );
};

export default Card;
