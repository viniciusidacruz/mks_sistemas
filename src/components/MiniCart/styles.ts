import { IoClose } from 'react-icons/io5';
import styled, { css } from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

import { ActiveProps } from './types';

export const Button = styled.button`
  height: 2.813rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 1rem;
  padding: 0 0.9rem;
  position: absolute;
  right: 0;

  span {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;
  }
`;

export const Icon = styled(FaShoppingCart)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const Background = styled.span<ActiveProps>`
  ${({ active }) =>
    active &&
    css`
      position: fixed;
      background: transparent;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 99;
    `}
`;

export const Wrapper = styled.div<ActiveProps>`
  padding: 2.9rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  position: fixed;
  right: ${({ active }) => (active ? 0 : '-100%')};
  top: 0;
  width: 30%;
  height: 100%;
  transition: 0.5s;
  z-index: 9999;
  box-shadow: -9px 0px 17px -3px rgba(0, 0, 0, 0.1);
  overflow: auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.black};
  height: 38px;
  width: 38px;
`;

export const CloseIcon = styled(IoClose)`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
`;

export const HeadingDrawer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  margin-bottom: 0.875rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 1rem;
  height: 70%;
  overflow: auto;

  @media (max-width: 768px) {
    height: 40%;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 2.625rem;
  }

  h3,
  button {
    font-weight: 700;
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.white};
  }

  button {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
  }
`;
