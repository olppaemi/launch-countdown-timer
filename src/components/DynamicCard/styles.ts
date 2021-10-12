import styled, { css, keyframes } from "styled-components";
import { rem } from "../../styles/utils";

export const DynamicCard = styled.div<{ $animation: string }>`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;

  backface-visibility: hidden;
  background-color: ${({ theme }) => theme.palette.darkDesaturatedBlue};

  position: absolute;
  left: 0;
  z-index: 10;
  overflow: hidden;

  ${({ $animation }) =>
    $animation === "unfold" &&
    css`
      top: 50%;

      border-bottom-left-radius: ${rem(8)};
      border-bottom-right-radius: ${rem(8)};

      transform-origin: 50% 0%;
      transfrom: rotateX(180deg);
      transform-style: preserve-3d;
      animation: ${unfold} 0.6s ease-in-out forwards;
    `}
  ${({ $animation }) =>
    $animation === "fold" &&
    css`
      top: 0%;

      border-top-left-radius: ${rem(8)};
      border-top-right-radius: ${rem(8)};

      transform-origin: 50% 100%;
      transfrom: rotateX(0deg);
      transform-style: preserve-3d;
      animation: ${fold} 0.6s ease-in-out forwards;
    `}
`;

export const Clock = styled.span<{ $animation: string }>`
  transform: ${({ $animation }) =>
    $animation === "fold" ? "translateY(50%)" : "translateY(-50%)"};
`;

const fold = keyframes`
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(-180deg);
  }
`;

const unfold = keyframes`
  from {
    transform: rotateX(180deg);
  }
  to {
    transform: rotateX(0deg);
  }
`;
