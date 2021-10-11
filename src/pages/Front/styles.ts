import styled from "styled-components";
import BgStar from "../../assets/images/bg-stars.svg";
import PatternHills from "../../assets/images/pattern-hills.svg";
import { media } from "../../styles/media";
import { rem } from "../../styles/utils";

export const Front = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${BgStar}), bottom / contain no-repeat url(${PatternHills}),
    ${({ theme }) => theme.palette.veryDarkBlue};

  @media (max-width: ${media.md}) {
    background: url(${BgStar}),
      bottom / 100% ${rem(168)} no-repeat url(${PatternHills}),
      ${({ theme }) => theme.palette.veryDarkBlue};
  }
`;
export const Title = styled.h1`
  font-size: ${rem(22)};
  text-transform: uppercase;
  letter-spacing: ${rem(7.5)};
  line-height: ${rem(24)};
  color: white;
  text-align: center;

  @media (max-width: ${media.md}) {
    font-size: ${rem(18)};
    letter-spacing: ${rem(6.14)};
  }
`;

export const Header = styled.header`
  margin-bottom: ${rem(104)};
  @media (max-width: ${media.md}) {
    width: ${(327 / 375) * 100}%;
    margin-bottom: ${rem(54)};
  }
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${rem(252)};

  @media (max-width: ${media.md}) {
    margin-bottom: ${rem(259)};
  }
`;

export const Footer = styled.footer`
  & > * + * {
    margin-left: ${rem(32)};
  }

  svg:hover {
    cursor: pointer;
    path {
      fill: ${({ theme }) => theme.palette.softRed};
    }
  }
`;
