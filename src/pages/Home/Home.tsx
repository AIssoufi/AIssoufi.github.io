import { Link } from 'react-router-dom';

import { Btn, ButtonContainer, HomePage, Main, Subtitle, Title } from './Home.styled';

export const Home = () => {
  return (
    <HomePage $backgroundImage="/home.jpeg">
      <Main>
        <Title>
          <strong>Développeur full-stack JavaScript</strong>
          <br />
          passioné par l'<strong>UX</strong> et l'<strong>UI</strong> Design
        </Title>
        <Subtitle>Je vous aide à dévelloper vos applications web</Subtitle>
      </Main>
      <ButtonContainer>
        <Btn
          as={Link}
          to="/projects"
          $callToAction
        >
          Voir mes projets
        </Btn>
        <Btn
          as={Link}
          to="/experiences"
        >
          Expériences professionnelles
        </Btn>
      </ButtonContainer>
    </HomePage>
  );
};
