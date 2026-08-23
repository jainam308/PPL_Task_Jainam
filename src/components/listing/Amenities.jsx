import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Bath,
  Calendar,
  Car,
  Coffee,
  DoorOpen,
  Dumbbell,
  Flame,
  Key,
  Laptop,
  Moon,
  PawPrint,
  Shirt,
  Sparkles,
  Sun,
  Tv,
  Utensils,
  Video,
  Waves,
  Wifi,
  Wind,
  Wine
} from 'lucide-react';
import Divider from '../common/Divider/Divider';
import Modal from '../common/Modal/Modal';
import styles from './Amenities.module.css';

export default function Amenities({ amenities = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getAmenityIcon = (iconName, unavailable) => {
    if (unavailable) {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#222222"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" opacity="0.3" />
          <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" />
        </svg>
      );
    }
    switch (iconName) {
      case 'utensils':
        return <Utensils size={24} strokeWidth={1.5} />;
      case 'wifi':
        return <Wifi size={24} strokeWidth={1.5} />;
      case 'laptop':
        return <Laptop size={24} strokeWidth={1.5} />;
      case 'car':
        return <Car size={24} strokeWidth={1.5} />;
      case 'waves':
        return <Waves size={24} strokeWidth={1.5} />;
      case 'bath':
        return <Bath size={24} strokeWidth={1.5} />;
      case 'paw':
        return <PawPrint size={24} strokeWidth={1.5} />;
      case 'video':
        return <Video size={24} strokeWidth={1.5} />;
      case 'wind':
        return <Wind size={24} strokeWidth={1.5} />;
      case 'tv':
        return <Tv size={24} strokeWidth={1.5} />;
      case 'sparkles':
        return <Sparkles size={24} strokeWidth={1.5} />;
      case 'key':
        return <Key size={24} strokeWidth={1.5} />;
      case 'calendar':
        return <Calendar size={24} strokeWidth={1.5} />;
      case 'dumbbell':
        return <Dumbbell size={24} strokeWidth={1.5} />;
      case 'sun':
        return <Sun size={24} strokeWidth={1.5} />;
      case 'door':
        return <DoorOpen size={24} strokeWidth={1.5} />;
      case 'wine':
        return <Wine size={24} strokeWidth={1.5} />;
      case 'coffee':
        return <Coffee size={24} strokeWidth={1.5} />;
      case 'flame':
        return <Flame size={24} strokeWidth={1.5} />;
      case 'moon':
        return <Moon size={24} strokeWidth={1.5} />;
      case 'shirt':
        return <Shirt size={24} strokeWidth={1.5} />;
      default:
        return <Utensils size={24} strokeWidth={1.5} />;
    }
  };

  // Flatten featured items for main page section (top 10 items)
  const featuredList = [
    { id: 'f1', name: 'Kitchen', icon: 'utensils' },
    { id: 'f2', name: 'Wifi', icon: 'wifi' },
    { id: 'f3', name: 'Dedicated workspace', icon: 'laptop' },
    { id: 'f4', name: 'Free parking on premises', icon: 'car' },
    { id: 'f5', name: 'Pool', icon: 'waves' },
    { id: 'f6', name: 'Hot tub', icon: 'bath' },
    { id: 'f7', name: 'Pets allowed', icon: 'paw' },
    { id: 'f8', name: 'Exterior security cameras on property', icon: 'video' },
    { id: 'f9', name: 'Carbon monoxide alarm', icon: 'shield-off', unavailable: true },
    { id: 'f10', name: 'Smoke alarm', icon: 'shield-off', unavailable: true },
  ];

  return (
    <section className={styles.section} id="amenities">
      <h3 className={styles.heading}>What this place offers</h3>

      <div className={styles.grid}>
        {featuredList.map((item) => (
          <div
            key={item.id}
            className={`${styles.amenityItem} ${item.unavailable ? styles.unavailable : ''}`}
          >
            <div className={styles.icon}>{getAmenityIcon(item.icon, item.unavailable)}</div>
            <span className={styles.name}>{item.name}</span>
          </div>
        ))}
      </div>

      <div className={styles.btnWrapper}>
        <button
          type="button"
          className={styles.showAllBtn}
          onClick={() => setIsModalOpen(true)}
        >
          Show all 50 amenities
        </button>
      </div>

      {/* Amenities Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="What this place offers"
      >
        <div className={styles.modalContent}>
          {amenities.map((catGroup) => (
            <div key={catGroup.category} className={styles.categoryBlock}>
              <h4 className={styles.categoryTitle}>{catGroup.category}</h4>
              <div className={styles.categoryItemsList}>
                {catGroup.items.map((item) => (
                  <div key={item.id} className={styles.modalAmenityRow}>
                    <div className={styles.modalIconBox}>
                      {getAmenityIcon(item.icon, item.unavailable)}
                    </div>
                    <span
                      className={`${styles.modalItemName} ${
                        item.unavailable ? styles.strikethroughText : ''
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal>

      <Divider className={styles.bottomDivider} />
    </section>
  );
}

Amenities.propTypes = {
  amenities: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired,
    })
  ),
};
