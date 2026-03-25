import { NavLink } from 'react-router-dom';

import DownloadIcon from './icons/download.svg?react';
import { CtaButton, Nav, NavItem, NavList } from './NavMenu.styled';

interface Item {
  name: string;
  url: string;
  end?: boolean;
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
              end={item.end}
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
        href="/CV - Adam Issoufi.pdf"
      >
        <DownloadIcon className="icon" />
        <span className="text">CV</span>
      </CtaButton>
    </Nav>
  );
};

export default NavMenu;
