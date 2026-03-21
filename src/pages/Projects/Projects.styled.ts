import styled from 'styled-components';

import { Page } from '../../App/App.styled';

export const ProjectsPage = styled(Page)`
  padding-left: 0;
  padding-right: 0;

  @media (min-width: 50em) {
    padding-left: var(--page-padding);
    padding-right: var(--page-padding);
  }
`;
