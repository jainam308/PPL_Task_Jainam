import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Toast.module.css';

export default function Toast({ message, onClose, duration = 3000 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, onClose, duration]);

  if (!message) return null;

  return (
    <div className={styles.toastWrapper} role="status" aria-live="polite">
      <div className={styles.toastBox}>
        <span>{message}</span>
      </div>
    </div>
  );
}

Toast.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
};
