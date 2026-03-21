import { TechnologiesFooter } from '../Experience.styled';

interface TechnologiesProps {
  technologies: string[];
}

const Technologies = ({ technologies }: TechnologiesProps) => (
  <TechnologiesFooter>
    <div className="title">Technologies que j'utilise</div>
    {technologies.slice(0, technologies.length - 1).join(', ')} et{' '}
    {technologies[technologies.length - 1]}
  </TechnologiesFooter>
);

export default Technologies;
