import styled from "styled-components";
import { media } from "../../styles/media";
import { rem } from "../../styles/utils";

export const FlipClock = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${rem(32)};

  @media (max-width: ${media.md}) {
    grid-column-gap: ${rem(16)};
  }
`;
