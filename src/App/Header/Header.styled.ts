import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 10;

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 72px;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0) 100%);
    z-index: -1;
    pointer-events: none;
  }
`;

export const Logo = styled.div`
  font-family: 'Saira Stencil One', cursive;
  font-size: 34px;
  transform: scale(1);
  transition-property: transform, color;
  transition-duration: var(--transition-duration);
  letter-spacing: 0.02em;

  :hover {
    transform: scale(1.08);
    color: var(--tertiary-color);
  }
`;

export const Menu = styled.div<MenuProps>`
  display: flex;
  flex-direction: row;

  ${props =>
    props.isSticky &&
    css`
      position: fixed;
      top: 20px;
      z-index: 1;
      right: 20px;
    `}
`;

interface MenuProps {
  isSticky: boolean;
}
