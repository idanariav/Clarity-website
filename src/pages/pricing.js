import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import {Calendar, CalendarDays, Check, Infinity as InfinityIcon, Sparkles} from 'lucide-react';
import styles from './pricing.module.css';

const FEATURES = [
  'Unlimited boards, lists & cards',
  'Saved views & the full query language (CQL)',
  'Automations, column rules & templates',
  'Two-way sync with Jira, Google Calendar & Slack',
  'AI assistant integration via the CLI',
  'Reminders, recurring tasks & the day planner',
];

const PLANS = [
  {
    icon: Calendar,
    name: 'Monthly',
    price: '$2',
    period: '/ month',
  },
  {
    icon: CalendarDays,
    name: 'Yearly',
    price: '$16',
    period: '/ year',
  },
  {
    icon: InfinityIcon,
    name: 'Lifetime',
    price: '$30',
    period: 'one-time',
  },
];

function Plan({icon: Icon, name, price, period}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className={`card ${styles.planCard}`}>
        <div className={styles.planIcon}>
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <Heading as="h3">{name}</Heading>
        <p className={styles.planPrice}>{price}</p>
        <p className={styles.planPeriod}>{period}</p>
        <ul className={styles.featureList}>
          {FEATURES.map((feature) => (
            <li key={feature}>
              <Check size={16} strokeWidth={2} className={styles.featureCheck} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <p className={styles.trialNote}>Includes a 30-day free trial</p>
        <Link className="button button--primary button--block" to="/download">
          Get started
        </Link>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <Layout title="Pricing" description="Clarity pricing — early-bird rates for beta users.">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2 text--center margin-bottom--lg">
            <Sparkles className={styles.headerIcon} size={32} strokeWidth={1.5} />
            <Heading as="h1">Pricing</Heading>
            <p>
              Clarity is in beta. Everyone who signs up during the beta window keeps these rates{' '}
              <strong>for as long as they stay subscribed or after buying lifetime</strong> — even after the price
              goes up once the product is out of beta. All plans include a 30-day free trial.
            </p>
          </div>
        </div>
        <div className="row">
          {PLANS.map((p) => (
            <Plan key={p.name} {...p} />
          ))}
        </div>
        <div className="row">
          <div className="col col--8 col--offset-2 text--center">
            <p>
              Questions before you start a trial? Email{' '}
              <a href="mailto:idan@idanariav.com">idan@idanariav.com</a>.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
