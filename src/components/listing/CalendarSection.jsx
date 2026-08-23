import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';
import styles from './CalendarSection.module.css';

export default function CalendarSection({ locationName = 'Candolim' }) {
  const selectedRange = { from: 18, to: 23 };

  // Helper to generate days for October 2026 (Starts Thu, 31 days)
  const getOctoberDays = () => {
    const blanks = [null, null, null, null]; // Sun, Mon, Tue, Wed blank
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    return [...blanks, ...days];
  };

  // Helper to generate days for November 2026 (Starts Sun, 30 days)
  const getNovemberDays = () => {
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    return days;
  };

  const octDays = getOctoberDays();
  const novDays = getNovemberDays();

  const isSelectedFrom = (dayNum) => selectedRange.from === dayNum;
  const isSelectedTo = (dayNum) => selectedRange.to === dayNum;
  const isInRange = (dayNum) =>
    dayNum > selectedRange.from && dayNum < selectedRange.to;

  return (
    <section className={styles.section} id="calendar">
      <h3 className={styles.heading}>5 nights in {locationName}</h3>
      <p className={styles.subheading}>18 Oct 2026 - 23 Oct 2026</p>

      {/* Side-by-Side Dual Month Container */}
      <div className={styles.dualMonthWrapper}>
        {/* Month 1: October 2026 */}
        <div className={styles.monthCard}>
          <div className={styles.monthHeader}>
            <button
              type="button"
              className={styles.navBtn}
              aria-label="Previous month"
            >
              <ChevronLeft size={18} />
            </button>
            <span className={styles.monthTitle}>October 2026</span>
            <div className={styles.placeholderSpace} />
          </div>

          <div className={styles.daysHeaderGrid}>
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
          </div>

          <div className={styles.daysGrid}>
            {octDays.map((day, idx) => {
              if (!day) return <div key={`blank-${idx}`} className={styles.emptyCell} />;
              const isStart = isSelectedFrom(day);
              const isEnd = isSelectedTo(day);
              const isMiddle = isInRange(day);

              return (
                <div
                  key={`oct-${day}`}
                  className={`${styles.dayCellWrapper} ${isMiddle ? styles.rangeMiddle : ''} ${
                    isStart ? styles.rangeStart : ''
                  } ${isEnd ? styles.rangeEnd : ''}`}
                >
                  <span
                    className={`${styles.dayNum} ${
                      isStart || isEnd ? styles.selectedDayNum : ''
                    }`}
                  >
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Month 2: November 2026 */}
        <div className={styles.monthCard}>
          <div className={styles.monthHeader}>
            <div className={styles.placeholderSpace} />
            <span className={styles.monthTitle}>November 2026</span>
            <button
              type="button"
              className={styles.navBtn}
              aria-label="Next month"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className={styles.daysHeaderGrid}>
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
          </div>

          <div className={styles.daysGrid}>
            {novDays.map((day) => {
              const isDisabled = day >= 18;
              return (
                <div
                  key={`nov-${day}`}
                  className={`${styles.dayCellWrapper} ${isDisabled ? styles.disabledDayCell : ''}`}
                >
                  <span className={isDisabled ? styles.disabledDayNum : styles.dayNum}>
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Footer Controls Row */}
      <div className={styles.bottomControlsRow}>
        <button type="button" className={styles.keyboardBtn} aria-label="Toggle keyboard shortcuts">
          <Keyboard size={18} />
        </button>

        <button type="button" className={styles.clearDatesBtn}>
          Clear dates
        </button>
      </div>
    </section>
  );
}

CalendarSection.propTypes = {
  locationName: PropTypes.string,
};
