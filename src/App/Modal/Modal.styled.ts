import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0 0 0 / 85%);
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  background-color: var(--transparent-bg-color);
  border-radius: var(--border-radius);
  padding: 10px;
  margin: 7px;
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CloseButton = styled.button`
  color: white;
  background-color: transparent;
  border-radius: 60px;
  border-width: 1px;
  border-style: solid;
  width: max-content;
  height: max-content;
`;

export const ModalBody = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;

  p {
    margin: 0 0 20px 0;
    text-align: center;
  }
`;

export const ConfirmButton = styled.button`
  color: var(--primary-color);
  background-color: var(--tertiary-color);
  border-color: var(--tertiary-color);
  padding: 10px 20px;
  border-radius: 60px;
  border-width: 1px;
  border-style: solid;
  width: max-content;
  transform: scale(1);
  transition-property: color, border-color, transform, background-color;
  transition-duration: var(--transition-duration);

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;
