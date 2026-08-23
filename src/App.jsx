import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import ListingTitle from './components/listing/ListingTitle';
import PhotoHero from './components/gallery/PhotoHero';
import ListingNav from './components/listing/ListingNav';
import HostInfo from './components/listing/HostInfo';
import Description from './components/listing/Description';
import SleepingArrangements from './components/listing/SleepingArrangements';
import Amenities from './components/listing/Amenities';
import CalendarSection from './components/listing/CalendarSection';
import BookingCard from './components/booking/BookingCard';
import ReviewSummary from './components/reviews/ReviewSummary';
import MapSection from './components/map/MapSection';
import HostSection from './components/listing/HostSection';
import ThingsToKnow from './components/things-to-know/ThingsToKnow';
import MoreStaysNearby from './components/listing/MoreStaysNearby';
import PhotoTour from './components/gallery/PhotoTour';
import Lightbox from './components/gallery/Lightbox';
import Toast from './components/common/Toast/Toast';

// Mock static data
import listingData from './data/listing.json';
import amenitiesData from './data/amenities.json';
import reviewsData from './data/reviews.json';
import hostData from './data/host.json';

import styles from './App.module.css';

export default function App() {
  const [isSaved, setIsSaved] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [targetCategory, setTargetCategory] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('photos');
  const [showStickyNav, setShowStickyNav] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
    }
    setToastMessage('Share options');
  };

  const handleSave = () => {
    setIsSaved((prev) => {
      const nextState = !prev;
      setToastMessage(nextState ? 'Saved to wishlist' : 'Removed from wishlist');
      return nextState;
    });
  };

  const handleReserve = () => {
    setToastMessage("You won't be charged yet");
  };

  // Scroll listener for sticky nav & active tab highlighting matching target site
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowStickyNav(scrollPosition > 450);

      const tabs = [
        { id: 'photos' },
        { id: 'amenities' },
        { id: 'reviews' },
        { id: 'location' },
      ];

      for (let i = tabs.length - 1; i >= 0; i--) {
        const el = document.getElementById(tabs[i].id);
        if (el && scrollPosition >= el.offsetTop - 130) {
          setActiveTab(tabs[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabId) => {
    const targetId = tabId.toLowerCase();
    setActiveTab(targetId);
    if (targetId === 'photos') {
      const el = document.getElementById('photos');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.appContainer}>
      {/* Top Header */}
      <Header />

      {/* Sticky Secondary Nav Bar */}
      <ListingNav
        activeTab={activeTab}
        onTabClick={handleTabClick}
        price={listingData.pricing.totalPrice}
        rating={listingData.rating}
        reviewsCount={listingData.reviewsCount}
        onReserveClick={handleReserve}
        isVisible={showStickyNav}
      />

      {/* Main Page Layout Container */}
      <main className={styles.mainContent}>
        {/* Title Section */}
        <ListingTitle
          title={listingData.title}
          onShare={handleShare}
          onSave={handleSave}
          isSaved={isSaved}
        />

        {/* Hero Photo Grid */}
        <PhotoHero
          photos={listingData.photos}
          onShowAllPhotos={() => {
            setTargetCategory(null);
            setIsPhotoTourOpen(true);
          }}
          onSelectPhoto={(index, category) => {
            setTargetCategory(category);
            setIsPhotoTourOpen(true);
          }}
        />

        {/* 2-Column Main Section (Up to CalendarSection) */}
        <div className={styles.twoColumnGrid}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <HostInfo
              propertyType={listingData.type}
              location={listingData.shortLocation}
              specs={listingData.specs}
              rating={listingData.rating}
              reviewsCount={listingData.reviewsCount}
              isGuestFavorite={listingData.isGuestFavorite}
              guestFavoriteText={listingData.guestFavoriteText}
              host={hostData}
              highlights={listingData.highlights}
            />

            <Description text={listingData.description} />

            <SleepingArrangements arrangements={listingData.sleepingArrangements} />

            <Amenities amenities={amenitiesData} />

            <CalendarSection locationName="Candolim" />
          </div>

          {/* Right Column (Sticky Booking Sidebar) */}
          <div className={styles.rightColumn}>
            <BookingCard
              pricing={listingData.pricing}
              dates={listingData.defaultDates}
            />
          </div>
        </div>

        {/* Full-width sections after Calendar (No side-by-side reserve box) */}
        <div className={styles.fullWidthSections}>
          <ReviewSummary reviewsData={reviewsData} />

          <MapSection locationName={listingData.location} />

          <HostSection host={hostData} />

          <ThingsToKnow />

          <MoreStaysNearby />
        </div>
      </main>

      {/* Overlays */}
      {/* 1. Photo Tour Full Screen Gallery */}
      <PhotoTour
        isOpen={isPhotoTourOpen}
        onClose={() => setIsPhotoTourOpen(false)}
        photos={listingData.photos}
        initialCategory={targetCategory}
        onSelectPhoto={(index) => {
          setIsPhotoTourOpen(false);
          setLightboxIndex(index);
        }}
        onShare={handleShare}
        onSave={handleSave}
        isSaved={isSaved}
      />

      {/* 2. Lightbox Single Photo Viewer */}
      <Lightbox
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        photos={listingData.photos}
        currentIndex={lightboxIndex || 0}
        onIndexChange={(newIndex) => setLightboxIndex(newIndex)}
      />

      {/* 3. Bottom Toast Popup Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
