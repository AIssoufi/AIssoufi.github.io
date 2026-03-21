import Experience from './Experience';

import { ExperiencesPage, PageTitle } from './Experiences.styled';

const BG_IMAGE =
  'https://firebasestorage.googleapis.com/v0/b/issoufi-v3.appspot.com/o/bg%2Fexperiences.jpeg?alt=media&token=1c6b8b2b-9613-42ad-8ae7-2b835c4eaf52';

export const Experiences = () => {
  return (
    <ExperiencesPage $backgroundImage={BG_IMAGE}>
      <header>
        <PageTitle>Expériences</PageTitle>
      </header>
      <main>
        <Experience
          jobName="Développeur full-stack JavaScript"
          entityName="Wibilong"
          entityLogoUrl="https://firebasestorage.googleapis.com/v0/b/issoufi-v3.appspot.com/o/experiences%2Flogos%2Fwibilong.png?alt=media&token=b2dd8cdf-9da9-4713-8719-f27647aa2f61"
          contratType="CDI"
          city="Paris (75)"
          startDate="sept. 2019"
          endDate="Aujourd'hui"
          duration="1 an et 5 mois"
        >
          Au sein de l'équipe JS composée de deux développeurs (un lead dev et moi), je suis chargé
          de réaliser les nouvelles fonctionnalités (front et back) de WiService V3, WiManager et
          WiSell (solutions SaaS de Wibilong) :<br />
          - je développe les nouvelles features en réalisant dans un premier temps, les différentes
          pages à partir des maquettes fourni par l'équipe produit. En suite, j'implémente (et/ou
          utilise) les services (API node.js et severless app) nécessaire au fonctionnement des
          features. En parallèle, je documente les services avec Swagger
          <br />
          - je fais du bugfixes et du maintien en condition opérationnel (MCO) divers
          <Experience.Technologies
            technologies={[
              'React.js',
              'Redux.js',
              'Node.js',
              'AWS (S3, Lambda, API Gateway, CloudFormation)',
              'Elasticsearch',
              'SQL Server',
              'Swagger',
            ]}
          />
        </Experience>

        <Experience
          jobName="Développeur full-stack JavaScript"
          entityName="Supralog"
          entityLogoUrl="https://firebasestorage.googleapis.com/v0/b/issoufi-v3.appspot.com/o/experiences%2Flogos%2Fsupralog.png?alt=media&token=d202bebf-a943-4059-b975-6b9ae151c213"
          contratType="Contrat en alternance"
          city="Antibes (06)"
          startDate="juin 2018"
          endDate="sept. 2019"
          duration="1 an et 4 mois"
        >
          <Experience.Project title="Formation React et ateliers UX">
            - avant de commencer mon projet d'alternance, j'ai suivi une formation React en petit
            groupe pendant une semaine à plein temps.
            <br />- tous les jeudis, je participais à l'atelier UX organisé en interne par Supralog.
          </Experience.Project>
          <Experience.Project
            title="Projet MyFFBaD"
            state="Livré dans les délais"
            technologies={[
              'React.js',
              'Redux.js',
              'Node.js',
              'AWS (S3, Lambda, API Gateway, CloudFormation)',
              'Elasticsearch',
              'SQL Server',
              'Swagger',
            ]}
          >
            Au sein d'une équipe de deux développeurs, j'ai été chargé dans un premier temps de
            développer from scratch les pages front de l'espace licencié de la Fédération Française
            de Badminton (FFBaD) à partir des maquettes et du cahier de charges. Dans un second
            temps, j'ai rejoint le développeur back afin d'implémenter 3 micros-services et les
            déployer.
          </Experience.Project>
          <Experience.Project
            title="Projet CLARIS"
            state="3 sprints livrés à la fin de l'alternance"
            technologies={['React.js', 'Redux.js', 'ComposeJS', 'Styled-components']}
          >
            Dans une équipe de sept développeurs, j'ai participé à la refonte de la partie front du
            système d'information nommé CLARIS. C'est un SI spécialement conçu pour le leader
            européen de la certification (Eurovent Certita Certification SAS).
          </Experience.Project>
        </Experience>

        <Experience
          jobName="Développeur front-end JavaScript"
          entityName="Beepeers"
          entityLogoUrl="https://firebasestorage.googleapis.com/v0/b/issoufi-v3.appspot.com/o/experiences%2Flogos%2Fbeepeers.jpg?alt=media&token=14971955-d8f6-4e32-8a6a-c262e75e8974"
          contratType="Stage"
          city="Valbonne (06)"
          startDate="mai 2017"
          endDate="août 2017"
          duration="4 mois"
        >
          <Experience.Project title="Formation React et Redux">
            j'ai appris React.js et Redux.js durant deux semaines sous la supervision de mon maître
            de stage (un enseignant de Polytech Nice)
          </Experience.Project>
          <Experience.Project
            title="Projet DreamNation"
            state="Livré dans les délais"
            technologies={['React.js', 'Redux.js', 'Angulars.js']}
          >
            Au sein d'une équipe de deux développeurs (mon maître de stage et moi), j'ai été chargé
            de développer la partie front du site dreamnation.fr
            <br />
            - j'ai réalisé la maquette (UI Design) et développé le site dreamnation.fr en React.js
            <br />
            - j'ai intégré une solution de paiement (WEEZEVENT) et de réservation de billet
            (Fasticket)
            <br />- j'ai fait du bugfixes sur les autres sites (festival-crossover.com,
            lagedordurapfrancais.fr, mogafestival.com, mamafestival.com, etc.)
          </Experience.Project>
        </Experience>
      </main>
    </ExperiencesPage>
  );
};
