import { useTranslation } from 'react-i18next';

import Skill from './Skill';

import { SectionList, SectionTitle, SkillSection, SkillsPage } from './Skills.styled';

const BG_IMAGE = '/skills.jpg';

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <SkillsPage $backgroundImage={BG_IMAGE}>
      <SkillSection>
        <SectionTitle>{t('skills.webTitle')}</SectionTitle>
        <SectionList>
          <Skill
            name={t('skills.frontend')}
            experienceDuration={t('skills.frontendDuration')}
            proProjectCount={12}
            personalProjectCount={5}
            tools={['HTML 5', 'CSS 3', 'JavaScript', 'React.js', 'Redux.js']}
            valuationValue={5}
          />
          <Skill
            name={t('skills.backend')}
            experienceDuration={t('skills.backendDuration')}
            proProjectCount={3}
            personalProjectCount={2}
            tools={['JavaScript', 'Node.js', 'Express.js', 'Nest.js', 'Docker', 'SQL']}
            valuationValue={5}
          />
          <Skill
            name={t('skills.projectManagement')}
            experienceDuration={t('skills.projectManagementDuration')}
            proProjectCount={6}
            personalProjectCount={2}
            tools={['Scrum']}
            valuationValue={4}
          />
          <Skill
            name={t('skills.uiDesign')}
            proProjectCount={0}
            personalProjectCount={4}
            tools={['Proyotyping', 'Typography', 'Layout', 'Colors', 'Spacing', 'patterns']}
            valuationValue={2}
          />
          <Skill
            name={t('skills.uxDesign')}
            proProjectCount={0}
            personalProjectCount={0}
            tools={['wireframing']}
            valuationValue={1}
          />
        </SectionList>
      </SkillSection>
      <SkillSection>
        <SectionTitle>{t('skills.othersTitle')}</SectionTitle>
        <SectionList>
          <Skill
            name={t('skills.oop')}
            valuationValue={4}
          />
          <Skill
            name={t('skills.uml')}
            valuationValue={4}
          />
          <Skill
            name={t('skills.designPatterns')}
            valuationValue={4}
          />
        </SectionList>
      </SkillSection>
    </SkillsPage>
  );
};
