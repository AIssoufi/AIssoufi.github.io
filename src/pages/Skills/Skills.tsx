import Skill from './Skill';

import { SectionList, SectionTitle, SkillSection, SkillsPage } from './Skills.styled';

const BG_IMAGE = '/skills.jpg';

export const Skills = () => {
  return (
    <SkillsPage $backgroundImage={BG_IMAGE}>
      <SkillSection>
        <SectionTitle>Compétences web</SectionTitle>
        <SectionList>
          <Skill
            name="Front-end"
            experienceDuration="5 ans et 5 mois"
            proProjectCount={12}
            personalProjectCount={5}
            tools={['HTML 5', 'CSS 3', 'JavaScript', 'React.js', 'Redux.js']}
            valuationValue={5}
          />
          <Skill
            name="Back-end"
            experienceDuration="2 ans et 10 mois"
            proProjectCount={3}
            personalProjectCount={2}
            tools={['JavaScript', 'Node.js', 'Express.js', 'Nest.js', 'Docker', 'SQL']}
            valuationValue={5}
          />
          <Skill
            name="Méthode de gestion de projet"
            experienceDuration="3 ans et 2 mois"
            proProjectCount={6}
            personalProjectCount={2}
            tools={['Scrum']}
            valuationValue={4}
          />
          <Skill
            name="UI Design (en cours)"
            experienceDuration="Pas"
            proProjectCount={0}
            personalProjectCount={4}
            tools={['Proyotyping', 'Typography', 'Layout', 'Colors', 'Spacing', 'patterns']}
            valuationValue={2}
          />
          <Skill
            name="UX Design (en cours)"
            experienceDuration="Pas"
            proProjectCount={0}
            personalProjectCount={0}
            tools={['wireframing']}
            valuationValue={1}
          />
        </SectionList>
      </SkillSection>
      <SkillSection>
        <SectionTitle>Autres compétences</SectionTitle>
        <SectionList>
          <Skill
            name="Programmation orienté objet"
            valuationValue={4}
          />
          <Skill
            name="UML"
            valuationValue={4}
          />
          <Skill
            name="Design patterns"
            valuationValue={4}
          />
        </SectionList>
      </SkillSection>
    </SkillsPage>
  );
};
