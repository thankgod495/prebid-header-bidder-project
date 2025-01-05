# Prebid.js Header Bidding Implementation (OpenRTB 2.6 Compliant)

## Overview
This project implements **Header Bidding** using **Prebid.js**, following **OpenRTB 2.6** specifications. It integrates multiple **Supply-Side Platforms (SSPs)** to optimize ad revenue and ensures high-performance ad delivery through **lazy loading, dynamic floor pricing, and analytics tracking**.

## Features
- **Prebid.js Setup:** Configures Prebid.js with at least two demand partners.
- **Ad Unit Configuration:** Supports responsive ad units across desktop and mobile.
- **Bid Adapter Integration:** Implements and tests multiple Prebid adapters.
- **Dynamic Floor Pricing:** Adjusts floor prices based on ad size and device type.
- **Analytics Tracking:** Sends bid metrics to Google Analytics.
- **Error Handling:** Logs and handles failed or invalid SSP bids.
- **Fallback Ads:** Displays a fallback ad when no valid bids are received.
- **Bid Validation:** Ensures compliance with OpenRTB standards.
- **Lazy Loading Ads:** Loads ads only when they are in the viewport.
- **CI/CD Pipeline Integration:** Uses GitHub Actions for automated deployments.


## Installation
This project does **not** require `npm install`, as it uses Prebid.js via CDN. However, if you want to bundle the JavaScript using Webpack, follow these steps:

```sh
# Initialize a Node.js project
npm init -y

# Install Webpack (Optional: Only needed if you use module bundling)
npm install webpack webpack-cli webpack-dev-server --save-dev
```

## Usage
1. **Include Prebid.js in your webpage**
   ```html
   <script async src="https://acdn.adnxs.com/prebid/not-for-prod/1/prebid.js"></script>
   ```
2. **Modify `adUnits.js` to define your ad placements.**
3. **Ensure Google Analytics tracking is enabled** in `analytics.js`.
4. **Run the project** (if using a local server):
   ```sh
   npx webpack
   ```

## Deployment
This project includes a **CI/CD pipeline using GitHub Actions**:
- Automatically builds and deploys changes.
- Ensures **linting and validation** before deployment.
- Deploys optimized files to the server/CDN.

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Added feature X'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request.

## License
This project is licensed under the **MIT License**.

