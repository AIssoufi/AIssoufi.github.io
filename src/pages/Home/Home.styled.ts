import styled from 'styled-components';

import { Page } from '../../App/App.styled';

export const HomePage = styled(Page)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    background-image: url(https://firebasestorage.googleapis.com/v0/b/issoufi-v3.appspot.com/o/bg%2Fhome.jpeg?alt=media&token=5db53a4d-725e-428e-bcd4-df46ce477c56);
  }
`;

export const Main = styled.main`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;

  strong {
    font-size: 24px;
    font-weight: 700;
  }

  @media (min-width: 50em) {
    font-size: 24px;

    strong {
      font-size: 36px;
    }
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;

  @media (min-width: 50em) {
    padding-top: 10rem;
  }
`;

export const Btn = styled.a<{ $callToAction?: boolean }>`
  display: ${props => (props.$callToAction ? 'flex' : 'block')};
  font-size: 14px;
  font-weight: 400;
  border-radius: 60px;
  border: 1px solid
    ${props => (props.$callToAction ? 'var(--tertiary-color)' : 'var(--primary-color)')};
  width: max-content;
  padding: 10px 20px;
  background-color: ${props => (props.$callToAction ? 'var(--tertiary-color)' : 'transparent')};
  color: var(--primary-color);
  transform: scale(1);
  transition-property: transform, background-color, color, border-color;
  transition-duration: var(--transition-duration);
  margin-bottom: ${props => (props.$callToAction ? '20px' : '0')};

  &:hover {
    transform: scale(1.15);
  }

  ${props =>
    !props.$callToAction &&
    `
    &:hover {
      background-color: var(--primary-color);
      color: var(--tertiary-color);
    }
  `}
`;
