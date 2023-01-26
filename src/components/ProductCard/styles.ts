import styled from 'styled-components';
import { FiShoppingBag } from 'react-icons/fi';

export const ProductCard = styled.li`
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  width: 100%;
  min-height: 320px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  p {
    font-size: 0.75rem;
    color: #2c2c2c;
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 137px;
  position: relative;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0.875rem 0;
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  margin-right: 0.3rem;
`;

export const ContentPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #373737;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  gap: 0 1rem;
  width: 100%;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Icon = styled(FiShoppingBag)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.875rem;
`;
