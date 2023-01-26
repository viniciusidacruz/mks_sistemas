import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

export const ProductCard = styled.li`
  padding: 1rem 1.5rem;
  width: 90%;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Circle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.black};
  height: 18px;
  width: 18px;
  position: absolute;
  right: -10px;
  top: -10px;
  border: none;
`;

export const CloseIcon = styled(IoClose)`
  font-size: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 0.875rem;
  max-width: 20%;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 0.875rem;
  max-width: 10%;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
