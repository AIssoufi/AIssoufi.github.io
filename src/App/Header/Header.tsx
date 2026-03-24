import { useState } from 'react';
import { Link } from 'react-router-dom';

import BurgerMenu from './BurgerMenu';
import NavMenu from './NavMenu';

import { Container, Logo, Menu } from './Header.styled';

const Header = ({ testId }: HeaderProps) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <Container data-testid={testId}>
      <Logo>
        <Link to="/">AI</Link>
      </Logo>
      <Menu isSticky={mobileMenuIsOpen}>
        <NavMenu
          items={items}
          mobileMenuIsOpen={mobileMenuIsOpen}
          onClick={() => setMobileMenuIsOpen(false)}
        />
        <BurgerMenu
          isOpen={mobileMenuIsOpen}
          onOpen={() => setMobileMenuIsOpen(true)}
          onClose={() => setMobileMenuIsOpen(false)}
        />
      </Menu>
    </Container>
  );
};

export default Header;

interface HeaderProps {
  testId?: string;
}

const items = [
  { name: 'Accueil', url: '/' },
  { name: 'Projects', url: '/projects' },
  { name: 'Experience', url: '/experiences' },
  { name: 'Skills', url: '/skills' },
];
