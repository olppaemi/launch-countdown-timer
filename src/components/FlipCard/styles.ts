import styled from "styled-components";
import { media } from "../../styles/media";
import { rem } from "../../styles/utils";

export const Container = styled.div`
  font-size: clamp(${rem(36)}, ${rem(16)} + 5.5vw, ${rem(80)});
  font-weight: bold;
  letter-spacing: -${rem(2.4)};
  color: ${({ theme }) => theme.palette.softRed};

  border-radius: ${rem(8)};

  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.veryBlackBlue};
  border-radius: ${rem(8)};
  margin-bottom: ${rem(16)};
`;

export const Dummy = styled.div`
  height: ${rem(10)};

  @media (max-width: ${media.sm}) {
    height: ${rem(4.29)};
  }
`;

export const Unit = styled.p`
  font-size: ${rem(14)};
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.palette.grayishBlue};
  letter-spacing: ${rem(5.92)};

  @media (max-width: ${media.sm}) {
    font-size: ${rem(7)};
    letter-spacing: ${rem(2.96)};
  }
`;

export const FlipClockUnit = styled.div`
  width: 100%;

  border-radius: ${rem(8)};
  background-color: ${({ theme }) => theme.palette.darkDesaturatedBlue};

  position: relative;
  overflow: hidden;
`;

const Hole = styled.div`
  width: ${rem(12)};
  height: ${rem(12)};
  position: absolute;
  top: 50%;
  z-index: 100;

  background-color: ${({ theme }) => theme.palette.veryBlackBlue};
  border-radius: 50%;

  @media (max-width: ${media.sm}) {
    width: ${rem(6)};
    height: ${rem(6)};
  }
`;

export const LeftHole = styled(Hole)`
  left: 0;
  transform: translate(-50%, -50%);
`;

export const RightHole = styled(Hole)`
  right: 0;
  transform: translate(50%, -50%);
`;

export const MiddleBar = styled.div`
  width: 100%;
  height: ${rem(1)};

  position: absolute;
  top: 50%;
  z-index: 100;
  transform: translateY(-50%);

  background-color: hsla(0, 0%, 0%, 0.253);
`;
