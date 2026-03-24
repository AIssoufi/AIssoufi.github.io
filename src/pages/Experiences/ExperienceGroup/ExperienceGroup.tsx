import Project from '../Experience/Project';
import Technologies from '../Experience/Technologies';
import { EntityLogo } from '../Experience/Experience.styled';

import {
  CompanyHeader,
  CompanyInfo,
  CompanyMeta,
  CompanyName,
  EvolutionTag,
  GroupArticle,
  RoleDateBadge,
  RoleDetails,
  RoleHeader,
  RoleItem,
  RoleName,
  RolesList,
  RoleTitleBlock,
} from './ExperienceGroup.styled';

interface RoleProps {
  jobName: string;
  startDate: string;
  endDate: string;
  duration: string;
  tag?: string;
  children: React.ReactNode;
}

const Role = ({ jobName, startDate, endDate, duration, tag, children }: RoleProps) => (
  <RoleItem>
    <RoleHeader>
      <RoleTitleBlock>
        <RoleName>{jobName}</RoleName>
        {tag && <EvolutionTag>{tag}</EvolutionTag>}
      </RoleTitleBlock>
      <RoleDateBadge>{`${startDate} – ${endDate} · ${duration}`}</RoleDateBadge>
    </RoleHeader>
    <RoleDetails>{children}</RoleDetails>
  </RoleItem>
);

Role.Project = Project;
Role.Technologies = Technologies;

interface ExperienceGroupProps {
  entityName: string;
  entityLogoUrl: string;
  contratType: string;
  city: string;
  children: React.ReactNode;
}

const ExperienceGroup = ({
  entityName,
  entityLogoUrl,
  contratType,
  city,
  children,
}: ExperienceGroupProps) => (
  <GroupArticle>
    <CompanyHeader>
      <EntityLogo
        src={entityLogoUrl}
        alt={entityName}
      />
      <CompanyInfo>
        <CompanyName>{entityName}</CompanyName>
        <CompanyMeta>{`${contratType} · ${city}`}</CompanyMeta>
      </CompanyInfo>
    </CompanyHeader>
    <RolesList>{children}</RolesList>
  </GroupArticle>
);

ExperienceGroup.Role = Role;

export default ExperienceGroup;
