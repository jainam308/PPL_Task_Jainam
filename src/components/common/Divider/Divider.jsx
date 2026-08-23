import PropTypes from 'prop-types';
import styles from './Divider.module.css';

export default function Divider({ className = '' }) {
  return <hr className={`${styles.divider} ${className}`} />;
}

Divider.propTypes = {
  className: PropTypes.string,
};
