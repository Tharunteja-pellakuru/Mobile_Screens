import React from 'react';
import PortfolioSection from './PortfolioSection';
import SwipeableLayout, { DigitalMarketingCard, SeoCard, AdCampaignsCard, ReputationCard } from '../MarketingComponents/SwipeableLayout';
import Background from './Background';
import './PortfolioContainer.css';

const PortfolioContainer = () => {
    return (
        <div className="portfolio-container" style={{ width: '100%', position: 'relative' }}>
            <Background />
            {/* <div className="portfolio-hero">
                <h1 className="portfolio-hero-title">
                    <span className="title-line-1">
                        Websites built to <span className="normal-text">work,</span>
                        <svg className="underline-svg" width="198" height="26" viewBox="0 0 198 26" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M0.752181 24.3648C24.2033 10.7729 96.3954 -10.9965 197.555 10.6615" stroke="#73BF44" strokeWidth="3"/>
                        </svg>
                    </span>
                    <span className="title-line-2">scale, and last</span>
                </h1>
            </div> */}
            {/* <div id="portfolio-section-container">
                <PortfolioSection />
            </div> */}
            <div id="services-showcase-container">
                <SwipeableLayout>
                    <DigitalMarketingCard />
                    <SeoCard />
                    <AdCampaignsCard />
                    <ReputationCard />
                </SwipeableLayout>
            </div>
        </div>
    );
};

export default PortfolioContainer;
