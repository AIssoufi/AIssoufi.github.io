import Project from './Project';

import freelanceProjectsData from './.data/freelance-projects.json';
import personnalProjectsData from './.data/personnal-projects.json';
import { ProjectsPage } from './Projects.styled';

const BG_IMAGE = '/projects.jpeg';

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
