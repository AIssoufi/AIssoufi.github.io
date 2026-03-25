import { useTranslation } from 'react-i18next';

import { AdditionalInfos, Card, CardHeader, Name, Star, Tools, Valuation } from './Skill.styled';

interface SkillProps {
  name?: string;
  experienceDuration?: string;
  proProjectCount?: number;
  personalProjectCount?: number;
  tools?: string[];
  valuationValue?: number;
}

const Skill = ({
  name,
  experienceDuration,
  proProjectCount,
  personalProjectCount,
  tools = [],
  valuationValue,
}: SkillProps) => {
  const { t } = useTranslation();

  const showInfo = Number.isInteger(proProjectCount) && Number.isInteger(personalProjectCount);

  const proText =
    proProjectCount === 0
      ? t('skills.noProProjects')
      : t('skills.proProjects', { count: proProjectCount });

  const personalText =
    personalProjectCount === 0
      ? t('skills.noPersonalProjects')
      : t('skills.personalProjects', { count: personalProjectCount });

  return (
    <Card>
      <CardHeader>
        <Name>{name}</Name>
        <Valuation>
          {[1, 2, 3, 4, 5].map(index => (
            <Star
              key={index}
              $filled={!!valuationValue && index <= valuationValue}
            >
              &#9733;
            </Star>
          ))}
        </Valuation>
      </CardHeader>
      {showInfo && (
        <AdditionalInfos>
          <div>
            {experienceDuration
              ? `${experienceDuration} ${t('skills.experienceSuffix')}`
              : t('skills.noExperience')}
          </div>
          <div>{proText}</div>
          <div>{personalText}</div>
        </AdditionalInfos>
      )}
      {tools.length > 0 && <Tools>{tools.join(', ')}</Tools>}
    </Card>
  );
};

export default Skill;
