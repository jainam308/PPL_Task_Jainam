import PropTypes from 'prop-types';
import { Heart, Share } from 'lucide-react';
import styles from './ListingTitle.module.css';

export default function ListingTitle({ title, onShare, onSave, isSaved }) {
  return (
    <section className={styles.titleSection}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>{title}</h1>

        <div className={styles.actions}>
          <button type="button" className={styles.actionBtn} onClick={onShare}>
            <Share size={16} />
            <span className={styles.actionText}>Share</span>
          </button>
          <button type="button" className={styles.actionBtn} onClick={onSave}>
            <Heart
              size={16}
              fill={isSaved ? '#FF385C' : 'none'}
              color={isSaved ? '#FF385C' : 'currentColor'}
            />
            <span className={styles.actionText}>Save</span>
          </button>
        </div>
      </div>
    </section>
  );
}

ListingTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onShare: PropTypes.func,
  onSave: PropTypes.func,
  isSaved: PropTypes.bool,
};
