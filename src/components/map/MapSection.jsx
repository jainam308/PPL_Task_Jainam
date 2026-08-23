import { useState } from 'react';
import PropTypes from 'prop-types';
import { Home, Search, Plus, Minus } from 'lucide-react';
import Divider from '../common/Divider/Divider';
import styles from './MapSection.module.css';

export default function MapSection({ locationName = 'Candolim, Goa, India' }) {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 1.8));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.8));

  return (
    <section className={styles.locationSectionContainer} id="location">
      <div className={styles.sectionHeaderBox}>
        <h3 className={styles.sectionTitleHeader}>Where you&apos;ll be</h3>
        <p className={styles.locationSubText}>{locationName}</p>
      </div>

      {/* Interactive Map Visual Stage */}
      <div className={styles.mapCanvasWrapper}>
        <div
          className={styles.mapTransformStage}
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <svg className={styles.svgMapGraphic} viewBox="0 0 1000 600" preserveAspectRatio="none">
            <rect width="1000" height="600" fill="#eaf3e6" />
            <defs>
              <pattern id="locationGridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d5e5d5" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="1000" height="600" fill="url(#locationGridPattern)" />

            {/* Sea area */}
            <path d="M 0 0 L 420 0 L 280 600 L 0 600 Z" fill="#b6d7e8" />

            {/* Neighborhood circular indicators */}
            <circle cx="350" cy="240" r="45" fill="#cadfc5" opacity="0.6" />
            <circle cx="640" cy="320" r="60" fill="#cadfc5" opacity="0.6" />
          </svg>

          {/* Central Animated Pin */}
          <div className={styles.centerPinPositioner}>
            <div className={styles.outerGlowPulseRing}>
              <div className={styles.homeIconBadgeCircle}>
                <Home size={22} strokeWidth={2.2} />
              </div>
            </div>
          </div>
        </div>

        {/* Top-Left Search Button */}
        <button
          type="button"
          className={styles.mapSearchControlBtn}
          aria-label="Search area"
        >
          <Search size={16} color="#1F2937" />
        </button>

        {/* Top-Right Zoom Control Stack */}
        <div className={styles.zoomControlsVerticalStack}>
          <button
            type="button"
            className={styles.zoomControlButton}
            onClick={handleZoomIn}
            title="Zoom in"
            aria-label="Zoom in"
          >
            <Plus size={16} color="#1F2937" />
          </button>
          <button
            type="button"
            className={styles.zoomControlButton}
            onClick={handleZoomOut}
            title="Zoom out"
            aria-label="Zoom out"
          >
            <Minus size={16} color="#1F2937" />
          </button>
        </div>
      </div>

      <p className={styles.exactLocationDisclaimerText}>
        Exact location will be provided after booking.
      </p>

      {/* Neighbourhood Highlights */}
      <div className={styles.neighbourhoodDetailsWrapper}>
        <h4 className={styles.neighbourhoodTitleText}>Neighbourhood highlights</h4>
        <p className={styles.neighbourhoodDescriptionText}>
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>
        <button type="button" className={styles.showMoreDetailsBtn}>
          <span>Show more</span>
          <span>&gt;</span>
        </button>
      </div>

      <Divider />
    </section>
  );
}

MapSection.propTypes = {
  locationName: PropTypes.string,
};
