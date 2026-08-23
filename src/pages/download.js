import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import {Download, Laptop, MonitorSmartphone, Smartphone, Globe} from 'lucide-react';
import styles from './download.module.css';

const RELEASES_URL = 'https://github.com/idanariav/Clarity-releases/releases/latest';

const COMING_SOON = [
  {icon: MonitorSmartphone, name: 'Windows'},
  {icon: MonitorSmartphone, name: 'Linux'},
  {icon: Smartphone, name: 'Android & iOS'},
  {icon: Globe, name: 'Web'},
];

export default function DownloadPage() {
  return (
    <Layout title="Download" description="Download Clarity for macOS.">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2 text--center margin-bottom--lg">
            <Download className={styles.headerIcon} size={32} strokeWidth={1.5} />
            <Heading as="h1">Download Clarity</Heading>
            <p>
              Clarity is available today for <strong>macOS on Apple Silicon</strong> (M-series chips). Builds are
              signed, notarized, and auto-update in place.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div className={`card ${styles.downloadCard}`}>
              <div className={styles.platformIcon}>
                <Laptop size={28} strokeWidth={1.75} />
              </div>
              <Heading as="h3">macOS (Apple Silicon)</Heading>
              <p className={styles.cardNote}>Requires macOS on an M-series Mac.</p>
              <Link className="button button--primary button--lg" to={RELEASES_URL}>
                Download for macOS
              </Link>
              <p className={styles.cardSub}>
                Opens the latest release on GitHub — grab the <code>.dmg</code> file.
              </p>
            </div>
          </div>
        </div>
        <div className="row margin-top--xl">
          <div className="col col--8 col--offset-2 text--center">
            <Heading as="h2" className={styles.comingSoonHeading}>
              Coming soon
            </Heading>
            <div className={styles.comingSoonRow}>
              {COMING_SOON.map(({icon: Icon, name}) => (
                <div key={name} className={styles.comingSoonItem}>
                  <Icon size={20} strokeWidth={1.75} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row margin-top--lg">
          <div className="col col--8 col--offset-2 text--center">
            <p>
              First time here? Follow the <Link to="/docs/getting-started">Getting Started guide</Link> once it's
              installed, or check out <Link to="/pricing">pricing</Link>.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
