import styled from 'styled-components';

export const GroupArticle = styled.section`
  border: var(--card-border);
  border-radius: var(--border-radius);
  background-color: var(--transparent-bg-color);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: var(--card-shadow);
  transition-property: transform, box-shadow;
  transition-duration: var(--transition-duration);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }
`;

export const CompanyHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(139, 49, 104, 0.3);
  background: linear-gradient(135deg, rgba(139, 49, 104, 0.08) 0%, transparent 60%);
  border-radius: var(--border-radius) var(--border-radius) 0 0;
`;

export const CompanyInfo = styled.div`
  padding-left: 12px;
  flex: 1;
`;

export const CompanyName = styled.h2`
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.01em;

  @media (min-width: 50em) {
    font-size: 17px;
  }
`;

export const CompanyMeta = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: var(--secondary-color);
  margin-top: 2px;
`;

/* ── Role list ─────────────────────────────────────────────── */

export const RolesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const RoleItem = styled.li`
  padding: 14px 16px;

  &:not(:first-child) {
    margin-top: 4px;
    padding-top: 14px;
    background: rgba(0, 0, 0, 0.12);
  }
`;

export const RoleHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`;

export const RoleTitleBlock = styled.div`
  flex: 1;
`;

export const RoleName = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1.4;

  @media (min-width: 50em) {
    font-size: 15px;
  }
`;

export const EvolutionTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  font-weight: 600;
  color: rgba(212, 160, 192, 0.95);
  background: rgba(139, 49, 104, 0.18);
  border: 1px solid rgba(139, 49, 104, 0.35);
  border-radius: 20px;
  padding: 2px 8px;
  margin-top: 5px;
  letter-spacing: 0.03em;
`;

export const RoleDateBadge = styled.div`
  flex-shrink: 0;
  font-size: 11px;
  font-weight: 500;
  color: var(--secondary-color);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3px 9px;
  white-space: nowrap;
  margin-top: 2px;
`;

export const RoleDetails = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 10px;
`;
