import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const FEATURES = [
  {
    title: 'Boards, your way',
    description: 'Kanban lists and cards, with projects, milestones, tags, and custom fields for the structure a plain to-do list doesn’t give you.',
  },
  {
    title: 'Perspectives & CQL',
    description: 'Saved, filtered, cross-board views powered by a real query language — "everything due this week", "all my P1s", built and reused in seconds.',
  },
  {
    title: 'Automate the busywork',
    description: 'Templates, automations, and column rules handle the repetitive parts so you don’t have to.',
  },
  {
    title: 'Two-way sync',
    description: 'Jira, Google Calendar, and Slack stay in sync with your boards — plus a command-line tool so AI assistants and scripts can read and write your tasks directly.',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs">
            Read the docs
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/pricing" style={{marginLeft: '1rem'}}>
            Pricing
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FEATURES.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Clarity is a desktop task manager built around Kanban boards, with saved views, a query language, automations, and two-way sync with Jira, Google Calendar, and Slack.">
      <HomepageHeader />
      <main>
        <section className="container margin-vert--lg">
          <div className="row">
            <div className="col col--8 col--offset-2 text--center">
              <p>
                <strong>Clarity</strong> is a desktop task manager built around Kanban boards, with extra tools for
                people who want more structure than a plain to-do list: saved cross-board views, projects and
                milestones, a query language, automations, reminders, and two-way sync with Jira, Google Calendar,
                and Slack. You can also let an AI assistant manage your tasks through the built-in command-line tool.
              </p>
            </div>
          </div>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
