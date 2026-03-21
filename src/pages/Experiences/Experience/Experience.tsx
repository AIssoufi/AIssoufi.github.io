import Project from './Project';
import Technologies from './Technologies';

import {
  Article,
  Details,
  EntityLogo,
  JobDetails,
  JobDuration,
  JobName,
  JobSummary,
  Summary,
} from './Experience.styled';

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
    <Article>
      <Summary>
        <EntityLogo
          src={entityLogoUrl}
          alt={entityName}
        />
        <JobSummary>
          <JobName>{jobName}</JobName>
          <JobDetails>{`${entityName} · ${contratType} · ${city}`}</JobDetails>
          <JobDuration>{`${startDate} – ${endDate} · ${duration}`}</JobDuration>
        </JobSummary>
      </Summary>
      <Details>{children}</Details>
    </Article>
  );
};

Experience.Technologies = Technologies;
Experience.Project = Project;

export default Experience;
