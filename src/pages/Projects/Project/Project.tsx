import { useState } from 'react';

// SVG
import LikeIcon from './icons/heart.svg?react';
import NextIcon from './icons/next.svg?react';
import PreviousIcon from './icons/previous.svg?react';

import {
  CtrlItem,
  ImageContainer,
  LikeContainer,
  LikeCounter,
  NavCtrl,
  ProjectGrid,
  ProjectInfo,
  ProjectItem,
  ProjectName,
  ProjectTools,
  ProjectType,
  Section,
  SectionHeader,
  SectionTitle,
  Thumbnail,
} from './Project.styled';

interface ProjectItemData {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
  tools: string[];
  likeCount: number;
  isLikedByOwnUser: boolean;
}

interface ProjectProps {
  title?: string;
  projects?: ProjectItemData[];
}

const Project = ({ title, projects = [] }: ProjectProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [displayAllPages, setDisplayAllPages] = useState(false);
  const step = 3;

  const handleNextPage = () => {
    const nextPage = currentPage + step;
    setCurrentPage(nextPage >= projects.length ? step : nextPage);
  };

  const handlePreviousPage = () => {
    const previousPage = currentPage - step;
    setCurrentPage(previousPage <= 0 ? 0 : previousPage);
  };

  const handleDisplayAllPage = () => {
    setDisplayAllPages(!displayAllPages);
  };

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <NavCtrl>
          <CtrlItem onClick={handleDisplayAllPage}>
            {displayAllPages ? 'Afficher moins' : `Tout afficher (${projects.length})`}
          </CtrlItem>
          {displayAllPages ? null : (
            <CtrlItem
              as={PreviousIcon as any}
              onClick={handlePreviousPage}
            />
          )}
          {displayAllPages ? null : (
            <CtrlItem
              as={NextIcon as any}
              onClick={handleNextPage}
            />
          )}
        </NavCtrl>
      </SectionHeader>
      <ProjectGrid $displayAll={displayAllPages}>
        {(displayAllPages ? projects : projects.slice(currentPage, currentPage + step)).map(
          ({ id, name, type, imageUrl, tools, likeCount, isLikedByOwnUser }) => (
            <ProjectItem
              key={id}
              $displayAll={displayAllPages}
            >
              <ImageContainer>
                <Thumbnail
                  src={imageUrl}
                  alt={name}
                />
                <LikeContainer>
                  <LikeCounter>{likeCount}</LikeCounter>
                  <LikeIcon className={`like ${isLikedByOwnUser ? 'isLiked' : ''}`} />
                </LikeContainer>
              </ImageContainer>
              <ProjectInfo>
                <ProjectName>{name}</ProjectName>
                <ProjectType>{type}</ProjectType>
                <ProjectTools>{tools.join(' · ')}</ProjectTools>
              </ProjectInfo>
            </ProjectItem>
          ),
        )}
      </ProjectGrid>
    </Section>
  );
};

export default Project;
