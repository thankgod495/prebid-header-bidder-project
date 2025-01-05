// Get Dynamic Floor Price Based on Ad Size
export const getDynamicFloorPrice = (size) => {
    const floorPrices = {
      '300x250': 0.50,
      '728x90': 0.75
    };
    return floorPrices[`${size[0]}x${size[1]}`] || 0.30; // Default fallback price
  };
  