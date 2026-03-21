import './Experience.css';

import Project from './Project';
import Technologies from './Technologies';

interface ExperienceProps {
  jobName: string;
  entityName: string;
  entityLogoUrl: string;
  contratType: string;
  city: string;
  startDate: string;
  endDate: string;
  duration: string;
  children: React.ReactNode;
}

const Experience = ({
  jobName,
  entityName,
  entityLogoUrl,
  contratType,
  city,
  startDate,
  endDate,
  duration,
  children,
}: ExperienceProps) => {
  return (
    <article className="exp-comp">
      <header className="summary">
        <img
          className="entity-logo"
          src={entityLogoUrl}
          alt={entityName}
        />
        <div className="job-summary">
          <h2 className="job-name">{jobName}</h2>
          <div className="job-details">{`${entityName} · ${contratType} · ${city}`}</div>
          <div className="job-duration">{`${startDate} – ${endDate} · ${duration}`}</div>
        </div>
      </header>
      <main className="details">{children}</main>
    </article>
  );
};

Experience.Technologies = Technologies;
Experience.Project = Project;

export default Experience;
