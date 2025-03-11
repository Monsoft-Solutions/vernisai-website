import { Button } from './ui/button';
import { trackEvent } from '../lib/analytics';

/**
 * Example component demonstrating how to track custom events
 * This is just for demonstration purposes and can be removed
 */
export function AnalyticsExample() {
    const handleButtonClick = () => {
        // Track a custom event when the button is clicked
        trackEvent('button_click', {
            button_name: 'example_button',
            page: window.location.pathname,
        });
    };

    return (
        <div className="my-4 rounded-lg bg-gray-100 p-4">
            <h3 className="mb-2 text-lg font-medium">Analytics Example</h3>
            <p className="mb-4 text-gray-700">
                This component demonstrates how to track custom events with our
                analytics setup. Click the button below to trigger a custom
                event.
            </p>
            <Button onClick={handleButtonClick}>Track Custom Event</Button>
            <p className="mt-2 text-sm text-gray-500">
                (Check the console and your analytics dashboard to see the
                event)
            </p>
        </div>
    );
}
