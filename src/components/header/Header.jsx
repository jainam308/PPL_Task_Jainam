import { Globe, Menu, Search } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="/" className={styles.logoLink} aria-label="Airbnb homepage">
          <svg
            className={styles.logoSvg}
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.408-3.6 8-8 8-2.423 0-4.632-.98-6.223-2.585l-.277-.29-.277.29C13.032 31.02 10.823 32 8.4 32c-4.408 0-8-3.592-8-8 0-1.25.328-2.613 1.006-4.148l.255-.533c.987-2.296 5.147-11.006 7.1-14.836l.533-1.025C10.537 1.963 11.992 1 14 1h2zm0 2h-2c-1.218 0-2.222.616-3.21 2.457l-.372.735c-1.84 3.606-5.845 12.012-6.84 14.332l-.18.423C2.868 22.186 2.6 23.214 2.6 24c0 3.303 2.697 6 6 6 1.83 0 3.518-.758 4.733-1.986l.667-.674 1.4 1.414.667.674C17.282 30.642 18.97 31.4 20.8 31.4c3.303 0 6-2.697 6-6 0-.786-.268-1.814-.798-3.053l-.18-.423c-.995-2.32-5-10.726-6.84-14.332l-.372-.735C17.622 3.616 16.618 3 15.4 3H16zm0 13c3.104 0 5.6 2.378 5.6 5.308 0 1.965-1.084 3.738-2.73 4.67l-.27.142C17.7 26.6 16.866 26.8 16 26.8c-.866 0-1.7-.2-2.6-.68l-.27-.142C11.484 25.046 10.4 23.273 10.4 21.308 10.4 18.378 12.896 16 16 16zm0 2c-2.002 0-3.6 1.492-3.6 3.308 0 1.185.674 2.25 1.733 2.812l.267.13c.518.232 1.087.35 1.6.35.513 0 1.082-.118 1.6-.35l.267-.13c1.059-.562 1.733-1.627 1.733-2.812C19.6 19.492 18.002 18 16 18z" />
          </svg>
          <span className={styles.logoText}>airbnb</span>
        </a>

        {/* Center Search Pill */}
        <div className={styles.searchPill}>
          <button type="button" className={styles.searchButton}>
            <img
              src="/images/icons/searchbar-house.png"
              alt="House"
              className={styles.searchHouseImg}
            />
            <span className={styles.searchSegmentBold}>Anywhere</span>
            <span className={styles.divider}></span>
            <span className={styles.searchSegmentBold}>Anytime</span>
            <span className={styles.divider}></span>
            <span className={styles.searchSegmentLight}>Add guests</span>
            <span className={styles.searchIconCircle}>
              <Search size={14} color="#FFFFFF" strokeWidth={2.5} />
            </span>
          </button>
        </div>

        {/* Right Menu */}
        <div className={styles.rightNav}>
          <button type="button" className={styles.hostLink}>
            Become a host
          </button>
          <button type="button" className={styles.iconCircleBtn} aria-label="Choose language">
            <Globe size={18} color="#222222" />
          </button>
          <button type="button" className={styles.iconCircleBtn} aria-label="Main menu">
            <Menu size={18} color="#222222" />
          </button>
        </div>
      </div>
    </header>
  );
}
