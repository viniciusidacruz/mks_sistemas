import styled from 'styled-components';

export const Header = styled.header`
  height: 6.25rem;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 2rem;
  width: 100%;
`;
