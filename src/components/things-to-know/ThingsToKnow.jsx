import Divider from '../common/Divider/Divider';
import styles from './ThingsToKnow.module.css';

export default function ThingsToKnow() {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Things to know</h3>

      <div className={styles.columnsGrid}>
        {/* Column 1: Cancellation policy */}
        <div className={styles.column}>
          <div className={styles.iconBox}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#222222"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <line x1="10" y1="13" x2="14" y2="17" />
              <line x1="14" y1="13" x2="10" y2="17" />
            </svg>
          </div>
          <h4 className={styles.columnTitle}>Cancellation policy</h4>
          <p className={styles.ruleItem}>
            Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.
          </p>
          <p className={styles.ruleItem}>Review this host&apos;s full policy for details.</p>
          <button type="button" className={styles.learnMoreBtn}>
            Learn more
          </button>
        </div>

        {/* Column 2: House rules */}
        <div className={styles.column}>
          <div className={styles.iconBox}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#222222"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8.5" cy="8.5" r="4.5" />
              <path d="M11.7 11.7L20 20" />
              <path d="M16 16l2-2" />
              <path d="M18 18l2.5-2.5" />
            </svg>
          </div>
          <h4 className={styles.columnTitle}>House rules</h4>
          <p className={styles.ruleItem}>Check-in after 2:00 pm</p>
          <p className={styles.ruleItem}>Checkout before 11:00 am</p>
          <p className={styles.ruleItem}>3 guests maximum</p>
          <button type="button" className={styles.learnMoreBtn}>
            Learn more
          </button>
        </div>

        {/* Column 3: Safety & property */}
        <div className={styles.column}>
          <div className={styles.iconBox}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#222222"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <line x1="12" y1="2.5" x2="12" y2="21.5" />
            </svg>
          </div>
          <h4 className={styles.columnTitle}>Safety & property</h4>
          <p className={styles.ruleItem}>Carbon monoxide alarm not reported</p>
          <p className={styles.ruleItem}>Smoke alarm not reported</p>
          <p className={styles.ruleItem}>Exterior security cameras on property</p>
          <button type="button" className={styles.learnMoreBtn}>
            Learn more
          </button>
        </div>
      </div>

      <Divider />
    </section>
  );
}
