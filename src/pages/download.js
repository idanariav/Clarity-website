import {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import {Download, Laptop, MonitorSmartphone, Smartphone, Globe} from 'lucide-react';
import styles from './download.module.css';

const RELEASES_URL = 'https://github.com/idanariav/Clarity-releases/releases/latest';
// The ms-windows-store:// protocol only resolves on Windows; other browsers get the web listing.
const WINDOWS_STORE_APP_URL = 'ms-windows-store://pdp/?productid=9PPQ6WFRH86F';
const WINDOWS_STORE_WEB_URL = 'https://apps.microsoft.com/detail/9PPQ6WFRH86F';
const LATEST_RELEASE_API = 'https://api.github.com/repos/idanariav/Clarity-releases/releases/latest';

const COMING_SOON = [
  {icon: Smartphone, name: 'Android & iOS'},
  {icon: Globe, name: 'Web'},
];

export default function DownloadPage() {
  const [macDownloadUrl, setMacDownloadUrl] = useState(RELEASES_URL);
  const [winStoreUrl, setWinStoreUrl] = useState(WINDOWS_STORE_WEB_URL);

  useEffect(() => {
    if (/Windows/i.test(navigator.userAgent)) {
      setWinStoreUrl(WINDOWS_STORE_APP_URL);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch(LATEST_RELEASE_API)
      .then((res) => (res.ok ? res.json() : null))
      .then((release) => {
        if (cancelled) return;
        const dmgAsset = release?.assets?.find((asset) => asset.name.endsWith('aarch64.dmg'));
        if (dmgAsset) {
          setMacDownloadUrl(dmgAsset.browser_download_url);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Layout title="Download" description="Download Clarity HQ for macOS and Windows.">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2 text--center margin-bottom--lg">
            <Download className={styles.headerIcon} size={32} strokeWidth={1.5} />
            <Heading as="h1">Download Clarity HQ</Heading>
            <p>
              Clarity HQ is available today for <strong>macOS on Apple Silicon</strong> (M-series chips) and{' '}
              <strong>Windows</strong>. macOS builds are signed, notarized, and auto-update in place; Windows installs from the Microsoft Store.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col--5 col--offset-1">
            <div className={`card ${styles.downloadCard}`}>
              <div className={styles.platformIcon}>
                <Laptop size={28} strokeWidth={1.75} />
              </div>
              <Heading as="h3">macOS (Apple Silicon)</Heading>
              <p className={styles.cardNote}>Requires macOS on an M-series Mac.</p>
              <Link className="button button--primary button--lg" to={macDownloadUrl}>
                Download for macOS
              </Link>
              <p className={styles.cardSub}>
                Downloads the latest <code>.dmg</code> directly from GitHub.
              </p>
            </div>
          </div>
          <div className="col col--5">
            <div className={`card ${styles.downloadCard}`}>
              <div className={styles.platformIcon}>
                <MonitorSmartphone size={28} strokeWidth={1.75} />
              </div>
              <Heading as="h3">Windows</Heading>
              <p className={styles.cardNote}>Requires Windows 10 or later (64-bit).</p>
              <Link className="button button--primary button--lg" to={winStoreUrl}>
                Get it from Microsoft Store
              </Link>
              <p className={styles.cardSub}>
                Installs from the Microsoft Store, which keeps the app up to date automatically.
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
