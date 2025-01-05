import { getDynamicFloorPrice } from './floor-price.js';

// Prebid.js Setup Configuration
export const initPrebid = () => {
    pbjs.setConfig({
      priceGranularity: 'medium',
      enableSendAllBids: true,
      bidderTimeout: 1000,
      floors: {
        currency: 'USD',
        values: (size) => getDynamicFloorPrice(size)
      }
    });
  };
  