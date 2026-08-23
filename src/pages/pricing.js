import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const PLANS = [
  {
    name: 'Monthly',
    price: '$2',
    period: '/ month',
  },
  {
    name: 'Yearly',
    price: '$16',
    period: '/ year',
  },
  {
    name: 'Lifetime',
    price: '$30',
    period: 'one-time',
  },
];

function Plan({name, price, period}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className="card">
        <div className="card__header">
          <Heading as="h3">{name}</Heading>
        </div>
        <div className="card__body text--center">
          <p style={{fontSize: '2rem', margin: 0}}>{price}</p>
          <p>{period}</p>
        </div>
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
