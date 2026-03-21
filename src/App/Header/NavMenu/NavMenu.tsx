import { NavLink } from 'react-router-dom';
import './NavMenu.css';

import DownloadIcon from './icons/download.svg?react';

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
    <nav className={`nav-menu-comp ${mobileMenuIsOpen ? 'mobile-menu-is-open' : ''}`}>
      <ul>
        {items.map(item => (
          <li
            key={item.url}
            className="nav-item"
          >
            <NavLink
              to={item.url}
              onClick={onClick}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <a
        target="_blank"
        rel="noreferrer"
        className="cta-btn"
        onClick={onClick}
        href="https://firebasestorage.googleapis.com/v0/b/issoufi-v3.appspot.com/o/CV%20-%20Adam%20Issoufi.pdf?alt=media&token=f8a8ba99-9228-40c4-aaa1-77954c8b815a"
      >
        <DownloadIcon className="icon" />
        <span className="text">CV</span>
      </a>
    </nav>
  );
};

export default NavMenu;
