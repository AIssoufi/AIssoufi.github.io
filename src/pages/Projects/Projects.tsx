import Project from './Project';

import freelanceProjectsData from './.data/freelance-projects.json';
import personnalProjectsData from './.data/personnal-projects.json';
import { ProjectsPage } from './Projects.styled';

const BG_IMAGE =
  'https://firebasestorage.googleapis.com/v0/b/issoufi-v3.appspot.com/o/bg%2Fprojects.jpeg?alt=media&token=715628ce-d543-4024-8876-701547ec8580';

export const Projects = () => {
  return (
    <ProjectsPage $backgroundImage={BG_IMAGE}>
      <Project
        title="Projets personnels"
        projects={personnalProjectsData.projects}
      />
      <Project
        title="Projets freelance"
        projects={freelanceProjectsData.projects}
      />
    </ProjectsPage>
  );
};
