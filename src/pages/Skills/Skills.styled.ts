import styled from 'styled-components';

import { Page } from '../../App/App.styled';

export const SkillsPage = styled(Page)``;

export const SkillSection = styled.section`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h1`
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;

  @media (min-width: 50em) {
    font-size: 36px;
  }
`;

export const SectionList = styled.main`
  display: grid;
  grid-template-columns: repeat(1, minmax(min-content, 1fr));
  grid-auto-flow: row;
  grid-gap: 10px;

  @media (min-width: 50em) {
    grid-template-columns: repeat(2, minmax(max-content, 1fr));
  }

  @media (min-width: 100em) {
    grid-template-columns: repeat(3, minmax(max-content, 1fr));
  }
`;
