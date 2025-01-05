import { requestBids } from './app.js';

// Checks if an Element is in Viewport for Lazy Loading Ads
export const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  // Lazy Load Ads Only When in Viewport
  export const lazyLoadAds = () => {
    const adSlot = document.getElementById('banner-ad-slot');
    if (isElementInViewport(adSlot)) {
      requestBids(); // Trigger requestBids when ad is in viewport
    }
  };
  