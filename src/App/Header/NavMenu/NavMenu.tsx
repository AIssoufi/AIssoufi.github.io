import { NavLink } from 'react-router-dom';

import DownloadIcon from './icons/download.svg?react';
import { CtaButton, Nav, NavItem, NavList } from './NavMenu.styled';

interface Item {
  name: string;
  url: string;
}

interface NavMenuProps {
  items: Item[];
  mobileMenuIsOpen: boolean;
  onClick: () => void;
}

const NavMenu = ({ items = [], onClick, mobileMenuIsOpen = false }: NavMenuProps) => {
  return (
    <Nav $mobileMenuIsOpen={mobileMenuIsOpen}>
      <NavList>
        {items.map(item => (
          <NavItem key={item.url}>
            <NavLink
              to={item.url}
              onClick={onClick}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.name}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
      <CtaButton
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
        href="https://firebasestorage.googleapis.com/v0/b/issoufi-v3.appspot.com/o/CV%20-%20Adam%20Issoufi.pdf?alt=media&token=f8a8ba99-9228-40c4-aaa1-77954c8b815a"
      >
        <DownloadIcon className="icon" />
        <span className="text">CV</span>
      </CtaButton>
    </Nav>
  );
};

export default NavMenu;
