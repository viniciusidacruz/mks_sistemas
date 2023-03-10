import styled from 'styled-components';

export const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};

  strong {
    font-size: 2.5rem;
  }
`;
