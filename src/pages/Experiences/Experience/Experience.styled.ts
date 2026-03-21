import styled from 'styled-components';

export const Article = styled.article`
  border: none;
  border-radius: var(--border-radius);
  background-color: var(--transparent-bg-color);
  padding: 10px;
  margin-bottom: 10px;
`;

export const EntityLogo = styled.img`
  height: 55px;
  width: 55px;
  object-fit: cover;
  border-radius: var(--border-radius);
`;

export const Summary = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const JobSummary = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const JobName = styled.h2`
  margin: 0;
  font-size: 15px;
  font-weight: 700;

  @media (min-width: 50em) {
    font-size: 17px;
  }
`;

export const JobDetails = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export const JobDuration = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: var(--secondary-color);
`;

export const Details = styled.main`
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;
  position: relative;
`;

export const TechnologiesFooter = styled.footer`
  margin-top: 10px;

  .title {
    font-weight: 700;
    color: var(--secpndary-dark-color);
  }
`;
