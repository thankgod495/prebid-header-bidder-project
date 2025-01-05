export const adUnits = [
    {
      code: 'banner-ad-slot',
      mediaTypes: {
        banner: {
          sizes: [[300, 250], [728, 90]]
        }
      },
      bids: [
        {
          bidder: 'appnexus',
          params: {
            placementId: '12345678'
          }
        },
        {
          bidder: 'rubicon',
          params: {
            accountId: '7890',
            siteId: '1111',
            zoneId: '2222'
          }
        }
      ]
    }
  ];
  