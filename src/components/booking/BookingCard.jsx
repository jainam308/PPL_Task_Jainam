import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, Flag, Tag } from 'lucide-react';
import Button from '../common/Button/Button';
import styles from './BookingCard.module.css';

export default function BookingCard({
  pricing,
  dates,
}) {
  const [guestsCount] = useState(2);

  return (
    <aside className={styles.sidebarWrapper}>
      {/* Promo Discount Banner */}
      <div className={styles.promoCard}>
        <div className={styles.promoLeft}>
          <div className={styles.tagIcon}>
            <Tag size={20} fill="#008A05" color="#008A05" />
          </div>
          <div className={styles.promoText}>
            Get 10% off your next stay. <span className={styles.underline}>Terms apply</span>
          </div>
        </div>
        <button type="button" className={styles.claimBtn}>
          Claim
        </button>
      </div>

      {/* Main Booking Widget */}
      <div className={styles.bookingCard}>
        {/* Price Row */}
        <div className={styles.priceRow}>
          <span className={styles.priceAmount}>
            ₹{pricing?.totalPrice?.toLocaleString() || '28,499'}
          </span>
          <span className={styles.pricePeriod}>for 5 nights</span>
        </div>

        {/* Date & Guest Picker Inputs Box */}
        <div className={styles.pickerGridBox}>
          <div className={styles.topDatesRow}>
            <div className={`${styles.dateCell} ${styles.borderRight}`}>
              <span className={styles.inputLabel}>CHECK-IN</span>
              <span className={styles.inputValue}>10/18/2026</span>
            </div>
            <div className={styles.dateCell}>
              <span className={styles.inputLabel}>CHECKOUT</span>
              <span className={styles.inputValue}>10/23/2026</span>
            </div>
          </div>

          {/* Guest Selector Box */}
          <div
            className={styles.guestCell}
            onClick={() => {}}
            role="button"
            tabIndex={0}
          >
            <div>
              <span className={styles.inputLabel}>GUESTS</span>
              <div className={styles.inputValue}>{guestsCount} guests</div>
            </div>
            <ChevronDown
              size={18}
              className={styles.chevron}
            />
          </div>
        </div>

        {/* Free Cancellation Box */}
        <div className={styles.cancellationBanner}>
          Free cancellation before <strong>{dates?.cancellationDeadline || '17 October'}</strong>
        </div>

        {/* Reserve Button */}
        <Button
          variant="primary"
          size="lg"
          fullWidth
          className={styles.reserveBtn}
          onClick={() => {}}
        >
          Reserve
        </Button>

        {/* Charge Subtext */}
        <p className={styles.chargeSubtext}>You won&apos;t be charged yet</p>
      </div>

      {/* Report listing footer link */}
      <div className={styles.reportRow}>
        <Flag size={14} />
        <button type="button" className={styles.reportBtn}>
          Report this listing
        </button>
      </div>
    </aside>
  );
}

BookingCard.propTypes = {
  pricing: PropTypes.object,
  dates: PropTypes.object,
};
