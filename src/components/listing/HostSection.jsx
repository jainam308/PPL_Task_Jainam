import PropTypes from 'prop-types';
import { GraduationCap, Shield } from 'lucide-react';
import Divider from '../common/Divider/Divider';
import styles from './HostSection.module.css';

export default function HostSection({ host }) {
  const {
    name = 'Mirashya Homes',
    reviewsCount = 1463,
    rating = 4.68,
    yearsHosting = 2,
    bornIn = 'Born in the 80s',
    school = 'Where I went to school: NICMAR GOA',
    responseRate = 100,
    responseTime = 'within an hour',
    coHosts = [],
  } = host || {};

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Meet your host</h2>

      <div className={styles.gridContainer}>
        {/* Left Column: Host Profile Card & Info */}
        <div className={styles.leftCardCol}>
          <div className={styles.hostCard}>
            {/* Left side of host card */}
            <div className={styles.hostCardLeft}>
              <div className={styles.avatarWrapper}>
                {host?.avatar ? (
                  <img
                    src={host.avatar}
                    alt={name}
                    className={styles.avatarPhoto}
                  />
                ) : (
                  <div className={styles.avatarCircle}>
                    <span className={styles.avatarLogoText}>MIRASHYA</span>
                    <span className={styles.avatarLogoSub}>HOMES</span>
                  </div>
                )}
                <div className={styles.verifiedBadge}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
              <h3 className={styles.hostName}>{name}</h3>
              <span className={styles.hostBadgeText}>Host</span>
            </div>

            {/* Right side of host card: 3 vertical stats with horizontal dividers */}
            <div className={styles.hostCardRightStats}>
              <div className={styles.statBlock}>
                <span className={styles.statNum}>{reviewsCount.toLocaleString()}</span>
                <span className={styles.statLabel}>Reviews</span>
              </div>
              <div className={styles.statHorizontalDivider} />
              <div className={styles.statBlock}>
                <span className={styles.statNum}>{rating}★</span>
                <span className={styles.statLabel}>Rating</span>
              </div>
              <div className={styles.statHorizontalDivider} />
              <div className={styles.statBlock}>
                <span className={styles.statNum}>{yearsHosting}</span>
                <span className={styles.statLabel}>Years hosting</span>
              </div>
            </div>
          </div>

          <div className={styles.personalInfoList}>
            <div className={styles.infoRow}>
              {/* Gender / Balloon symbol line-art icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.infoIcon}
              >
                <circle cx="12" cy="9" r="6" />
                <path d="M12 15v6M9 18h6" />
              </svg>
              <span>{bornIn}</span>
            </div>
            <div className={styles.infoRow}>
              <GraduationCap size={20} className={styles.infoIcon} />
              <span>{school}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Co-Hosts, Details, Message Host & Protection note */}
        <div className={styles.rightDetailsCol}>
          {coHosts.length > 0 && (
            <div className={styles.coHostsSection}>
              <h4 className={styles.subHeading}>Co-Hosts</h4>
              <div className={styles.coHostsGrid}>
                {coHosts.map((coHost, idx) => (
                  <div key={idx} className={styles.coHostItem}>
                    {coHost.avatar ? (
                      <img
                        src={coHost.avatar}
                        alt={coHost.name}
                        className={styles.coHostAvatarImg}
                      />
                    ) : (
                      <div
                        className={styles.coHostAvatarCircle}
                        style={{
                          backgroundColor: coHost.avatarBg || '#FCE4EC',
                          color: coHost.avatarTextColor || '#D81B60',
                        }}
                      >
                        {coHost.avatarInitial || coHost.name.charAt(0)}
                      </div>
                    )}
                    <span className={styles.coHostName}>{coHost.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={styles.hostDetailsSection}>
            <h4 className={styles.subHeading}>Host details</h4>
            <p className={styles.metaLine}>Response rate: {responseRate}%</p>
            <p className={styles.metaLine}>Responds {responseTime}</p>

            <button type="button" className={styles.messageHostBtn}>
              Message host
            </button>
          </div>

          <div className={styles.protectionSubtext}>
            <Shield size={18} className={styles.shieldIcon} />
            <span>
              To help protect your payment, always use Airbnb to send money and
              communicate with hosts.
            </span>
          </div>
        </div>
      </div>

      <Divider />
    </section>
  );
}

HostSection.propTypes = {
  host: PropTypes.object.isRequired,
};
