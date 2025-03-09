import { Download, Mail, Star, Users, Rocket } from 'lucide-react';
import { CallToAction } from './CallToAction';

/**
 * This file contains examples of different CallToAction component configurations.
 * These can be imported and used throughout the application.
 */

// Standard waitlist CTA with tall height
export const WaitlistCTA = () => (
    <CallToAction
        title="Ready to boost your productivity?"
        description="Be among the first to experience Vernis AI's powerful productivity tools."
        buttonText="Join our waitlist"
        buttonLink="/waitlist"
        height="tall"
        gradient="from-blue-600 to-indigo-700"
    />
);

// Centered CTA with extra height for more emphasis
export const CenteredWaitlistCTA = () => (
    <CallToAction
        title="Transform your workflow with AI"
        description="Join thousands of professionals already enhancing their productivity with Vernis AI."
        buttonText="Get early access"
        buttonLink="/waitlist"
        height="extra-tall"
        alignment="center"
        gradient="from-purple-600 to-indigo-700"
    />
);

// Demo request CTA with custom icon
export const DemoCTA = () => (
    <CallToAction
        title="See Vernis AI in action"
        description="Schedule a personalized demo with our team to see how Vernis AI can work for your specific needs."
        buttonText="Request a demo"
        buttonLink="/demo"
        icon={<Mail className="h-4 w-4" />}
        gradient="from-green-500 to-teal-600"
    />
);

// Newsletter subscription CTA
export const NewsletterCTA = () => (
    <CallToAction
        title="Stay updated on AI productivity"
        description="Subscribe to our newsletter for the latest tips, features, and AI productivity insights."
        buttonText="Subscribe"
        buttonLink="/newsletter"
        icon={<Mail className="h-4 w-4" />}
        gradient="from-gray-700 to-gray-900"
        buttonVariant="outline"
        buttonColor="bg-transparent text-white border-white hover:bg-white/10"
    />
);

// Enterprise plan CTA
export const EnterpriseCTA = () => (
    <CallToAction
        title="Need a custom enterprise solution?"
        description="Get a tailored plan for your organization with dedicated support and advanced features."
        buttonText="Contact sales"
        buttonLink="/enterprise"
        icon={<Users className="h-4 w-4" />}
        gradient="from-blue-800 to-indigo-900"
        height="tall"
    />
);

// Download app CTA
export const DownloadCTA = () => (
    <CallToAction
        title="Take productivity on the go"
        description="Download our mobile app to stay productive anywhere, anytime."
        buttonText="Download app"
        buttonLink="/download"
        icon={<Download className="h-4 w-4" />}
        gradient="from-orange-500 to-red-600"
        buttonColor="bg-white text-orange-600 hover:bg-orange-50"
    />
);

// Premium upgrade CTA
export const PremiumCTA = () => (
    <CallToAction
        title="Unlock premium features"
        description="Upgrade to our premium plan for advanced automation, unlimited usage, and priority support."
        buttonText="Upgrade now"
        buttonLink="/pricing"
        icon={<Star className="h-4 w-4" />}
        gradient="from-amber-500 to-orange-600"
        height="tall"
        buttonColor="bg-white text-amber-600 hover:bg-amber-50"
    />
);

// Early access CTA
export const EarlyAccessCTA = () => (
    <CallToAction
        title="Be the first to experience the future"
        description="Our beta program is now open. Get exclusive early access to features before they're released."
        buttonText="Join beta program"
        buttonLink="/beta"
        icon={<Rocket className="h-4 w-4" />}
        gradient="from-indigo-500 to-purple-600"
        height="extra-tall"
        alignment="center"
        buttonColor="bg-white text-indigo-600 hover:bg-indigo-50"
    />
);
