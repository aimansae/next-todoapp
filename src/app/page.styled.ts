import styled from "@emotion/styled";

export const Header = styled.header`
  margin: 2rem;
  text-align: center;
`;

export const Main = styled.main`
  margin: 0 auto;

  @media (min-width: 30rem) {
    margin: 0 2rem;
  }
  
  @media (min-width: 48rem) {
    margin: 0 12rem;
  }
`;
