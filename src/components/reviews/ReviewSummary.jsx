import PropTypes from 'prop-types';
import Divider from '../common/Divider/Divider';
import GuestFavouriteHeader from './GuestFavouriteHeader';
import defaultReviewsData from '../../data/reviews.json';

import rev1 from '../../assets/Profile-pics/rev1.jpeg';
import rev2 from '../../assets/Profile-pics/rev2.jpeg';
import rev3 from '../../assets/Profile-pics/rev3.jpeg';
import rev4 from '../../assets/Profile-pics/rev4.jpeg';
import rev5 from '../../assets/Profile-pics/rev5.jpeg';
import co1 from '../../assets/Profile-pics/co1.jpg';
import co2 from '../../assets/Profile-pics/co2.jpg';
import co3 from '../../assets/Profile-pics/co3.jpg';

import styles from './ReviewSummary.module.css';

const avatarMap = {
  '/images/avatars/co1.jpg': co1,
  '/images/avatars/co2.jpg': co2,
  '/images/avatars/co3.jpg': co3,
  '/images/avatars/rev1.jpeg': rev1,
  '/images/avatars/rev2.jpeg': rev2,
  '/images/avatars/rev3.jpeg': rev3,
  '/images/avatars/rev4.jpeg': rev4,
  '/images/avatars/rev5.jpeg': rev5,
  r1: rev1,
  r2: co1,
  r3: rev3,
  r4: rev4,
  r5: co2,
  r6: rev2,
};

