import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight } from 'lucide-react';
import Divider from '../common/Divider/Divider';
import styles from './Description.module.css';

export default function Description({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={styles.descriptionSection}>
      {/* Translation notice box */}
      <div className={styles.translationNotice}>
        <span>Some info has been automatically translated. </span>
        <button type="button" className={styles.showOriginalBtn}>
          Show original
        </button>
      </div>

      {/* Description text */}
      <div className={`${styles.textContainer} ${isExpanded ? styles.expanded : styles.truncated}`}>
        <p>{text}</p>
      </div>

      {/* Show more button */}
      {!isExpanded && (
        <button
          type="button"
          className={styles.showMoreBtn}
          onClick={() => setIsExpanded(true)}
        >
          <span>Show more</span>
          <ChevronRight size={16} />
        </button>
      )}

      <Divider />
    </section>
  );
}

Description.propTypes = {
  text: PropTypes.string.isRequired,
};
