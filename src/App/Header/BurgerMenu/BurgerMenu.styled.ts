import styled from 'styled-components';

export const Container = styled.div<{ $isOpen: boolean }>`
  cursor: pointer;
  position: relative;
  z-index: 11;

  > svg {
    height: 50px !important;
    width: 50px !important;
    display: block;
  }

  @media (min-width: 50em) {
    display: none;
  }
`;
