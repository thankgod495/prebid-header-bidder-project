import { initPrebid } from './prebid-config.js';
import { adUnits } from './ad-units.js';
import { generateOpenRTBRequest } from './generateOpenRTBRequest.js';
import { trackBids } from './analytics.js';
import { handleBidErrors } from './error-handling.js';
import { lazyLoadAds } from './lazy-load.js';
import { loadFallbackAd } from './fallback.js';

// Initialize Prebid.js
initPrebid();

// Request Bids from SSPs using OpenRTB 2.6 Format
export const requestBids = () => {
  const bidRequest = generateOpenRTBRequest();
  console.log('Generated OpenRTB 2.6 Request:', bidRequest);

  pbjs.requestBids({
    bidsBackHandler: (bidResponses) => {
      const validBids = Object.values(bidResponses).filter(validateBid);

      if (validBids.length > 0) {
        console.log('Valid bids:', validBids);
        trackBids(validBids);
      } else {
        console.error('No valid bids after validation.');
        loadFallbackAd();
      }
    },
    errorHandler: handleBidErrors,
  });
};

// Validate Bid 
const validateBid = (bid) => {
  return bid.price >= 0.30 && bid.creative_type === 'banner';
};

// Lazy load ads
lazyLoadAds();
