import React, { useState, useRef, useCallback, useEffect } from 'react';
import styles from './SwipeableLayout.module.css';
import { InstagramIcon, FacebookIcon, GoogleAdsIcon, MetaIcon } from '../common/Icons';
import useCarouselScroll from '../../hooks/useCarouselScroll';

// Import assets
import emailMarketingLogo from '../../assets/logos/Email Marketing.png';

// Client logos for DigitalMarketingCard
import client1Logo from '../../assets/logos/Client 1.png';
import client3Logo from '../../assets/logos/Client 3.png';
import client4Logo from '../../assets/logos/Client 4.png';
import client5Logo from '../../assets/logos/Client 5.png';
import client7Logo from '../../assets/logos/Client 7.png';
import client8Logo from '../../assets/logos/Client 8.png';

// SEO Card assets
import groupIcon from '../../assets/logos/Group Icon.png';
import seoIcon from '../../assets/logos/Seo.png';
import statsIcon from '../../assets/logos/Stats Icon.png';
import seoTitleImage from '../../assets/images/seo_title_image.png';

// Ad Campaigns Card assets
import adCampaignImg from '../../assets/images/Ad campaign.png';
import rupeeIcon from '../../assets/images/Rupee.png';
import filterIcon from '../../assets/images/Filter.png';

// Reputation Card assets
import managementImg from '../../assets/images/Management.png';
import thumbIcon from '../../assets/images/Thumb.png';
import monitorIcon from '../../assets/images/Monitor.png';
import dealIcon from '../../assets/images/Deal.png';

