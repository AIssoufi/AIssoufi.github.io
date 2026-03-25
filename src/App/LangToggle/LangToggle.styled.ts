import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9;
  display: flex;
  flex-direction: column;
  padding: 4px;
  gap: 4px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    border-color: rgba(139, 49, 104, 0.4);
    box-shadow: 0 4px 28px rgba(139, 49, 104, 0.2);
  }
`;

export const Indicator = styled.div<{ $index: number }>`
  position: absolute;
  left: 4px;
  right: 4px;
  height: 32px;
  border-radius: 24px;
  background: rgba(139, 49, 104, 0.35);
  border: 1px solid rgba(139, 49, 104, 0.55);
  box-shadow: 0 0 10px rgba(139, 49, 104, 0.25);
  transform: translateY(${({ $index }) => $index * 36}px);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;
`;

export const Btn = styled.button<{ $active: boolean }>`
  position: relative;
  z-index: 1;
  background: none;
  border: none;
  cursor: pointer;
  width: 36px;
  height: 32px;
  border-radius: 24px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: ${({ $active }) => ($active ? 'rgba(212, 160, 192, 1)' : 'rgba(255, 255, 255, 0.35)')};
  transition: color 0.25s ease;

  &:hover {
    color: ${({ $active }) => ($active ? 'rgba(212, 160, 192, 1)' : 'rgba(255, 255, 255, 0.7)')};
  }
`;
