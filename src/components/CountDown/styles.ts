import styled from "styled-components";
import { media } from "../../styles/media";
import { rem } from "../../styles/utils";

export const Container = styled.div`
  width: ${rem(688)};
  display: flex;
  justify-content: space-between;

  @media (max-width: ${media.md}) {
    width: ${rem(327)};
  }
`;

export const CardWrapper = styled.div`
  & > * + * {
    margin-top: ${rem(16)};
  }
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.palette.grayishBlue};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: ${rem(5.92)};

  @media (max-width: ${media.md}) {
    font-size: ${rem(7)};
    letter-spacing: ${rem(2.96)};
  }
`;