export default function ReviewSummary({ reviewsData }) {
  const data = reviewsData || defaultReviewsData;
  const { pills = [], items = [], overallRating = 4.95 } = data;

  const getAvatarSrc = (rev) => {
    if (rev.avatar && avatarMap[rev.avatar]) return avatarMap[rev.avatar];
    if (rev.id && avatarMap[rev.id]) return avatarMap[rev.id];
    if (rev.avatar && typeof rev.avatar === 'string' && !rev.avatar.startsWith('/images/')) return rev.avatar;
    return null;
  };

  return (
    <section className={styles.reviewContainer} id="reviews">
      <Divider className={styles.topDivider} />

      {/* Guest Favourite Hero Banner */}
      <GuestFavouriteHeader rating={overallRating} />

      {/* Compact 7 Category Rating Breakdown Grid */}
      <div className={styles.breakdownGridContainer}>
        {/* Column 1: Overall rating bar chart */}
        <div className={styles.overallRatingCol}>
          <h4 className={styles.categoryTitle}>Overall rating</h4>
          <div className={styles.ratingBarsWrapper}>
            {[
              { num: 5, fillWidth: '100%' },
              { num: 4, fillWidth: '5px' },
              { num: 3, fillWidth: '0%' },
              { num: 2, fillWidth: '0%' },
              { num: 1, fillWidth: '0%' },
            ].map(({ num, fillWidth }) => (
              <div key={num} className={styles.singleBarRow}>
                <span className={styles.barNumberLabel}>{num}</span>
                <div className={styles.barTrackBackground}>
                  <div
                    className={styles.barFillIndicator}
                    style={{ width: fillWidth }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Cleanliness */}
        <div className={styles.metricCardCol}>
          <h4 className={styles.categoryTitle}>Cleanliness</h4>
          <span className={styles.metricScoreValue}>5.0</span>
          <div className={styles.categoryIconWrapper}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              stroke="#222222"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 13.5v9a2.5 2.5 0 0 0 2.5 2.5h3a2.5 2.5 0 0 0 2.5-2.5v-9H14z" />
              <path d="M16 13.5v-3.5h2V13.5" />
              <path d="M14.5 10H20" />
              <path d="M15 13l-3 3" />
              <circle cx="23.5" cy="8.5" r="0.75" fill="#222222" stroke="none" />
              <circle cx="26" cy="11" r="0.75" fill="#222222" stroke="none" />
              <circle cx="24.5" cy="13.5" r="0.75" fill="#222222" stroke="none" />
            </svg>
          </div>
        </div>

        {/* Column 3: Accuracy */}
        <div className={styles.metricCardCol}>
          <h4 className={styles.categoryTitle}>Accuracy</h4>
          <span className={styles.metricScoreValue}>5.0</span>
          <div className={styles.categoryIconWrapper}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              stroke="#222222"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="16" cy="16" r="10.5" />
              <path d="M11 16.5l3.5 3.5 6.5-6.5" />
            </svg>
          </div>
        </div>

        {/* Column 4: Check-in */}
        <div className={styles.metricCardCol}>
          <h4 className={styles.categoryTitle}>Check-in</h4>
          <span className={styles.metricScoreValue}>5.0</span>
          <div className={styles.categoryIconWrapper}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              stroke="#222222"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11.5" cy="11.5" r="4.5" />
              <path d="M14.7 14.7L24 24" />
              <path d="M20 20l2.5-2.5" />
              <path d="M22 22l2.5-2.5" />
            </svg>
          </div>
        </div>

        {/* Column 5: Communication */}
        <div className={styles.metricCardCol}>
          <h4 className={styles.categoryTitle}>Communication</h4>
          <span className={styles.metricScoreValue}>5.0</span>
          <div className={styles.categoryIconWrapper}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              stroke="#222222"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-4 4v-4H10a3 3 0 0 1-3-3V9z" />
            </svg>
          </div>
        </div>

        {/* Column 6: Location */}
        <div className={styles.metricCardCol}>
          <h4 className={styles.categoryTitle}>Location</h4>
          <span className={styles.metricScoreValue}>4.8</span>
          <div className={styles.categoryIconWrapper}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              stroke="#222222"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 8l7-3 8 3 7-3v17l-7 3-8-3-7 3V8z" />
              <path d="M12 5v17" />
              <path d="M20 8v17" />
            </svg>
          </div>
        </div>

        {/* Column 7: Value */}
        <div className={styles.metricCardCol}>
          <h4 className={styles.categoryTitle}>Value</h4>
          <span className={styles.metricScoreValue}>4.8</span>
          <div className={styles.categoryIconWrapper}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              stroke="#222222"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 8h7.5l11 11a2.12 2.12 0 0 1 0 3l-4.5 4.5a2.12 2.12 0 0 1-3 0l-11-11V8z" />
              <circle cx="12" cy="12" r="1.2" fill="#222222" stroke="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Horizontal Pills Filter Bar */}
      {pills.length > 0 && (
        <div className={styles.pillsBarContainer}>
          {pills.map((pill, idx) => (
            <div key={idx} className={styles.pillBadgeItem}>
              <span className={styles.pillEmojiIcon}>{pill.icon}</span>
              <span className={styles.pillLabelText}>{pill.label}</span>
              <span className={styles.pillCountNumber}>{pill.count}</span>
            </div>
          ))}
        </div>
      )}

      {/* Guest Reviews List (2-Column Grid) */}
      <div className={styles.guestReviewsListSection}>
        <div className={styles.cardsGridTwoCol}>
          {items.map((rev) => {
            const avatarSrc = getAvatarSrc(rev);
            return (
              <div key={rev.id} className={styles.individualReviewCard}>
                <div className={styles.reviewerProfileHeader}>
                  {avatarSrc ? (
                    <img
                      src={avatarSrc}
                      alt={rev.author}
                      className={styles.reviewerAvatarImg}
                    />
                  ) : (
                    <div
                      className={styles.reviewerAvatarCircle}
                      style={{
                        backgroundColor: rev.avatarBg || '#F7E6D4',
                        color: rev.avatarTextColor || '#B45309',
                      }}
                    >
                      {rev.avatarInitial || rev.author.charAt(0)}
                    </div>
                  )}
                  <div className={styles.reviewerMetaDetails}>
                    <h5 className={styles.reviewerNameText}>{rev.author}</h5>
                    <p className={styles.reviewerTenureText}>{rev.tenure}</p>
                  </div>
                </div>

                <div className={styles.ratingAndDateRow}>
                  <span className={styles.starRatingSymbols}>{rev.ratingText || '★★★★★'}</span>
                  <span className={styles.separatorBullet}>·</span>
                  <span className={styles.reviewFormattedDate}>{rev.date}</span>
                </div>

                <p className={styles.reviewCommentBody}>{rev.content}</p>

                {rev.hasShowMore && (
                  <button type="button" className={styles.showMoreLinkBtn}>
                    Show more
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Show All Reviews Button */}
        <div className={styles.showAllReviewsWrapper}>
          <button type="button" className={styles.showAllReviewsBtn}>
            Show all 19 reviews
          </button>
        </div>
      </div>
    </section>
  );
}

ReviewSummary.propTypes = {
  reviewsData: PropTypes.object,
};
