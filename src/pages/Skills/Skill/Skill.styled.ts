import styled from 'styled-components';

export const Card = styled.div`
  border: var(--card-border);
  border-radius: var(--border-radius);
  background-color: var(--transparent-bg-color);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 14px 16px;
  margin-bottom: 0;
  box-shadow: var(--card-shadow);
  transition-property: transform, box-shadow, border-color;
  transition-duration: var(--transition-duration);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 255, 255, 0.18);
  }
`;

export const CardHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 6px;
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.01em;
  margin-right: 10px;
`;

export const Valuation = styled.div`
  font-size: 16px;
  color: var(--secpndary-dark-color);
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Star = styled.span<{ $filled: boolean }>`
  color: ${props => (props.$filled ? 'var(--tertiary-color)' : 'rgba(255,255,255,0.2)')};
  font-size: 14px;
`;

export const AdditionalInfos = styled.main`
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--secondary-color);
  line-height: 1.5;
`;

export const Tools = styled.footer`
  font-size: 13px;
  font-weight: 400;
  color: var(--secpndary-dark-color);
  padding-top: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;
