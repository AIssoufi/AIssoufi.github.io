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

export const LangSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-right: 8px;
`;

export const LangBtn = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: ${({ $active }) => ($active ? '700' : '400')};
  color: ${({ $active }) => ($active ? 'var(--tertiary-color)' : 'rgba(255,255,255,0.45)')};
  padding: 4px 5px;
  letter-spacing: 0.05em;
  transition: color var(--transition-duration);

  &:hover {
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
