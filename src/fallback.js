// Load Fallback Ad if No Valid Bids Are Received
export const loadFallbackAd = () => {
    document.getElementById('banner-ad-slot').innerHTML = '<img src="/fallback-ad.jpg" alt="Fallback Ad">';
};
  