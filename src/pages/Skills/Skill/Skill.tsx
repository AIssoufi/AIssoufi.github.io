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
      {experienceDuration &&
      Number.isInteger(proProjectCount) &&
      Number.isInteger(personalProjectCount) ? (
        <AdditionalInfos>
          <div>
            {experienceDuration ? experienceDuration : 'Pas '} d'expériences professionnelles
          </div>
          <div>
            {proProjectCount ? proProjectCount : 'Pas de'} projet
            {proProjectCount && proProjectCount > 1 ? 's' : ''} professionnel
            {proProjectCount && proProjectCount > 1 ? 's' : ''}
          </div>
          <div>
            {personalProjectCount ? personalProjectCount : 'Pas de'} projet
            {personalProjectCount && personalProjectCount > 1 ? 's' : ''} personnel
            {personalProjectCount && personalProjectCount > 1 ? 's' : ''}
          </div>
        </AdditionalInfos>
      ) : null}
      {tools.length > 0 ? <Tools>{tools.join(', ')}</Tools> : null}
    </Card>
  );
};

export default Skill;
