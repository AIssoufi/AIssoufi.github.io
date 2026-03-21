import { useState } from 'react';

// SVG
import LikeIcon from './icons/heart.svg?react';
import NextIcon from './icons/next.svg?react';
import PreviousIcon from './icons/previous.svg?react';

import './Project.css';

interface ProjectItem {
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
  projects?: ProjectItem[];
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
    <section className="project-comp">
      <header>
        <h1 className="title">{title}</h1>
        <nav className="nav-ctrl">
          <button
            className="ctrl-item"
            onClick={handleDisplayAllPage}
          >
            {displayAllPages ? 'Afficher moins' : `Tout afficher (${projects.length})`}
          </button>
          {displayAllPages ? null : (
            <PreviousIcon
              className="ctrl-item"
              onClick={handlePreviousPage}
            />
          )}
          {displayAllPages ? null : (
            <NextIcon
              className="ctrl-item"
              onClick={handleNextPage}
            />
          )}
        </nav>
      </header>
      <main className={displayAllPages ? 'display-all' : ''}>
        {(displayAllPages ? projects : projects.slice(currentPage, currentPage + step)).map(
          ({ id, name, type, imageUrl, tools, likeCount, isLikedByOwnUser }) => (
            <div
              key={id}
              className="project-item"
            >
              <header className="image-container">
                <img
                  className="thumbnail"
                  src={imageUrl}
                  alt={name}
                />
                <div className="like-container">
                  <span className="counter">{likeCount}</span>
                  <LikeIcon className={`like ${isLikedByOwnUser ? 'isLiked' : ''}`} />
                </div>
              </header>
              <main>
                <div className="name">{name}</div>
                <div className="type">{type}</div>
                <div className="tools">{tools.join(' · ')}</div>
              </main>
            </div>
          ),
        )}
      </main>
    </section>
  );
};

export default Project;
