import styled from "styled-components";
import { media } from "../../styles/media";
import { rem } from "../../styles/utils";

export const Card = styled.div`
  width: 100%;
  height: ${rem(150)};
  padding-top: 100%;
  position: relative;
  overflow: hidden;

  background-color: ${({ theme }) => theme.palette.veryBlackBlue};
  border-radius: ${rem(8)};

  ::before {
    display: block;
    content: "";
    width: 100%;
    height: calc(50% - ${rem(6)});

    position: absolute;
    top: 0;
    z-index: 5;

    background-color: hsla(0, 0%, 0%, 0.1506);
    border-radius: ${rem(8)} ${rem(8)} 0 0;

    @media (max-width: ${media.md}) {
      height: calc(50% - ${rem(3)});
    }
  }

  @media (max-width: ${media.md}) {
    height: ${rem(71)};
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${(140 / 150) * 100}%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: clamp(${rem(36)}, ${rem(16)} + 5.5vw, ${rem(80)});
  font-weight: bold;
  letter-spacing: -${rem(2.4)};
  line-height: ${rem(71)};

  background-color: ${({ theme }) => theme.palette.darkDesaturatedBlue};
  color: ${({ theme }) => theme.palette.softRed};
  border-radius: ${rem(8)};

  @media (max-width: ${media.sm}) {
    height: ${(66 / 71) * 100}%;
  }
`;

export const LeftHole = styled.div`
  width: ${rem(12)};
  height: ${rem(12)};
  position: absolute;
  top: calc(50% - ${rem(12)});
  left: -${rem(6)};
  z-index: 10;

  background-color: ${({ theme }) => theme.palette.veryBlackBlue};
  border-radius: 50%;

  @media (max-width: ${media.md}) {
    width: ${rem(6)};
    height: ${rem(6)};
    top: calc(50% - ${rem(6)});
    left: -${rem(3)};
  }
`;

export const RightHole = styled.div`
  width: ${rem(12)};
  height: ${rem(12)};
  position: absolute;
  top: calc(50% - ${rem(12)});
  right: -${rem(6)};
  z-index: 10;

  background-color: ${({ theme }) => theme.palette.veryBlackBlue};
  border-radius: 50%;

  @media (max-width: ${media.md}) {
    width: ${rem(6)};
    height: ${rem(6)};
    top: calc(50% - ${rem(6)});
    right: -${rem(3)};
  }
`;

export const MiddleLine = styled.div`
  width: 100%;
  height: ${rem(1)};

  position: absolute;
  top: calc(50% - ${rem(6)});
  left: 0;
  z-index: 10;

  background-color: hsla(0, 0%, 0%, 0.253);

  @media (max-width: ${media.md}) {
    top: calc(50% - ${rem(3)});
  }
`;
