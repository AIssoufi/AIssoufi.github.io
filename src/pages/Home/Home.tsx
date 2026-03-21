import { Link } from 'react-router-dom';

import { Btn, ButtonContainer, HomePage, Main, Subtitle, Title } from './Home.styled';

const BG_IMAGE =
  'https://firebasestorage.googleapis.com/v0/b/issoufi-v3.appspot.com/o/bg%2Fhome.jpeg?alt=media&token=5db53a4d-725e-428e-bcd4-df46ce477c56';

export const Home = () => {
  return (
    <HomePage $backgroundImage={BG_IMAGE}>
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
