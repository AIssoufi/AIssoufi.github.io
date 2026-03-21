import styled, { css, keyframes } from 'styled-components';

const growth = keyframes`
  from {
    transform: translate(46%, -46%) scale(0);
  }
  to {
    transform: translate(46%, -46%) scale(1);
  }
`;

export const Container = styled.div<{ $isOpen: boolean }>`
  cursor: pointer;

  > svg {
    height: 50px !important;
    width: 50px !important;
    position: relative;
    z-index: 1;
  }

  ${props =>
    props.$isOpen &&
    css`
      position: relative;

      &::before {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
        height: 600px;
        width: 600px;
        background-color: var(--tertiary-color);
        border-radius: 50%;
        transform: translate(46%, -46%);
        animation-duration: var(--transition-duration);
        animation-name: ${growth};
      }

      &::after {
        content: '';
        display: block;
        position: fixed;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        z-index: 0;
        background-color: rgb(0 0 0 / 85%);
      }
    `}

  @media (min-width: 50em) {
    display: none;
  }
`;
