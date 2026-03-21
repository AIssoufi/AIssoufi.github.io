import './Skill.css';

interface SkillProps {
  name: string;
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
    <div className="skill-comp">
      <header>
        <h3 className="name">{name}</h3>
        <div className="valuation">
          {[1, 2, 3, 4, 5].map(index => (
            <span className={valuationValue && index <= valuationValue ? 'fill' : ''}>&#9733;</span>
          ))}
        </div>
      </header>
      {experienceDuration &&
      Number.isInteger(proProjectCount) &&
      Number.isInteger(personalProjectCount) ? (
        <main className="additional-infos">
          <div>
            {experienceDuration ? experienceDuration : 'Pas '} d’expériences professionnelles
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
        </main>
      ) : null}
      {tools.length > 0 ? <footer className="tools">{tools.join(', ')}</footer> : null}
    </div>
  );
};

export default Skill;
