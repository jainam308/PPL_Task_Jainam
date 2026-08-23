import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styles from './Lightbox.module.css';

export default function Lightbox({
  isOpen,
  onClose,
  photos = [],
  currentIndex = 0,
  onIndexChange,
}) {
  const handlePrev = () => {
    onIndexChange?.((currentIndex - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    onIndexChange?.((currentIndex + 1) % photos.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onIndexChange?.((currentIndex - 1 + photos.length) % photos.length);
      }
      if (e.key === 'ArrowRight') {
        onIndexChange?.((currentIndex + 1) % photos.length);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, photos.length, onClose, onIndexChange]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div className={styles.lightboxOverlay} role="dialog" aria-modal="true">
      {/* Header bar */}
      <header className={styles.topBar}>
        <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close viewer">
          <X size={20} />
          <span>Close</span>
        </button>

        <div className={styles.counter}>
          {currentIndex + 1} / {photos.length}
        </div>
      </header>

      {/* Main View Area */}
      <main className={styles.mainView}>
        {/* Left Arrow */}
        <button
          type="button"
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={handlePrev}
          aria-label="Previous photo"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Center Photo */}
        <div className={styles.imageStage}>
          <img src={currentPhoto?.url} alt={currentPhoto?.caption || `Photo ${currentIndex + 1}`} />
          {currentPhoto?.caption && (
            <div className={styles.photoCaption}>{currentPhoto.caption}</div>
          )}
        </div>

        {/* Right Arrow */}
        <button
          type="button"
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={handleNext}
          aria-label="Next photo"
        >
          <ChevronRight size={24} />
        </button>
      </main>
    </div>
  );
}

Lightbox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  onIndexChange: PropTypes.func.isRequired,
};
