import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';
import styles from './MoreStaysNearby.module.css';

const STAYS_PAGE_1 = [
  {
    id: 's1',
    title: 'Beautiful Studio with a view to die for',
    price: '₹23,600',
    rating: 4.91,
    image: '/images/stays/stay1.png',
  },
  {
    id: 's2',
    title: 'NAQAB - 1bhk with private pool',
    price: '₹42,218',
    rating: 4.95,
    image: '/images/stays/stay2.png',
  },
  {
    id: 's3',
    title: 'Greentique Luxury Flat with plunge pool, Calangute',
    price: '₹44,506',
    rating: 4.94,
    image: '/images/stays/stay3.png',
  },
  {
    id: 's4',
    title: 'The Tropical Studio | 5 mins to Beach',
    price: '₹22,824',
    rating: 4.96,
    image: '/images/stays/stay4.png',
  },
  {
    id: 's5',
    title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
    price: '₹39,942',
    rating: 4.95,
    image: '/images/stays/stay5.png',
  },
];

const STAYS_PAGE_2 = [
  {
    id: 's6',
    title: 'Kanso by Earthen Window | Jacuzzi | Terrace | Pool',
    price: '₹45,648',
    rating: 5.0,
    image: '/images/stays/stay6.png',
  },
  {
    id: 's7',
    title: 'Luxury Apt | Private Pool | 6 Mins from Beach',
    price: '₹48,786',
    rating: 4.93,
    image: '/images/stays/stay7.png',
  },
  {
    id: 's8',
    title: 'Serendipity Cottage - Calm Stay in Calangute-Baga.',
    price: '₹22,824',
    rating: 4.92,
    image: '/images/stays/stay8.png',
  },
];

export default function MoreStaysNearby() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;
  const currentList = currentPage === 1 ? STAYS_PAGE_1 : STAYS_PAGE_2;

  return (
    <section className={styles.section}>
      <div className={styles.headerRow}>
        <h3 className={styles.heading}>More stays nearby</h3>

        <div className={styles.controlsRow}>
          <span className={styles.pageCounter}>{currentPage} / {totalPages}</span>
          <button
            type="button"
            className={styles.navBtn}
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            aria-label="Previous page"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            className={styles.navBtn}
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            aria-label="Next page"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className={styles.cardsGrid}>
        {currentList.map((stay) => (
          <div key={stay.id} className={styles.stayCard}>
            <div className={styles.imageBox}>
              <img src={stay.image} alt={stay.title} />
              <button type="button" className={styles.wishlistBtn} aria-label="Add to wishlist">
                <Heart size={16} fill="rgba(0,0,0,0.4)" color="#FFFFFF" />
              </button>
            </div>

            <div className={styles.cardContent}>
              <h4 className={styles.title}>{stay.title}</h4>
              <div className={styles.metaRow}>
                <span className={styles.price}>{stay.price}</span>
                <div className={styles.ratingBox}>
                  <Star size={12} fill="#222222" color="#222222" />
                  <span>{stay.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
