import styled from 'styled-components';

import { Page } from '../../App/App.styled';

export const ExperiencesPage = styled(Page)`
  &::before {
    background-image: url(https://firebasestorage.googleapis.com/v0/b/issoufi-v3.appspot.com/o/bg%2Fexperiences.jpeg?alt=media&token=1c6b8b2b-9613-42ad-8ae7-2b835c4eaf52);
  }
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 10px;

  @media (min-width: 50em) {
    font-size: 36px;
  }
`;
