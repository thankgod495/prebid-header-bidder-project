// Track Bids Analytics (e.g., using Google Analytics)
export const trackBids = (validBids) => {
    if (!window.gtag) {
      console.warn('Google Analytics is not initialized.');
      return;
    }
  
    validBids.forEach((bid) => {
      console.log(`Tracking bid from ${bid.bidder}: $${bid.price}`);
  
      window.gtag('event', 'ad_bid', {
        event_category: 'Header Bidding',
        event_label: bid.bidder,
        value: bid.price,  
        latency: bid.timeToRespond,  
        currency: 'USD'
      });
    });
};
  
  