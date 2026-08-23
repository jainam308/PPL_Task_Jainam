import { Globe } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Navigation Links Columns */}
        <div className={styles.linksGrid}>
          <div className={styles.column}>
            <h4 className={styles.colTitle}>Support</h4>
            <a href="#" className={styles.link}>Help Centre</a>
            <a href="#" className={styles.link}>AirCover</a>
            <a href="#" className={styles.link}>Anti-discrimination</a>
            <a href="#" className={styles.link}>Disability support</a>
            <a href="#" className={styles.link}>Cancellation options</a>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colTitle}>Hosting</h4>
            <a href="#" className={styles.link}>Airbnb your home</a>
            <a href="#" className={styles.link}>AirCover for Hosts</a>
            <a href="#" className={styles.link}>Hosting resources</a>
            <a href="#" className={styles.link}>Community forum</a>
            <a href="#" className={styles.link}>Hosting responsibly</a>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colTitle}>Airbnb</h4>
            <a href="#" className={styles.link}>Newsroom</a>
            <a href="#" className={styles.link}>New features</a>
            <a href="#" className={styles.link}>Careers</a>
            <a href="#" className={styles.link}>Investors</a>
            <a href="#" className={styles.link}>Emergency stays</a>
          </div>
        </div>

        {/* Bottom Legal / Currency Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.legalLeft}>
            <span>© 2026 Airbnb, Inc.</span>
            <span className={styles.dot}>·</span>
            <a href="#" className={styles.legalLink}>Privacy</a>
            <span className={styles.dot}>·</span>
            <a href="#" className={styles.legalLink}>Terms</a>
            <span className={styles.dot}>·</span>
            <a href="#" className={styles.legalLink}>Sitemap</a>
            <span className={styles.dot}>·</span>
            <a href="#" className={styles.legalLink}>Company details</a>
          </div>

          <div className={styles.currencyRight}>
            <button type="button" className={styles.langBtn}>
              <Globe size={16} />
              <span>English (IN)</span>
            </button>
            <span className={styles.currencyBtn}>₹ INR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
