import styled from 'styled-components';

import { Page } from '../../App/App.styled';

export const HomePage = styled(Page)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  text-align: center;
  max-width: 640px;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
  letter-spacing: 0.01em;
  margin: 0 0 12px;

  strong {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  @media (min-width: 50em) {
    font-size: 22px;

    strong {
      font-size: 42px;
    }
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--secondary-color);
  line-height: 1.6;
  margin: 0 0 4px;

  @media (min-width: 50em) {
    font-size: 18px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.5rem;
  gap: 12px;

  @media (min-width: 50em) {
    flex-direction: row;
    justify-content: center;
    padding-top: 5rem;
    gap: 16px;
  }
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
  padding: 12px 28px;
  background-color: ${props => (props.$callToAction ? 'var(--tertiary-color)' : 'transparent')};
  color: var(--primary-color);
  transform: scale(1);
  transition-property: transform, background-color, color, border-color, box-shadow;
  transition-duration: var(--transition-duration);

  &:hover {
    transform: scale(1.06);
    color: var(--primary-color);
    box-shadow: ${props =>
      props.$callToAction
        ? '0 0 20px rgba(139, 49, 104, 0.5)'
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
