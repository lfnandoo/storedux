import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

export const Container = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  padding: 15px 20px;
  background-color: var(--color-main);
  border-radius: 5px;
  color: var(--color-white);
  font-weight: bold;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    background-color: var(--color-main-dark);
  }
`;
