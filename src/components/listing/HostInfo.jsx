import PropTypes from 'prop-types';
import { DoorOpen, Fan, Flame, Star } from 'lucide-react';
import Divider from '../common/Divider/Divider';
import laurelLeft from '../../assets/icons/laurel-left.png';
import laurelRight from '../../assets/icons/laurel-right.png';
import styles from './HostInfo.module.css';

export default function HostInfo({
  propertyType,
  location,
  specs,
  rating,
  reviewsCount,
  isGuestFavorite,
  host,
  highlights,
}) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Flame':
        return <Flame size={24} strokeWidth={1.5} />;
      case 'Fan':
        return <Fan size={24} strokeWidth={1.5} />;
      case 'DoorOpen':
        return <DoorOpen size={24} strokeWidth={1.5} />;
      default:
        return <Flame size={24} strokeWidth={1.5} />;
    }
  };

  return (
    <div className={styles.hostInfoSection}>
      {/* Property Subheading */}
      <h2 className={styles.propertyTitle}>
        {propertyType} in {location}
      </h2>
      <p className={styles.propertySpecs}>
        {specs.guests} guests · {specs.bedrooms} bedroom · {specs.beds} bed · {specs.bathrooms} bathroom
      </p>

      {/* Guest Favourite Badge Card (Exact target site clone) */}
      {isGuestFavorite && (
        <div className={styles.favoriteBadgeCard}>
          <div className={styles.cardLeftCol}>
            <div className={styles.laurelGroup}>
              <img src={laurelLeft} alt="Laurel Left" className={styles.laurelImgSmall} />
              <div className={styles.badgeTitleBox}>
                <span>Guest</span>
                <span>favourite</span>
              </div>
              <img src={laurelRight} alt="Laurel Right" className={styles.laurelImgSmall} />
            </div>
            <p className={styles.cardMiddleText}>
              One of the most loved homes on Airbnb, according to guests
            </p>
          </div>

          <div className={styles.cardRightCol}>
            <div className={styles.ratingSubBox}>
              <span className={styles.ratingVal}>{rating}</span>
              <div className={styles.starsRow}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={10} fill="#222222" color="#222222" />
                ))}
              </div>
            </div>

            <div className={styles.colDivider} />

            <div className={styles.reviewsSubBox}>
              <span className={styles.reviewsNum}>{reviewsCount}</span>
              <span className={styles.reviewsLabel}>Reviews</span>
            </div>
          </div>
        </div>
      )}

      {/* Host Profile Header */}
      <div className={styles.hostHeader}>
        <img
          src={host.avatar}
          alt={host.name}
          className={styles.hostAvatar}
        />
        <div className={styles.hostTextGroup}>
          <h3 className={styles.hostedBy}>Hosted by {host.name}</h3>
          <p className={styles.hostingTenure}>{host.yearsHosting} years hosting</p>
        </div>
      </div>

      <Divider />

      {/* Highlights List */}
      <div className={styles.highlightsList}>
        {highlights.map((item) => (
          <div key={item.id} className={styles.highlightItem}>
            <div className={styles.highlightIcon}>{getIcon(item.icon)}</div>
            <div className={styles.highlightContent}>
              <h4 className={styles.highlightTitle}>{item.title}</h4>
              <p className={styles.highlightDesc}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider />
    </div>
  );
}

HostInfo.propTypes = {
  propertyType: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  specs: PropTypes.shape({
    guests: PropTypes.number,
    bedrooms: PropTypes.number,
    beds: PropTypes.number,
    bathrooms: PropTypes.number,
  }).isRequired,
  rating: PropTypes.number.isRequired,
  reviewsCount: PropTypes.number.isRequired,
  isGuestFavorite: PropTypes.bool,
  host: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    yearsHosting: PropTypes.number,
  }).isRequired,
  highlights: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};
