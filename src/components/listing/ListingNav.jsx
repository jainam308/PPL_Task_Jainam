import PropTypes from 'prop-types';
import { Star } from 'lucide-react';
import Button from '../common/Button/Button';
import styles from './ListingNav.module.css';

export default function ListingNav({
  activeTab = 'photos',
  onTabClick,
  price,
  rating,
  reviewsCount,
  onReserveClick,
  isVisible = true,
}) {
  const tabs = [
    { id: 'photos', label: 'Photos' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'location', label: 'Location' },
  ];

  // Use CSS classes instead of null-return so animation is smooth (like original)

  return (
    <div className={`${styles.stickyBar} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.container}>
        {/* Navigation Tabs */}
        <nav className={styles.navTabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTab : ''}`}
              onClick={() => onTabClick?.(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Right Action Summary */}
        <div className={styles.rightSummary}>
          <div className={styles.priceInfo}>
            <div className={styles.priceRow}>
              <span className={styles.boldPrice}>₹{price?.toLocaleString()}</span>
              <span className={styles.perNights}>for 5 nights</span>
            </div>
            <div className={styles.ratingRow}>
              <Star size={12} fill="currentColor" />
              <span>{rating}</span>
              <span className={styles.dot}>·</span>
              <span className={styles.underlineReviews}>{reviewsCount} reviews</span>
            </div>
          </div>

          <Button variant="primary" size="md" onClick={onReserveClick}>
            Reserve
          </Button>
        </div>
      </div>
    </div>
  );
}

ListingNav.propTypes = {
  activeTab: PropTypes.string,
  onTabClick: PropTypes.func,
  price: PropTypes.number,
  rating: PropTypes.number,
  reviewsCount: PropTypes.number,
  onReserveClick: PropTypes.func,
  isVisible: PropTypes.bool,
};
