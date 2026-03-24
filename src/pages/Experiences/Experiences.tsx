import Experience from './Experience';
import ExperienceGroup from './ExperienceGroup';
import { BulletItem, BulletList } from './Experience/Experience.styled';

import {
  ExperiencesPage,
  PageHeader,
  PageTitle,
  PeriodEnd,
  PeriodSep,
  PeriodStart,
  Timeline,
  TimelineContent,
  TimelineEntry,
  TimelinePeriod,
} from './Experiences.styled';

const BG_IMAGE = '/experiences.jpeg';

export const Experiences = () => {
  return (
    <ExperiencesPage $backgroundImage={BG_IMAGE}>
      <PageHeader>
        <PageTitle>Expériences</PageTitle>
      </PageHeader>
      <main>
        <Timeline>
          <TimelineEntry>
            <TimelinePeriod>
              <PeriodStart>juin 2021</PeriodStart>
              <PeriodSep>↓</PeriodSep>
              <PeriodEnd>auj.</PeriodEnd>
            </TimelinePeriod>
            <TimelineContent>
              <ExperienceGroup
                entityName="Sewan Groupe"
                entityLogoUrl="/sewan.png"
                contratType="CDI"
                city="Paris (75)"
              >
                <ExperienceGroup.Role
                  jobName="Lead Frontend Engineer — UI Kit Owner & Architect"
                  startDate="août 2021"
                  endDate="Aujourd'hui"
                  duration="4 ans 8 mois"
                  tag="↑ Évolution de poste"
                >
                  Owner et référent technique de l'UI Kit interne Sewan — bibliothèque de composants
                  React distribuée à <strong>~15 équipes produit</strong> via un registre NPM privé.
                  Interlocuteur unique entre les équipes design system, les développeurs
                  consommateurs et la direction technique.
                  <BulletList>
                    <BulletItem>
                      Conception et évolution d'APIs de composants React + TypeScript robustes,
                      documentées sous Storybook, suivant une approche TDD
                    </BulletItem>
                    <BulletItem>
                      Priorisation du backlog, recueil et arbitrage des besoins auprès de ~15
                      équipes
                    </BulletItem>
                    <BulletItem>
                      Accompagnement transverse : onboarding, code review, debug et formation des
                      équipes consommatrices
                    </BulletItem>
                  </BulletList>
                  <ExperienceGroup.Role.Project
                    title="Modernisation complète de la stack technique"
                    state="En production"
                  >
                    Refonte technique de bout en bout menée en solo pour moderniser l'outillage et
                    améliorer significativement l'expérience développeur (DX) :
                    <BulletList>
                      <BulletItem>
                        Storybook v5.3 → v8.6 (migration CSF 2 → CSF 3), Node.js v16 → v22
                      </BulletItem>
                      <BulletItem>
                        Jest → Vitest, Webpack → tsup + Vite (builds sensiblement plus rapides)
                      </BulletItem>
                      <BulletItem>
                        npm + Lerna v4 → pnpm + Lerna v8 ; passage à TypeScript strict
                      </BulletItem>
                      <BulletItem>Refonte intégrale du pipeline CI/CD GitLab</BulletItem>
                    </BulletList>
                  </ExperienceGroup.Role.Project>
                  <ExperienceGroup.Role.Technologies
                    technologies={[
                      'React.js',
                      'TypeScript',
                      'Storybook',
                      'Vite',
                      'tsup',
                      'pnpm',
                      'TDD',
                      'Vitest',
                      'Node.js',
                      'Lerna',
                      'CI GitLab',
                    ]}
                  />
                </ExperienceGroup.Role>

                <ExperienceGroup.Role
                  jobName="Senior Full-Stack Engineer — Core Platform (React, Node.js, GraphQL)"
                  startDate="juin 2021"
                  endDate="Aujourd'hui"
                  duration="4 ans 10 mois"
                >
                  Membre de l'équipe core (3 développeurs) en charge des fondations techniques de{' '}
                  <strong>Sophia Go</strong>, la plateforme métier centrale de Sewan.
                  <BulletList>
                    <BulletItem>
                      Conception de l'architecture front-end transverse : store global, logique
                      métier commune, configuration partagée et librairies internes utilisées par
                      toutes les équipes feature
                    </BulletItem>
                    <BulletItem>
                      Développement full-stack de modules critiques : React/TypeScript côté client,
                      Node.js/GraphQL côté serveur
                    </BulletItem>
                    <BulletItem>
                      Pilotage des évolutions techniques majeures et accompagnement des équipes dans
                      leur adoption
                    </BulletItem>
                  </BulletList>
                  <ExperienceGroup.Role.Project
                    title="friday — BFF GraphQL"
                    technologies={['Node.js', 'GraphQL']}
                  >
                    Conception et développement d'un Backend-For-Frontend GraphQL découplant le
                    front-end des microservices back-end. Simplifie les contrats d'API et réduit le
                    couplage entre les équipes.
                  </ExperienceGroup.Role.Project>
                  <ExperienceGroup.Role.Project
                    title="onboarding-app — Espace client React"
                    technologies={['React.js', 'TypeScript', 'Redux.js']}
                  >
                    Développement from scratch de l'application React d'onboarding client de la
                    plateforme Sophia Go — point d'entrée critique pour les nouveaux clients Sewan.
                  </ExperienceGroup.Role.Project>
                </ExperienceGroup.Role>
              </ExperienceGroup>
            </TimelineContent>
          </TimelineEntry>

          <TimelineEntry>
            <TimelinePeriod>
              <PeriodStart>sept. 2019</PeriodStart>
              <PeriodSep>↓</PeriodSep>
              <PeriodEnd>juin 2021</PeriodEnd>
            </TimelinePeriod>
            <TimelineContent>
              <Experience
                jobName="Full-Stack JavaScript Engineer — React, Node.js, AWS"
                entityName="Wibilong"
                entityLogoUrl="/wibilong.png"
                contratType="CDI"
                city="Paris (75)"
                startDate="sept. 2019"
                endDate="juin 2021"
                duration="1 an 10 mois"
              >
                Développement full-stack end-to-end des solutions SaaS Wibilong (WiService V3,
                WiManager, WiSell), au sein d'une équipe de deux développeurs.
                <BulletList>
                  <BulletItem>
                    Développement de nouvelles fonctionnalités de bout en bout : de la maquette
                    produit à la mise en production, côté front (React, Redux) et back (Node.js,
                    serverless AWS)
                  </BulletItem>
                  <BulletItem>
                    Conception et documentation d'APIs REST sous Swagger ; déploiement via AWS
                    Lambda, API Gateway et CloudFormation
                  </BulletItem>
                  <BulletItem>
                    Maintien en condition opérationnelle (MCO) et résolution de bugs en production
                  </BulletItem>
                </BulletList>
                <Experience.Technologies
                  technologies={[
                    'React.js',
                    'Redux.js',
                    'Node.js',
                    'AWS Lambda',
                    'API Gateway',
                    'CloudFormation',
                    'Elasticsearch',
                    'SQL Server',
                    'Swagger',
                  ]}
                />
              </Experience>
            </TimelineContent>
          </TimelineEntry>

          <TimelineEntry>
            <TimelinePeriod>
              <PeriodStart>juin 2018</PeriodStart>
              <PeriodSep>↓</PeriodSep>
              <PeriodEnd>sept. 2019</PeriodEnd>
            </TimelinePeriod>
            <TimelineContent>
              <Experience
                jobName="Développeur Full-Stack JavaScript — Alternance"
                entityName="Supralog"
                entityLogoUrl="/supralog.png"
                contratType="Alternance"
                city="Antibes (06)"
                startDate="juin 2018"
                endDate="sept. 2019"
                duration="1 an 4 mois"
              >
                <Experience.Project
                  title="MyFFBaD — Espace licencié FFBaD"
                  state="Livré dans les délais"
                  technologies={[
                    'React.js',
                    'Redux.js',
                    'Next.js',
                    'NestJS',
                    'Docker',
                    'Kubernetes',
                    'Google Cloud Platform',
                  ]}
                >
                  En binôme, développement from scratch de l'espace licencié de la{' '}
                  <strong>Fédération Française de Badminton</strong> à partir des maquettes et du
                  cahier des charges — puis conception, implémentation et déploiement de 3
                  micro-services sur GCP.
                </Experience.Project>
                <Experience.Project
                  title="CLARIS — Refonte SI de certification"
                  state="3 sprints livrés"
                  technologies={['React.js', 'Redux.js', 'TypeScript', 'ChartJS']}
                >
                  Au sein d'une équipe de 7 développeurs, participation à la refonte du front-end du
                  SI CLARIS pour <strong>Eurovent Certita Certification SAS</strong>, leader
                  européen de la certification industrielle.
                </Experience.Project>
              </Experience>
            </TimelineContent>
          </TimelineEntry>

          <TimelineEntry>
            <TimelinePeriod>
              <PeriodStart>mai 2017</PeriodStart>
              <PeriodSep>↓</PeriodSep>
              <PeriodEnd>août 2017</PeriodEnd>
            </TimelinePeriod>
            <TimelineContent>
              <Experience
                jobName="Développeur React.js — Stage"
                entityName="Beepeers"
                entityLogoUrl="/beepeers.jpg"
                contratType="Stage"
                city="Valbonne (06)"
                startDate="mai 2017"
                endDate="août 2017"
                duration="4 mois"
              >
                <Experience.Project
                  title="Dream Nation Festival 2017 — Site événementiel"
                  state="Livré dans les délais"
                  technologies={['React.js', 'Redux.js', 'AngularJS']}
                >
                  Conception et réalisation complète d'un site événementiel avec système de
                  réservation et paiement en ligne.
                  <BulletList>
                    <BulletItem>Architecture et maquettes des écrans</BulletItem>
                    <BulletItem>
                      Développement React avec intégration billetterie (Fasticket) et paiement CB
                      (WeezeEvent)
                    </BulletItem>
                    <BulletItem>Maintenance des sites existants en AngularJS</BulletItem>
                  </BulletList>
                </Experience.Project>
              </Experience>
            </TimelineContent>
          </TimelineEntry>
        </Timeline>
      </main>
    </ExperiencesPage>
  );
};
