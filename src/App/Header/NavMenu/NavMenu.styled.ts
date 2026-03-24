import styled, { css } from 'styled-components';

export const Nav = styled.nav<{ $mobileMenuIsOpen: boolean }>`
  display: none;
  flex-direction: column;
  align-items: flex-end;
  border-radius: 100%;
  position: relative;
  z-index: 2;

  ${props =>
    props.$mobileMenuIsOpen &&
    css`
      display: flex;
      padding: 20px;
    `}

  @media (min-width: 50em) {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    padding: 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: 50em) {
    flex-direction: row;
    align-items: center;
  }
`;

export const NavItem = styled.li`
  padding: 14px 0;

  @media (min-width: 50em) {
    padding: 10px 16px;
    position: relative;
    transform: scale(1);
    transition-property: transform, color;
    transition-duration: var(--transition-duration);
    font-size: 15px;
    letter-spacing: 0.03em;

    &:hover {
      transform: scale(1.06);
    }

    &:hover a {
      color: var(--tertiary-color);
    }

    > a::before {
      content: '';
      position: absolute;
      height: 2px;
      background-color: var(--tertiary-color);
      bottom: 4px;
      left: 16px;
      right: 16px;
      display: none;
      border-radius: 2px;
    }

    > a.active::before {
      display: block;
    }

    > a.active {
      color: var(--tertiary-color);
      font-weight: 600;
    }
  }
`;

export const CtaButton = styled.a`
  border-radius: 60px;
  width: max-content;
  transform: scale(1);
  transition-property: color, border-color, transform, background-color, box-shadow;
  transition-duration: var(--transition-duration);
  margin-top: 14px;
  padding: 8px 22px;
  color: var(--primary-color);
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  height: max-content;
  font-size: 14px;
  letter-spacing: 0.04em;

  &:hover {
    transform: scale(1.06);
  }

  .icon {
    margin-right: 0.7em;
  }

  .text {
    text-transform: uppercase;
  }

  @media (min-width: 50em) {
    margin-top: 0;
    margin-left: 8px;

    &:hover {
      color: var(--tertiary-color);
      background-color: var(--primary-color);
      border-color: var(--primary-color);
      box-shadow: 0 0 16px rgba(139, 49, 104, 0.3);
    }

    &:hover .icon {
      stroke: var(--tertiary-color);
    }
  }
`;
