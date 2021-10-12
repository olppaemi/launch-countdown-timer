import styled from "styled-components";
import { rem } from "../../styles/utils";

export const FlipClock = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${rem(32)};
`;
