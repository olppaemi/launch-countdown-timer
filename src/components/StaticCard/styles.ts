import styled, { css } from "styled-components";
import { rem } from "../../styles/utils";

export const StaticCard = styled.div<{ $position: string }>`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;

  position: relative;
  z-index: 5;
  overflow: hidden;

  ${({ $position }) =>
    $position === "upper" &&
    css`
      border-top-left-radius: ${rem(8)};
      border-top-right-radius: ${rem(8)};
      background-color: rgb(0, 0, 0, 0.15);
    `}
  ${({ $position }) =>
    $position === "lower" &&
    css`
      border-bottom-left-radius: ${rem(8)};
      border-bottom-right-radius: ${rem(8)};
    `}
`;

export const Clock = styled.span<{ $position: string }>`
  transform: ${({ $position }) =>
    $position === "upper" ? "translateY(50%)" : "translateY(-50%)"};
`;
