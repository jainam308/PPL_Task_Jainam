import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { X, Share2, Heart } from 'lucide-react';
import styles from './PhotoTour.module.css';

const TOUR_CATEGORIES = [
  {
    id: 'living-room-1',
    title: 'Living room 1',
    subtitle: 'Sofa · Air conditioning · Ceiling fan · TV',
    photos: [
      { url: '/images/gallery/living-room-1/living-1-1.jpeg', caption: 'Living room view 1' },
      { url: '/images/gallery/living-room-1/living-1-2.jpeg', caption: 'Living room view 2' },
    ],
  },
  {
    id: 'living-room-2',
    title: 'Living room 2',
    subtitle: 'Ceiling fan · Hot tub',
    photos: [
      { url: '/images/gallery/living-room-2/jacuzzi-1.jpeg', caption: 'Jacuzzi area' },
      { url: '/images/gallery/living-room-2/jacuzzi-2.jpeg', caption: 'Hot tub view' },
      { url: '/images/gallery/living-room-2/jacuzzi-3.jpeg', caption: 'Outdoor space' },
      { url: '/images/gallery/living-room-2/jacuzzi-4.jpeg', caption: 'Seating area' },
      { url: '/images/gallery/living-room-2/jacuzzi-5.jpeg', caption: 'Lounge area' },
      { url: '/images/gallery/living-room-2/jacuzzi-6.jpeg', caption: 'Deck view' },
      { url: '/images/gallery/living-room-2/jacuzzi-7.jpeg', caption: 'Night view' },
      { url: '/images/gallery/living-room-2/jacuzzi-8.jpeg', caption: 'Jacuzzi close-up' },
    ],
  },
  {
    id: 'kitchen',
    title: 'Full kitchen',
    subtitle: 'Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery',
    photos: [
      { url: '/images/gallery/kitchen/kitchen-1.jpeg', caption: 'Kitchen view 1' },
      { url: '/images/gallery/kitchen/kitchen-2.jpeg', caption: 'Kitchen view 2' },
    ],
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    subtitle: 'Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Wifi',
    photos: [
      { url: '/images/gallery/bedroom/bedroom-1.jpeg', caption: 'Bedroom view 1' },
      { url: '/images/gallery/bedroom/bedroom-2.jpeg', caption: 'Bedroom view 2' },
      { url: '/images/gallery/bedroom/bedroom-3.jpeg', caption: 'Bedroom view 3' },
      { url: '/images/gallery/bedroom/bedroom-4.jpeg', caption: 'Bedroom view 4' },
      { url: '/images/gallery/bedroom/bedroom-5.jpeg', caption: 'Bedroom view 5' },
    ],
  },
  {
    id: 'bathroom',
    title: 'Full bathroom',
    subtitle: 'Hairdryer · Hot water · Shampoo · Shower gel',
    photos: [
      { url: '/images/gallery/bathroom/bathroom-1.jpeg', caption: 'Bathroom' },
    ],
  },
  {
    id: 'gym',
    title: 'Gym',
    subtitle: 'Air conditioning · Gym · Exercise equipment · Ceiling fan',
    photos: [
      { url: '/images/gallery/gym/gym-1.jpeg', caption: 'Gym view 1' },
      { url: '/images/gallery/gym/gym-2.jpeg', caption: 'Gym view 2' },
      { url: '/images/gallery/gym/gym-3.jpeg', caption: 'Gym view 3' },
      { url: '/images/gallery/gym/gym-4.jpeg', caption: 'Gym view 4' },
      { url: '/images/gallery/gym/gym-5.jpeg', caption: 'Gym view 5' },
    ],
  },
  {
    id: 'exterior',
    title: 'Exterior',
    subtitle: 'Building exterior & surrounding area',
    photos: [
      { url: '/images/gallery/exterior/exterior-1.jpeg', caption: 'Exterior view 1' },
      { url: '/images/gallery/exterior/exterior-2.jpeg', caption: 'Exterior view 2' },
      { url: '/images/gallery/exterior/exterior-3.jpeg', caption: 'Exterior view 3' },
      { url: '/images/gallery/exterior/exterior-4.jpeg', caption: 'Exterior view 4' },
      { url: '/images/gallery/exterior/exterior-5.jpeg', caption: 'Exterior view 5' },
      { url: '/images/gallery/exterior/exterior-6.jpeg', caption: 'Exterior view 6' },
    ],
  },
  {
    id: 'pool',
    title: 'Pool',
    subtitle: 'Swimming pool & deck area',
    photos: [
      { url: '/images/gallery/pool/pool-1.jpeg', caption: 'Pool view 1' },
      { url: '/images/gallery/pool/pool-2.jpeg', caption: 'Pool view 2' },
      { url: '/images/gallery/pool/pool-3.jpeg', caption: 'Pool view 3' },
    ],
  },
  {
    id: 'additional',
    title: 'Additional photos',
    subtitle: 'Other amenities & spaces',
    photos: [
      { url: '/images/gallery/additional/additional-1.jpeg', caption: 'Additional 1' },
      { url: '/images/gallery/additional/additional-2.jpeg', caption: 'Additional 2' },
      { url: '/images/gallery/additional/additional-3.jpeg', caption: 'Additional 3' },
      { url: '/images/gallery/additional/additional-4.jpeg', caption: 'Additional 4' },
      { url: '/images/gallery/additional/additional-5.jpeg', caption: 'Additional 5' },
      { url: '/images/gallery/additional/additional-6.jpeg', caption: 'Additional 6' },
      { url: '/images/gallery/additional/additional-7.jpeg', caption: 'Additional 7' },
      { url: '/images/gallery/additional/additional-8.jpeg', caption: 'Additional 8' },
    ],
  },
];

