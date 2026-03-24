import styled from 'styled-components';

/* ── Group wrapper — participates directly in Timeline ─────── */

export const GroupArticle = styled.section`
  position: relative;
  padding-left: 22px; /* mobile: indent past the dot */
  margin-bottom: 20px;

  /* mobile dot (one dot per company group) */
  &::before {
    content: '';
    position: absolute;
    left: -1px; /* centres 12px dot on the 2px line at left:5px */
    top: 18px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(139, 49, 104, 0.85);
    border: 2px solid rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 10px rgba(139, 49, 104, 0.55);
    z-index: 1;
  }

  @media (min-width: 50em) {
    padding-left: 0;

    &::before {
      display: none;
    }
  }
`;

/* ── Role list ─────────────────────────────────────────────── */

export const RolesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/* ── Role item — each role is its own timeline row ─────────── */

export const RoleItem = styled.li`
  position: relative;

  /* mobile dot per role */
  &::before {
    content: '';
    position: absolute;
    left: -28px; /* 22px padding + 6px (half of 12px dot) */
    top: 14px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(139, 49, 104, 0.65);
    border: 2px solid rgba(255, 255, 255, 0.5);
    z-index: 1;
  }

  @media (min-width: 50em) {
    display: grid;
    grid-template-columns: 90px 1fr;

    &::before {
      display: none;
    }
  }
`;

/* ── Period column — aligns with main timeline ─────────────── */

export const RolePeriodCol = styled.div`
  display: none;

  @media (min-width: 50em) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 18px;
    padding-top: 5px;
    position: relative;
    font-size: 10px;
    letter-spacing: 0.02em;
    white-space: nowrap;

    /* dot on main timeline line */
    &::after {
      content: '';
      position: absolute;
      right: -6px; /* centres 12px dot on the line at 90px */
      top: 5px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(139, 49, 104, 0.85);
      border: 2px solid rgba(255, 255, 255, 0.8);
      box-shadow: 0 0 10px rgba(139, 49, 104, 0.55);
      z-index: 1;
    }
  }
`;

export const RolePeriodStart = styled.span`
  font-weight: 700;
  color: rgba(212, 160, 192, 0.85);
  line-height: 1.5;
`;

export const RolePeriodSep = styled.span`
  color: rgba(255, 255, 255, 0.2);
  line-height: 1.2;
`;

export const RolePeriodEnd = styled.span`
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.5;
`;

/* ── Role content — the card ────────────────────────────────── */

export const RoleContent = styled.div`
  min-width: 0;
  border: var(--card-border);
  border-radius: var(--border-radius);
  background-color: var(--transparent-bg-color);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: var(--card-shadow);
  padding: 14px 16px;
  transition-property: transform, box-shadow;
  transition-duration: var(--transition-duration);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }

  @media (min-width: 50em) {
    margin-left: 20px;
  }
`;

export const RoleHeader = styled.div`
  margin-bottom: 10px;
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

export const RoleDetails = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  margin-top: 10px;
`;
