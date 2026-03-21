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
    padding: 14px 20px;
    position: relative;
    transform: scale(1);
    transition-property: transform, color;
    transition-duration: var(--transition-duration);

    &:hover {
      transform: scale(1.15);
    }

    &:hover a {
      color: var(--tertiary-color);
    }

    > a::before {
      content: '\\002B24';
      position: absolute;
      font-size: 7px;
      left: 5px;
      top: 0;
      bottom: 0;
      display: none;
      justify-content: flex-start;
      align-items: center;
      transition-property: display;
      transition-duration: var(--transition-duration);
    }

    > a.active::before {
      display: flex;
    }

    > a.active {
      color: var(--tertiary-color);
      font-weight: 700;
    }
  }
`;

export const CtaButton = styled.a`
  border-radius: 60px;
  width: max-content;
  transform: scale(1);
  transition-property: color, border-color, transform, background-color;
  transition-duration: var(--transition-duration);
  margin-top: 14px;
  padding: 7px 20px;
  color: var(--primary-color);
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--primary-color);
  height: max-content;

  &:hover {
    transform: scale(1.15);
  }

  .icon {
    margin-right: 0.7em;
  }

  .text {
    text-transform: uppercase;
  }

  @media (min-width: 50em) {
    margin-top: 0;

    &:hover {
      color: var(--tertiary-color);
      background-color: var(--primary-color);
    }

    &:hover .icon {
      stroke: var(--tertiary-color);
    }
  }
`;
