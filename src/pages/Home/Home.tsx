import { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { ParticleField } from './ParticleField';
import { SplitWords } from './SplitWords';
import {
  Btn,
  ButtonContainer,
  Content,
  CursorGlow,
  HomePage,
  MagneticWrapper,
  Main,
  Subtitle,
  Title,
} from './Home.styled';

export const Home = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorPos = useRef({ x: -100, y: -100 });
  const cursorTarget = useRef({ x: -100, y: -100 });
  const cursorRaf = useRef<number>(0);

  // Cursor glow with lerp
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorTarget.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      const cp = cursorPos.current;
      const ct = cursorTarget.current;
      cp.x += (ct.x - cp.x) * 0.1;
      cp.y += (ct.y - cp.y) * 0.1;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cp.x - 20}px, ${cp.y - 20}px)`;
      }
      cursorRaf.current = requestAnimationFrame(animate);
    };
    cursorRaf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(cursorRaf.current);
    };
  }, []);

  // Parallax on content
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!contentRef.current) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      contentRef.current.style.transform = `translate(${dx * -10}px, ${dy * -7}px)`;
    };
    const onLeave = () => {
      if (!contentRef.current) return;
      contentRef.current.style.transition = 'transform 0.9s cubic-bezier(0.23, 1, 0.32, 1)';
      contentRef.current.style.transform = '';
      setTimeout(() => {
        if (contentRef.current) contentRef.current.style.transition = '';
      }, 900);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // Magnetic buttons
  const handleMagnetMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.4;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.4;
    el.style.transition = 'transform 0.1s ease';
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }, []);

  const handleMagnetLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transition = 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)';
    e.currentTarget.style.transform = '';
  }, []);

  return (
    <HomePage $backgroundImage="/home.jpeg">
      <ParticleField />
      <CursorGlow ref={cursorRef} />
      <Content ref={contentRef}>
        <Main>
          <Title>
            <SplitWords>Développeur full-stack JavaScript</SplitWords>
            <br />
            passioné par l'<SplitWords>UX</SplitWords> et l'<SplitWords>UI</SplitWords> Design
          </Title>
          <Subtitle>Je vous aide à développer vos applications web</Subtitle>
        </Main>
        <ButtonContainer>
          <MagneticWrapper
            onMouseMove={handleMagnetMove}
            onMouseLeave={handleMagnetLeave}
          >
            <Btn
              as={Link}
              to="/projects"
              $callToAction
            >
              Voir mes projets
            </Btn>
          </MagneticWrapper>
          <MagneticWrapper
            onMouseMove={handleMagnetMove}
            onMouseLeave={handleMagnetLeave}
          >
            <Btn
              as={Link}
              to="/experiences"
            >
              Expériences professionnelles
            </Btn>
          </MagneticWrapper>
        </ButtonContainer>
      </Content>
    </HomePage>
  );
};
