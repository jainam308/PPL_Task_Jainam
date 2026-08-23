import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../common/Modal/Modal';
import laurelLeft from '../../assets/icons/laurel-left.png';
import laurelRight from '../../assets/icons/laurel-right.png';
import styles from './GuestFavouriteHeader.module.css';

export default function GuestFavouriteHeader({ rating }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formattedRating = Number(rating || 4.95).toFixed(2);

  return (
    <div className={styles.guestFavContainer}>
      {/* Giant Guest Favourite Header with Custom Laurels */}
      <div className={styles.laurelRatingRow}>
        <img
          src={laurelLeft}
          alt="Laurel Left"
          className={styles.laurelImg}
        />
        <span className={styles.ratingNumber}>{formattedRating}</span>
        <img
          src={laurelRight}
          alt="Laurel Right"
          className={styles.laurelImg}
        />
      </div>

      {/* Section Title */}
      <h2 className={styles.title}>Guest favourite</h2>

      {/* Subtext */}
      <p className={styles.subtitle}>
        This home is a guest favourite based on ratings, reviews and reliability
      </p>

      {/* How reviews work modal trigger */}
      <button
        type="button"
        className={styles.reviewsWorkBtn}
        onClick={() => setIsModalOpen(true)}
      >
        How reviews work
      </button>

      {/* Information Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="How reviews work"
      >
        <div className={styles.modalContent}>
          <p className={styles.modalText}>
            Reviews are submitted by verified guests after completing their stay on Airbnb.
          </p>
          <p className={styles.modalText}>
            <strong>Guest favourite</strong> listings are among the top 10% of eligible listings on Airbnb based on ratings, reviews, and reliability metrics like host response rate and zero host cancellations.
          </p>
          <p className={styles.modalText}>
            Sub-category scores (cleanliness, accuracy, check-in, communication, location, and value) are derived directly from guest feedback.
          </p>
        </div>
      </Modal>
    </div>
  );
}

GuestFavouriteHeader.propTypes = {
  rating: PropTypes.number,
};

