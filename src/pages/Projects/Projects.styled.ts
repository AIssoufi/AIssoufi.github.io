import styled from 'styled-components';

import { Page } from '../../App/App.styled';

export const ProjectsPage = styled(Page)`
  padding-left: 0;
  padding-right: 0;

  &::before {
    background-image: url(https://firebasestorage.googleapis.com/v0/b/issoufi-v3.appspot.com/o/bg%2Fprojects.jpeg?alt=media&token=715628ce-d543-4024-8876-701547ec8580);
  }

  @media (min-width: 50em) {
    padding-left: var(--page-padding);
    padding-right: var(--page-padding);
  }
`;
