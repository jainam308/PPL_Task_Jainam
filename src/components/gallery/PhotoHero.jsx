import PropTypes from 'prop-types';
import styles from './PhotoHero.module.css';

export default function PhotoHero({ photos = [], onShowAllPhotos, onSelectPhoto }) {
  const displayPhotos = photos.slice(0, 5);
  const mainPhoto = displayPhotos[0];
  const gridPhotos = displayPhotos.slice(1, 5);

  const getCategoryForIndex = (index) => {
    switch (index) {
      case 0:
      case 1:
      case 2:
        return 'living-room-2';
      case 3:
        return 'bedroom';
      case 4:
        return 'exterior';
      default:
        return null;
    }
  };

  return (
    <section className={styles.heroSection} id="photos">
      <div className={styles.gridContainer}>
        {/* Main Large Photo (Left) */}
        {mainPhoto && (
          <div
            className={`${styles.photoItem} ${styles.mainPhoto}`}
            onClick={() => onSelectPhoto?.(0, getCategoryForIndex(0))}
            role="button"
            tabIndex={0}
            aria-label="View photo 1 in photo tour"
          >
            <img src={mainPhoto.url} alt={mainPhoto.caption || 'Property view'} />
          </div>
        )}

        {/* 4 Small Photos (Right Grid) */}
        <div className={styles.subGrid}>
          {gridPhotos.map((photo, index) => {
            const actualIndex = index + 1;
            return (
              <div
                key={photo.id || index}
                className={`${styles.photoItem} ${styles[`subPhoto${actualIndex}`]}`}
                onClick={() => onSelectPhoto?.(actualIndex, getCategoryForIndex(actualIndex))}
                role="button"
                tabIndex={0}
                aria-label={`View photo ${actualIndex + 1} in photo tour`}
              >
                <img src={photo.url} alt={photo.caption || `Property photo ${actualIndex + 1}`} />
              </div>
            );
          })}
        </div>

        {/* Show all photos button */}
        <button
          type="button"
          className={styles.showAllBtn}
          onClick={onShowAllPhotos}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <rect x="1" y="1" width="3.5" height="3.5" rx="1" />
            <rect x="6.25" y="1" width="3.5" height="3.5" rx="1" />
            <rect x="11.5" y="1" width="3.5" height="3.5" rx="1" />
            <rect x="1" y="6.25" width="3.5" height="3.5" rx="1" />
            <rect x="6.25" y="6.25" width="3.5" height="3.5" rx="1" />
            <rect x="11.5" y="6.25" width="3.5" height="3.5" rx="1" />
            <rect x="1" y="11.5" width="3.5" height="3.5" rx="1" />
            <rect x="6.25" y="11.5" width="3.5" height="3.5" rx="1" />
            <rect x="11.5" y="11.5" width="3.5" height="3.5" rx="1" />
          </svg>
          <span>Show all photos</span>
        </button>
      </div>
    </section>
  );
}

PhotoHero.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string.isRequired,
      caption: PropTypes.string,
    })
  ).isRequired,
  onShowAllPhotos: PropTypes.func.isRequired,
  onSelectPhoto: PropTypes.func,
};
