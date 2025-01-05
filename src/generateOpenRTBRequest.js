import { adUnits } from './ad-units.js';
import { getDynamicFloorPrice } from './floor-price.js';

// Generate OpenRTB request based on the ad units and other dynamic values
export const generateOpenRTBRequest = () => {
  return {
    id: Math.random().toString(36).substring(7), // Random ID for the request
    imp: adUnits.map(unit => ({
      id: unit.code,
      banner: {
        format: unit.mediaTypes.banner.sizes.map(size => ({ w: size[0], h: size[1] }))
      },
      bidfloor: getDynamicFloorPrice(unit.mediaTypes.banner.sizes[0]), // Get dynamic floor price
      ext: { prebid: { storedrequest: { id: unit.code } } } // Prebid-specific stored request ID
    })),
    site: {
      page: window.location.href, // Current page URL
      domain: window.location.hostname // Current page domain
    },
    device: {
      ua: navigator.userAgent, // User agent string
      ip: '192.168.1.1' // Placeholder IP (replace with dynamic IP if available)
    },
    user: {
      id: 'user-unique-id' // Example user ID, integrate with your identity framework if available
    }
  };
};
