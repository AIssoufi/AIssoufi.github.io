import styled from 'styled-components';

export const Section = styled.section`
  height: max-content;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
  padding-left: var(--page-padding);
  padding-right: var(--page-padding);

  @media (min-width: 50em) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 10px;

  @media (min-width: 50em) {
    font-size: 36px;
  }
`;

export const NavCtrl = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CtrlItem = styled.button`
  margin: 0 10px 0 0;
  border: none;
  color: var(--primary-color);
  background-color: transparent;
  font-size: 18px;

  &:first-child {
    order: 3;
  }

  &:hover {
    stroke: var(--tertiary-color);
    color: var(--tertiary-color);
    cursor: pointer;
    transform: none;
  }

  @media (min-width: 50em) {
    margin: 0 0 0 10px;
  }
`;

export const ProjectGrid = styled.main<{ $displayAll: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 100vw;
  white-space: nowrap;
  overflow-x: auto;

  ${props =>
    props.$displayAll &&
    `
    display: grid;
    grid-template-columns: repeat(1, minmax(min-content, 1fr));
    grid-auto-flow: row;
    row-gap: 5px;

    @media (min-width: 50em) {
      grid-template-columns: repeat(2, minmax(min-content, 1fr));
    }

    @media (min-width: 100em) {
      grid-template-columns: repeat(3, minmax(min-content, 1fr));
    }
  `}
`;

export const ProjectItem = styled.div<{ $displayAll?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 5px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;

  &:first-child {
    padding-left: ${props => (props.$displayAll ? '0' : 'var(--page-padding)')};
  }

  &:last-child {
    padding-right: ${props => (props.$displayAll ? '0' : 'var(--page-padding)')};
  }

  @media (min-width: 50em) {
    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }
`;

export const ImageContainer = styled.header`
  height: 260px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition-property: object-position;
  transition-duration: var(--transition-duration);

  ${ProjectItem}:hover & {
    object-position: center;
  }
`;

export const LikeContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LikeCounter = styled.span`
  margin-right: 10px;
  font-size: 14px;
`;

export const ProjectInfo = styled.main`
  margin-top: 10px;
  padding-left: 10px;
`;

export const ProjectName = styled.div`
  font-size: 18px;
  font-weight: 800;
`;

export const ProjectType = styled.div`
  font-size: 14px;
`;

export const ProjectTools = styled.div`
  font-size: 14px;
`;
