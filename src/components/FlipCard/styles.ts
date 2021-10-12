import styled from "styled-components";
import { media } from "../../styles/media";
import { rem } from "../../styles/utils";

export const Container = styled.div`
  font-size: clamp(${rem(36)}, ${rem(16)} + 5.5vw, ${rem(80)});
  font-weight: bold;
  letter-spacing: -${rem(2.4)};
  color: ${({ theme }) => theme.palette.softRed};
  background-color: ${({ theme }) => theme.palette.veryBlackBlue};
  border-radius: ${rem(8)};

  position: relative;
  width: 100%;
`;

export const Wrapper = styled.div``;

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
