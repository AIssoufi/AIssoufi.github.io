import styled from 'styled-components';

export const Card = styled.div`
  border: none;
  border-radius: var(--border-radius);
  background-color: var(--transparent-bg-color);
  padding: 10px;
  margin-bottom: 10px;
`;

export const CardHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
`;

export const Valuation = styled.div`
  font-size: 18px;
  color: var(--secpndary-dark-color);
`;

export const Star = styled.span<{ $filled: boolean }>`
  color: ${props => (props.$filled ? 'var(--tertiary-color)' : 'inherit')};
`;

export const AdditionalInfos = styled.main`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
`;

export const Tools = styled.footer`
  font-size: 14px;
  font-weight: 400;
`;
