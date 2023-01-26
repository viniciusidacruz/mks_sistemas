import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  margin: 4rem auto;
  padding: 0 2rem;

  ul {
    width: 100%;
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    flex-wrap: wrap;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
