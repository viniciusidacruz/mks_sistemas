import styled from 'styled-components';

export const Quantity = styled.div`
  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  border: 1px solid #bfbfbf;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  gap: 1rem;

  & > span {
    position: relative;

    &::after,
    &::before {
      content: '';
      height: 100%;
      width: 1px;
      background-color: #bfbfbf;
      position: absolute;
    }

    &::after {
      right: -5px;
    }

    &::before {
      left: -5px;
    }
  }

  button {
    border: none;
    background: transparent;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;

    & > span {
      &::after {
        right: -20px;
      }

      &::before {
        left: -20px;
      }
    }
  }
`;
