import PropTypes from 'prop-types';
import { Star } from 'lucide-react';
import styles from './StarRating.module.css';

export default function StarRating({ rating = 5, maxStars = 5, size = 14, className = '' }) {
  return (
    <div className={`${styles.starRating} ${className}`}>
      {Array.from({ length: maxStars }).map((_, index) => (
        <Star
          key={index}
          size={size}
          className={index < Math.floor(rating) ? styles.filled : styles.empty}
          fill={index < Math.floor(rating) ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number,
  maxStars: PropTypes.number,
  size: PropTypes.number,
  className: PropTypes.string,
};
