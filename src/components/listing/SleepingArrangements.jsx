import PropTypes from 'prop-types';
import Divider from '../common/Divider/Divider';
import styles from './SleepingArrangements.module.css';

export default function SleepingArrangements({ arrangements = [] }) {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Where you&apos;ll sleep</h3>

      <div className={styles.grid}>
        {arrangements.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={item.image || 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80'}
                alt={item.roomName}
              />
            </div>
            <h4 className={styles.roomName}>{item.roomName}</h4>
            <p className={styles.bedType}>{item.bedType}</p>
          </div>
        ))}
      </div>

      <Divider />
    </section>
  );
}

SleepingArrangements.propTypes = {
  arrangements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      roomName: PropTypes.string.isRequired,
      bedType: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ),
};