export default function PhotoTour({
  isOpen,
  onClose,
  photos = [],
  onSelectPhoto,
  onShare,
  onSave,
  isSaved,
  initialCategory = null,
}) {
  const mainRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && initialCategory) {
      const timer = setTimeout(() => {
        const el = document.getElementById(`phototour-cat-${initialCategory}`);
        if (el && mainRef.current) {
          mainRef.current.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen, initialCategory]);

  if (!isOpen) return null;

  const scrollToCategory = (catId) => {
    const el = document.getElementById(`phototour-cat-${catId}`);
    if (el && mainRef.current) {
      mainRef.current.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const handlePhotoClick = (photoUrl) => {
    const idx = photos.findIndex((p) => p.url === photoUrl);
    onSelectPhoto?.(idx !== -1 ? idx : 0);
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Photo tour">
      {/* Sticky Header */}
      <header className={styles.header}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close photo tour"
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        <h2 className={styles.headerTitle}>Photo tour</h2>

        <div className={styles.headerRight}>
          <button
            type="button"
            className={styles.actionBtn}
            onClick={onShare}
            aria-label="Share listing"
          >
            <Share2 size={16} />
          </button>
          <button
            type="button"
            className={styles.actionBtn}
            onClick={onSave}
            aria-label="Save listing"
          >
            <Heart
              size={16}
              fill={isSaved ? '#FF385C' : 'none'}
              color={isSaved ? '#FF385C' : 'currentColor'}
            />
          </button>
        </div>
      </header>

      {/* Scrollable Main Content */}
      <main className={styles.mainContent} ref={mainRef}>
        <div className={styles.innerContainer}>
          {/* Category Thumbnail Navigation Grid */}
          <div className={styles.categoryNavGrid}>
            {TOUR_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={styles.thumbnailBtn}
                onClick={() => scrollToCategory(cat.id)}
                aria-label={`Scroll to ${cat.title}`}
              >
                <div className={styles.thumbnailImgBox}>
                  <img src={cat.photos[0].url} alt={cat.title} className={styles.thumbnailImg} />
                </div>
                <span className={styles.thumbnailLabel}>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className={styles.navDivider} />

          {/* Category Sections */}
          <div className={styles.categoriesWrapper}>
            {TOUR_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                id={`phototour-cat-${cat.id}`}
                className={styles.categorySection}
              >
                {/* Left: Sticky title & subtitle */}
                <div className={styles.categoryLeft}>
                  <h3 className={styles.categoryTitle}>{cat.title}</h3>
                  {cat.subtitle && (
                    <p className={styles.categorySubtitle}>{cat.subtitle}</p>
                  )}
                </div>

                {/* Right: Stacked photos */}
                <div className={styles.categoryPhotos}>
                  {renderCategoryPhotos(cat.photos, cat.title, handlePhotoClick)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function renderCategoryPhotos(photos, categoryTitle, onPhotoClick) {
  if (photos.length === 1) {
    return (
      <button
        type="button"
        className={styles.categoryPhotoBtn}
        onClick={() => onPhotoClick(photos[0].url)}
        aria-label={`View ${categoryTitle} photo`}
      >
        <img src={photos[0].url} alt={photos[0].caption || categoryTitle} className={styles.singlePhoto} />
      </button>
    );
  }

  if (photos.length === 2) {
    return (
      <div className={styles.twoPhotoGrid}>
        {photos.map((photo, idx) => (
          <button
            key={idx}
            type="button"
            className={styles.categoryPhotoBtn}
            onClick={() => onPhotoClick(photo.url)}
            aria-label={`View ${categoryTitle} photo ${idx + 1}`}
          >
            <img src={photo.url} alt={photo.caption || `${categoryTitle} ${idx + 1}`} className={styles.gridPhoto} />
          </button>
        ))}
      </div>
    );
  }

  // 3+ photos: first one large, rest in 2-col grid
  return (
    <div className={styles.multiPhotoWrapper}>
      <button
        type="button"
        className={styles.categoryPhotoBtn}
        onClick={() => onPhotoClick(photos[0].url)}
        aria-label={`View ${categoryTitle} main photo`}
      >
        <img src={photos[0].url} alt={photos[0].caption || categoryTitle} className={styles.singlePhoto} />
      </button>
      <div className={styles.twoPhotoGrid}>
        {photos.slice(1).map((photo, idx) => (
          <button
            key={idx}
            type="button"
            className={styles.categoryPhotoBtn}
            onClick={() => onPhotoClick(photo.url)}
            aria-label={`View ${categoryTitle} photo ${idx + 2}`}
          >
            <img src={photo.url} alt={photo.caption || `${categoryTitle} ${idx + 2}`} className={styles.gridPhoto} />
          </button>
        ))}
      </div>
    </div>
  );
}

PhotoTour.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  photos: PropTypes.array,
  onSelectPhoto: PropTypes.func,
};
