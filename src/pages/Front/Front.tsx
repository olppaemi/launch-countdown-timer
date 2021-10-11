import CountDown from "../../components/CountDown";
import Facebook from "../../components/icons/Facebook";
import Instagram from "../../components/icons/Instagram";
import Pinterest from "../../components/icons/Pinterest";
import * as S from "./styles";

const Front = () => {
  return (
    <S.Front>
      <S.Header>
        <S.Title>We’re launching soon</S.Title>
      </S.Header>
      <S.Main>
        <CountDown />
      </S.Main>
      <S.Footer>
        <Facebook />
        <Pinterest />
        <Instagram />
      </S.Footer>
    </S.Front>
  );
};

export default Front;
