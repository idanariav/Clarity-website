import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {Zap, Bot, Globe, Layers, ListChecks} from 'lucide-react';
import styles from './index.module.css';

const FEATURES = [
  {
    icon: Zap,
    title: 'Automate the busywork',
    description: 'Templates, automations, and column rules handle the repetitive parts so you don’t have to.',
  },
  {
    icon: Bot,
    title: 'Connect your AI',
    description: 'A built-in command-line tool lets AI assistants (like Claude Code) and scripts read and manage your tasks directly — through the same database the app uses, so changes show up instantly.',
  },
  {
    icon: Globe,
    title: 'Clarity, everywhere',
    description: 'Desktop and Android today, with iOS and web on the way — your boards follow you, wherever you work.',
  },
  {
    icon: Layers,
    title: 'Built for power users',
    description: 'Tasks, habits, packing lists, projects, and so much more — Clarity scales past a simple to-do list without getting in your way.',
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

function Feature({icon: Icon, title, description}) {
  return (
    <div className={clsx('col col--6', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>
          <Icon size={28} strokeWidth={1.75} />
        </div>
        <div>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
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
            <div className={clsx('col col--8 col--offset-2 text--center', styles.introRow)}>
              <ListChecks className={styles.introIcon} size={32} strokeWidth={1.5} />
              <p>
                <strong>Clarity</strong> is a desktop task manager built around Kanban boards, with extra tools for
                people who want more structure than a plain to-do list: saved cross-board views, projects and
                milestones, a query language, automations, reminders, and two-way sync with Jira, Google Calendar,
                and Slack.
              </p>
            </div>
          </div>
        </section>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
