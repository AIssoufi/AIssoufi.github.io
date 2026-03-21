import Lottie from 'lottie-web';

import { useEffect, useRef } from 'react';

import './BurgerMenu.css';

import burgerMenuData from './burger-menu.json';

interface BurgerMenuProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const BurgerMenu = ({ isOpen, onOpen, onClose }: BurgerMenuProps) => {
  const menuBurgerEl = useRef<any>(null);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    const lottieInstance = Lottie.loadAnimation({
      container: menuBurgerEl.current as Element,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: burgerMenuData,
    });

    lottieRef.current = lottieInstance;

    return () => {
      lottieInstance?.destroy?.();
    };
  }, []);

  const handleBurgerMenuClick = () => {
    const lottieInstance = lottieRef.current;
    if (isOpen) {
      onClose();
      lottieInstance.setSpeed(4);
      lottieInstance.setDirection(-1);
    } else {
      onOpen();
      lottieInstance.setSpeed(1.5);
      lottieInstance.setDirection(1);
    }
    lottieInstance.play();
  };

  return (
    <div
      className={`burger-menu-comp ${isOpen ? 'is-open' : ''}`}
      ref={menuBurgerEl}
      onClick={handleBurgerMenuClick}
    />
  );
};

export default BurgerMenu;
