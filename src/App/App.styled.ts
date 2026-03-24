import styled from 'styled-components';

export const WebApp = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'main';
  grid-template-rows: max-content 1fr;
  grid-template-columns: 1fr;
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;

  > header {
    padding-left: var(--page-padding);
    padding-right: var(--page-padding);
    grid-area: header;
  }
`;

export const Page = styled.section<{ $backgroundImage?: string }>`
  padding: 16px var(--page-padding) 0;
  position: relative;
  grid-area: main;

  &::before {
    content: '';
    display: block;
    position: fixed;
    z-index: -2;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: ${props =>
      props.$backgroundImage ? `url(${props.$backgroundImage})` : 'none'};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  &::after {
    content: '';
    display: block;
    position: fixed;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0 0 0 / 80%);
  }
`;
