import styled from "styled-components";
import { media } from "../../styles/media";
import { rem } from "../../styles/utils";

export const Card = styled.div`
  width: ${rem(148)};
  height: ${rem(150)};

  background-color: ${({ theme }) => theme.palette.veryBlackBlue};
  border-radius: ${rem(8)};

  position: relative;

  ::before {
    display: block;
    content: "";
    width: 100%;
    height: ${rem(70)};

    position: absolute;
    top: 0;
    z-index: 5;

    background-color: hsla(0, 0%, 0%, 0.1506);
    border-radius: ${rem(8)} ${rem(8)} 0 0;
  }

  ::after {
    display: block;
    content: "";
    width: 100%;
    height: ${rem(1)};

    position: absolute;
    top: ${rem(70)};
    z-index: 10;

    background-color: hsla(0, 0%, 0%, 0.253);
  }

  @media (max-width: ${media.md}) {
    width: ${rem(70)};
    height: ${rem(71)};

    ::before {
      height: ${rem(33)};
    }

    ::after {
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: ${rem(140)};
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${rem(80)};
  font-weight: bold;
  letter-spacing: -${rem(2.4)};
  line-height: ${rem(71)};

  background-color: ${({ theme }) => theme.palette.darkDesaturatedBlue};
  color: ${({ theme }) => theme.palette.softRed};
  border-radius: ${rem(8)};

  position: relative;
  overflow: hidden;

  ::before {
    display: block;
    content: "";
    width: ${rem(12)};
    height: ${rem(12)};
    position: absolute;
    top: ${rem(70 - 6)};
    left: -${rem(6)};

    background-color: ${({ theme }) => theme.palette.veryBlackBlue};
    border-radius: 50%;
    border: none;
  }

  ::after {
    display: block;
    content: "";
    width: ${rem(12)};
    height: ${rem(12)};
    position: absolute;
    top: ${rem(70 - 6)};
    right: -${rem(6)};

    background-color: ${({ theme }) => theme.palette.veryBlackBlue};
    border-radius: 50%;
    border: none;
  }

  @media (max-width: ${media.md}) {
    height: ${rem(66)};

    font-size: ${rem(36)};

    ::before {
      width: ${rem(6)};
      height: ${rem(6)};
      top: ${rem(33 - 3)};
      left: -${rem(3)};
    }

    ::after {
      width: ${rem(6)};
      height: ${rem(6)};
      top: ${rem(33 - 3)};
      right: -${rem(3)};
    }
  }
`;
