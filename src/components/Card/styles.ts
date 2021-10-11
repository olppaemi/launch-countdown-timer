import styled from "styled-components";
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
    height: ${rem(1)};

    position: absolute;
    top: 50%;
    z-index: 10;

    background-color: hsla(0, 0%, 0%, 0.253);
    border: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: ${rem(140)};
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.palette.darkDesaturatedBlue};
  color: ${({ theme }) => theme.palette.softRed};
  font-size: ${rem(80)};
  font-weight: bold;
  border-radius: ${rem(8)};

  position: relative;
  overflow: hidden;

  ::before {
    display: block;
    content: "";
    width: ${rem(12)};
    height: ${rem(12)};
    position: absolute;
    top: 50%;
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
    top: 50%;
    right: -${rem(6)};

    background-color: ${({ theme }) => theme.palette.veryBlackBlue};
    border-radius: 50%;
    border: none;
  }
`;