// ============ FEATURE CARD CAROUSEL COMPONENT ============
const FeatureCardCarousel = ({ features }) => {
  const infiniteFeatures = [
    ...features, ...features, ...features, ...features,
    ...features, ...features, ...features, ...features,
  ];

  return (
    <div className={styles.featureCarousel}>
      <div className={styles.featureTrack}>
        {infiniteFeatures.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <img src={feature.icon} alt="" />
            </div>
            <p className={styles.featureText}>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============ CARD 1: DIGITAL MARKETING ============
export const DigitalMarketingCard = () => {
  const topLogos = [
    { id: 't1', name: 'Client 1', logo: client1Logo },
    { id: 't3', name: 'Client 3', logo: client3Logo },
    { id: 't4', name: 'Client 4', logo: client4Logo },
    { id: 't5', name: 'Client 5', logo: client5Logo },
  ];

  const bottomLogos = [
    { id: 'b1', name: 'Client 7', logo: client7Logo },
    { id: 'b2', name: 'Client 8', logo: client8Logo },
  ];

  const displayTopLogos = [...topLogos, ...topLogos];
  const displayBottomLogos = [...bottomLogos, ...bottomLogos, ...bottomLogos];

  const { getCardStyle, touchHandlers } = useCarouselScroll(0.15);

  return (
    <div className={styles.cardContainer}>
      <h2 className={`${styles.sectionTitle} ${styles.digitalMarketingTitle}`}>digital marketing</h2>
      
      <div 
        className={styles.carouselContainer}
        {...touchHandlers}
      >
        <div className={styles.carouselTrack}>
          {displayTopLogos.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={`${styles.logoCard} ${styles.topCard}`}
              style={getCardStyle(index, displayTopLogos.length)}
            >
              {item.logo ? (
                <img src={item.logo} alt={item.name} className={styles.logoImage} />
              ) : (
                <span className={styles.logoPlaceholder}>{item.name}</span>
              )}
            </div>
          ))}
          {displayBottomLogos.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className={`${styles.logoCard} ${styles.bottomCard}`}
              style={getCardStyle(index, displayBottomLogos.length)}
            >
              {item.logo ? (
                <img src={item.logo} alt={item.name} className={styles.logoImage} />
              ) : (
                <span className={styles.logoPlaceholder}>{item.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============ CARD 2: SEO ============
export const SeoCard = () => {
  const features = [
    { icon: groupIcon, text: 'Drive consistent, high-quality organic traffic.' },
    { icon: seoIcon, text: "Boost your website's Google rankings and visibility." },
    { icon: statsIcon, text: 'Improve website conversions through rate optimization.' },
  ];

  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.sectionTitle}>seo</h2>
      <div className={styles.illustrationWrapper}>
        <img src={seoTitleImage} alt="SEO" className={styles.illustration} />
      </div>
      <FeatureCardCarousel features={features} />
    </div>
  );
};

// ============ CARD 3: AD CAMPAIGNS ============
export const AdCampaignsCard = () => {
  const features = [
    { icon: groupIcon, text: 'Reach the right audience with precisely targeted campaigns.' },
    { icon: rupeeIcon, text: 'Maximize ROI through data-driven ad strategy and optimization.' },
    { icon: filterIcon, text: 'Generate quality leads that convert into real customers.' },
  ];

  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.sectionTitle}>ad campaigns</h2>
      <div className={styles.illustrationWrapper}>
        <img src={adCampaignImg} alt="Ad Campaigns" className={styles.illustration} />
      </div>
      <FeatureCardCarousel features={features} />
    </div>
  );
};

// ============ CARD 4: REPUTATION MANAGEMENT ============
export const ReputationCard = () => {
  const features = [
    { icon: thumbIcon, text: 'Build and maintain a positive brand image across digital platforms.' },
    { icon: monitorIcon, text: 'Monitor reviews and feedback to protect your online reputation.' },
    { icon: dealIcon, text: 'Increase trust with authentic engagement and timely responses.' },
  ];

  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.sectionTitle}>online reputation management</h2>
      <div className={styles.illustrationWrapper}>
        <img src={managementImg} alt="Reputation Management" className={styles.illustration} />
      </div>
      <FeatureCardCarousel features={features} />
    </div>
  );
};

// ============ SWIPEABLE LAYOUT MAIN COMPONENT ============
const SwipeableLayout = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  // Interaction Refs
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const touchEndY = useRef(0);
  const touchEndX = useRef(0);

  const currentIndexRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const wheelDeltaAccumulatorRef = useRef(0);
  const lastInteractionTimeRef = useRef(0);
  const lastBoundaryTimeRef = useRef(0);
  const swipeDirectionRef = useRef(null);

  // Sync refs with state
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    isTransitioningRef.current = isTransitioning;
  }, [isTransitioning]);

  const childrenArray = React.Children.toArray(children);
  const totalCards = childrenArray.length;
  const minSwipeDistance = 50;

  const goToNext = useCallback(() => {
    const now = Date.now();
    if (currentIndexRef.current < totalCards - 1 && !isTransitioningRef.current && (now - lastInteractionTimeRef.current > 800)) {
      isTransitioningRef.current = true;
      lastInteractionTimeRef.current = now;
      currentIndexRef.current += 1;
      setIsTransitioning(true);
      setCurrentIndex(prev => prev + 1);
      setTimeout(() => {
        setIsTransitioning(false);
        isTransitioningRef.current = false;
      }, 600);
    }
  }, [totalCards]);

  const goToPrev = useCallback(() => {
    const now = Date.now();
    if (currentIndexRef.current > 0 && !isTransitioningRef.current && (now - lastInteractionTimeRef.current > 800)) {
      isTransitioningRef.current = true;
      lastInteractionTimeRef.current = now;
      currentIndexRef.current -= 1;
      setIsTransitioning(true);
      setCurrentIndex(prev => prev - 1);
      setTimeout(() => {
        setIsTransitioning(false);
        isTransitioningRef.current = false;
      }, 600);
    }
  }, []);

  const isLockedRef = useRef(false);

  // Wheel Scroll Handler
  useEffect(() => {
    const onScroll = (e) => {
      if (!isLockedRef.current) return;

      const now = Date.now();
      const isCoolingDown = (now - lastInteractionTimeRef.current) < 800;
      const isBoundarySettle = (now - lastBoundaryTimeRef.current) < 300;

      const currentIndex = currentIndexRef.current;
      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      const atBottomBoundary = currentIndex === totalCards - 1 && isScrollingDown;
      const atTopBoundary = currentIndex === 0 && isScrollingUp;

      if (atBottomBoundary || atTopBoundary) {
        if (isBoundarySettle) {
          if (e.cancelable) e.preventDefault();
          return;
        }
        wheelDeltaAccumulatorRef.current = 0;
        return;
      }

      if (e.cancelable) e.preventDefault();

      if (isTransitioningRef.current || isCoolingDown) {
        wheelDeltaAccumulatorRef.current = 0;
        return;
      }

      if (wheelDeltaAccumulatorRef.current !== 0 && Math.sign(e.deltaY) !== Math.sign(wheelDeltaAccumulatorRef.current)) {
        wheelDeltaAccumulatorRef.current = 0;
      }

      wheelDeltaAccumulatorRef.current += e.deltaY;

      if (Math.abs(wheelDeltaAccumulatorRef.current) >= 50) {
        if (wheelDeltaAccumulatorRef.current > 0) {
          goToNext();
        } else {
          goToPrev();
        }

        const newIndex = currentIndexRef.current;
        if (newIndex === 0 || newIndex === totalCards - 1) {
          lastBoundaryTimeRef.current = Date.now();
        }

        wheelDeltaAccumulatorRef.current = 0;
      }
    };

    window.addEventListener('wheel', onScroll, { passive: false });
    return () => window.removeEventListener('wheel', onScroll);
  }, [goToNext, goToPrev, totalCards]);

  // Intersection Observer
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasLocked = isLockedRef.current;
        isLockedRef.current = entry.isIntersecting;

        if (entry.isIntersecting && !wasLocked) {
          const rect = entry.boundingClientRect;
          wheelDeltaAccumulatorRef.current = 0;
          lastBoundaryTimeRef.current = 0;

          if (rect.top < -50) {
            setCurrentIndex(totalCards - 1);
            currentIndexRef.current = totalCards - 1;
          } else {
            setCurrentIndex(0);
            currentIndexRef.current = 0;
          }
        }
      },
      {
        threshold: 0,
        rootMargin: "-40% 0px -40% 0px"
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [totalCards]);

  // Touch Handlers
  const handleTouchStart = useCallback((e) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
    touchEndX.current = e.touches[0].clientX;
    swipeDirectionRef.current = null;
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isLockedRef.current) return;

    const currentY = e.touches[0].clientY;
    const currentX = e.touches[0].clientX;
    const totalDeltaY = touchStartY.current - currentY;
    const totalDeltaX = touchStartX.current - currentX;

    if (swipeDirectionRef.current === null && (Math.abs(totalDeltaY) > 8 || Math.abs(totalDeltaX) > 8)) {
      swipeDirectionRef.current = Math.abs(totalDeltaY) > Math.abs(totalDeltaX) ? 'vertical' : 'horizontal';
    }

    if (swipeDirectionRef.current === 'vertical') {
      const isSwipingUp = totalDeltaY > 0;
      const isSwipingDown = totalDeltaY < 0;
      const currentIndex = currentIndexRef.current;

      const atBoundary = (isSwipingUp && currentIndex === totalCards - 1) || (isSwipingDown && currentIndex === 0);

      if (!atBoundary) {
        if (e.cancelable) e.preventDefault();
      }
    }

    touchEndY.current = currentY;
    touchEndX.current = currentX;
  }, [totalCards]);

  const handleTouchEnd = useCallback(() => {
    if (swipeDirectionRef.current === 'vertical') {
      const swipeDistance = touchStartY.current - touchEndY.current;
      if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
          goToNext();
        } else {
          goToPrev();
        }
      }
    }

    touchStartY.current = 0;
    touchEndY.current = 0;
    swipeDirectionRef.current = null;
  }, [goToNext, goToPrev]);

  // Add event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, { passive: false });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd, { passive: false });

      return () => {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return (
    <div className={styles.pageContainer}>
      <header className={styles.fixedHeader}>
        <div className={styles.headingBlock}>
          <h1 className={styles.heading}>
            <span className={styles.line1}>
              Visibility where your
              <svg className={styles.underlineImage} width="198" height="26" viewBox="0 0 198 26" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0.752181 24.3648C24.2033 10.7729 96.3954 -10.9965 197.555 10.6615" stroke="#73BF44" strokeWidth="3" />
              </svg>
            </span>
            <span className={styles.line2}>audience already is</span>
          </h1>
        </div>
        <p className={styles.description}>
          By leveraging social media marketing, content strategy, and platform-specific storytelling, we assist brands in remaining relevant, consistent, and engaged across digital platforms.
        </p>
      </header>

      <div
        className={styles.swipeArea}
        ref={containerRef}
      >
        <div className={styles.cardsWrapper}>
          {childrenArray.map((child, index) => {
            const offset = index - currentIndex;
            return (
              <div
                key={index}
                className={`${styles.card} ${offset === 0 ? styles.active : ''}`}
                style={{
                  transform: `translateY(${offset * 100}%)`,
                  opacity: offset === 0 ? 1 : 0,
                  pointerEvents: offset === 0 ? 'auto' : 'none',
                }}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>

      <footer className={styles.fixedFooter}>
        <div className={styles.footerLine}>
          <span className={styles.footerText}>we get you social on</span>
          <div className={styles.footerIcons}>
            <div className={styles.socialIcon}><InstagramIcon /></div>
            <div className={styles.socialIcon}><FacebookIcon /></div>
          </div>
        </div>
        <div className={styles.footerLine}>
          <span className={styles.footerText}>& promote you using</span>
          <div className={styles.footerIcons}>
            <div className={styles.toolIcon}><GoogleAdsIcon /></div>
            <div className={styles.toolIcon}><MetaIcon /></div>
            <div className={styles.toolIcon}>
              <img src={emailMarketingLogo} alt="Email Marketing" className={styles.footerIconImg} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SwipeableLayout;
