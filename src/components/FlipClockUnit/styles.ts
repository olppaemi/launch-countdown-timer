import styled from "styled-components";
import { rem } from "../../styles/utils";

export const Container = styled.div`
  font-size: ${rem(80)};
  font-weight: bold;
  letter-spacing: -${rem(2.4)};
  line-height: ${rem(71)};
  color: ${({ theme }) => theme.palette.softRed};

  width: 100%;
  height: ${rem(184)};
  position: relative;
  display: inline-flex;
  flex-direction: column;
`;

export const FlipClockUnit = styled.div`
  width: ${rem(148)};
  height: ${rem(140)};
  border-radius: ${rem(8)};
  background-color: ${({ theme }) => theme.palette.darkDesaturatedBlue};
  position: relative;
`;
