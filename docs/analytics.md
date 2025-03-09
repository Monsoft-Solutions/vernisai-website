# Analytics Implementation

This document outlines the analytics implementation for the VernisAI website.

## Overview

The website uses two analytics platforms:

1. **Google Analytics 4** - For standard web analytics metrics
2. **Microsoft Clarity** - For heatmaps, session recordings, and user behavior insights

## Google Analytics

Google Analytics 4 (GA4) is implemented via a script tag in the `index.html` file. It provides:

- Page views and navigation tracking
- User demographics and acquisition data
- Event tracking
- Conversion tracking
- Custom reporting

### Configuration

The GA4 tracking ID is `G-87KHDLQY3X`. The script is loaded asynchronously to minimize impact on page load performance.

### Custom Events

To track custom events in Google Analytics, use the `trackEvent` function from the analytics utility:

```typescript
import { trackEvent } from '../lib/analytics';

// Example: Track a button click
trackEvent('button_click', {
    button_name: 'signup_button',
    page: window.location.pathname,
});
```

## Microsoft Clarity

Microsoft Clarity is implemented using the official NPM package `@microsoft/clarity`. It provides:

- Heatmaps showing where users click, scroll, and move their cursor
- Session recordings to watch user interactions
- Insights on rage clicks, dead clicks, and excessive scrolling
- Integration with Google Analytics

### Configuration

The Clarity project ID is `qlmpaty319`. Clarity is initialized in the `main.tsx` file when the application starts.

### Privacy Considerations

Both analytics implementations respect user privacy:

- No personally identifiable information (PII) is collected
- IP anonymization is enabled
- Data retention policies are set to the minimum necessary
- Users can opt-out via browser settings or cookie consent mechanisms

## Adding Cookie Consent

To comply with privacy regulations like GDPR and CCPA, a cookie consent mechanism should be implemented. Consider using a library like `react-cookie-consent` or `cookieconsent` to add this functionality.

## Viewing Analytics Data

- **Google Analytics**: Access the dashboard at [Google Analytics](https://analytics.google.com/)
- **Microsoft Clarity**: Access the dashboard at [Microsoft Clarity](https://clarity.microsoft.com/)

## Troubleshooting

If analytics data is not appearing:

1. Check browser console for errors
2. Verify that ad blockers or privacy extensions aren't blocking the scripts
3. Ensure the correct tracking IDs are being used
4. Wait 24-48 hours for data to appear in the dashboards
