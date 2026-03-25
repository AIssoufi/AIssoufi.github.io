import styled, { keyframes } from 'styled-components';

import { Page } from '../../App/App.styled';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
`;

const textFlow = keyframes`
  0%   { background-position: 200% center; }
  100% { background-position: -200% center; }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const HomePage = styled(Page)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CursorGlow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(139, 49, 104, 0.65);
  background: radial-gradient(circle, rgba(139, 49, 104, 0.1) 0%, transparent 70%);
  pointer-events: none;
  z-index: 9999;
  will-change: transform;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  will-change: transform;
`;

export const Main = styled.main`
  text-align: center;
  max-width: 640px;
  animation: ${float} 7s ease-in-out infinite;
  animation-delay: 0.5s;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
  letter-spacing: 0.01em;
  margin: 0 0 12px;
  animation: ${fadeUp} 0.9s ease both;

  @media (min-width: 50em) {
    font-size: 22px;
  }
`;

export const StrongWord = styled.span<{ $delay: string; $reverse: boolean }>`
  display: inline-block;
  will-change: transform;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.01em;
  background: linear-gradient(
    90deg,
    #ffffff 0%,
    #ffffff 30%,
    #d4a0c0 50%,
    #ffffff 70%,
    #ffffff 100%
  );
  background-size: 300% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textFlow} 5s linear infinite;
  animation-delay: ${({ $delay }) => $delay};
  animation-direction: ${({ $reverse }) => ($reverse ? 'reverse' : 'normal')};

  @media (min-width: 50em) {
    font-size: 42px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--secondary-color);
  line-height: 1.6;
  margin: 0 0 4px;
  animation: ${fadeUp} 0.9s ease 0.2s both;

  @media (min-width: 50em) {
    font-size: 18px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.5rem;
  gap: 14px;
  animation: ${fadeUp} 0.9s ease 0.4s both;
`;

export const MagneticWrapper = styled.div`
  display: flex;
  will-change: transform;
`;

export const Btn = styled.a<{ $callToAction?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 60px;
  border: 1px solid
    ${props => (props.$callToAction ? 'var(--tertiary-color)' : 'rgba(255, 255, 255, 0.4)')};
  width: max-content;
  min-width: 240px;
  padding: 13px 32px;
  background-color: ${props => (props.$callToAction ? 'var(--tertiary-color)' : 'transparent')};
  color: var(--primary-color);
  transition-property: background-color, color, border-color, box-shadow;
  transition-duration: var(--transition-duration);

  &:hover {
    color: var(--primary-color);
    box-shadow: ${props =>
      props.$callToAction
        ? '0 0 28px rgba(139, 49, 104, 0.65)'
        : '0 0 16px rgba(255, 255, 255, 0.15)'};
  }

  ${props =>
    !props.$callToAction &&
    `
    &:hover {
      background-color: var(--primary-color);
      color: #000;
      border-color: var(--primary-color);
    }
  `}
`;
