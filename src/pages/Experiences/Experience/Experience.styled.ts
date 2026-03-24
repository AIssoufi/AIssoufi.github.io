import styled from 'styled-components';

export const Article = styled.article`
  border: var(--card-border);
  border-radius: var(--border-radius);
  background-color: var(--transparent-bg-color);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: var(--card-shadow);
  transition-property: transform, box-shadow;
  transition-duration: var(--transition-duration);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }
`;

export const EntityLogo = styled.img`
  height: 52px;
  width: 52px;
  object-fit: cover;
  border-radius: var(--border-radius-sm);
  border: var(--card-border);
`;

export const Summary = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const JobSummary = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`;

export const JobName = styled.h2`
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.01em;

  @media (min-width: 50em) {
    font-size: 17px;
  }
`;

export const JobDetails = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--secondary-color);
  margin-top: 2px;
`;

export const JobDuration = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: var(--secpndary-dark-color);
  margin-top: 2px;
`;

export const Details = styled.main`
  font-size: 14px;
  font-weight: 400;
  margin-top: 12px;
  position: relative;
  line-height: 1.6;
`;

export const TechnologiesFooter = styled.footer`
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);

  .title {
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--secpndary-dark-color);
  }
`;
