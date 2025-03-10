import { Link } from 'react-router-dom';
import { Logo } from './ui/logo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
    Twitter,
    Github,
    Linkedin,
    Mail,
    Youtube,
    ArrowRight,
    Sparkles,
} from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-background w-full border-t px-6">
            <div className="mx-auto max-w-7xl">
                {/* Newsletter Section */}
                <div className="border-b py-10">
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold tracking-tight">
                                Stay updated with VernisAI
                            </h3>
                            <p className="text-muted-foreground">
                                Subscribe to our newsletter for updates, tips,
                                and exclusive insights about AI workflow
                                automation.
                            </p>
                            <p className="text-muted-foreground text-xs">
                                By subscribing, you agree to our{' '}
                                <Link
                                    to="/privacy"
                                    className="text-primary hover:underline"
                                >
                                    Privacy Policy
                                </Link>
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full"
                                aria-label="Email address"
                            />
                            <Button className="shrink-0">
                                Subscribe{' '}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="py-10">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12">
                        {/* Brand Section */}
                        <div className="space-y-4 sm:col-span-2 lg:col-span-4">
                            <Logo logoSize="lg" />
                            <p className="text-muted-foreground max-w-xs text-sm">
                                AI-Powered No-Code Workflow Automation that
                                adapts to your business needs.
                            </p>
                            <div className="mt-1 flex gap-4">
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-muted-foreground hover:text-foreground"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-muted-foreground hover:text-foreground"
                                    aria-label="GitHub"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-muted-foreground hover:text-foreground"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-muted-foreground hover:text-foreground"
                                    aria-label="YouTube"
                                >
                                    <Youtube className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        {/* Links Sections - Product and Resources */}
                        <div className="grid grid-cols-2 gap-8 sm:col-span-2 md:grid-cols-4 lg:col-span-8">
                            <div className="space-y-4">
                                <h4 className="text-sm font-medium">Product</h4>
                                <ul className="space-y-3 text-sm">
                                    <li>
                                        <Link
                                            to="/features"
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            Features
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/use-cases"
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            Use Cases
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/pricing"
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/waitlist"
                                            className="text-muted-foreground hover:text-foreground flex items-center gap-1"
                                        >
                                            Waitlist{' '}
                                            <Sparkles className="h-3 w-3" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-medium">
                                    Resources
                                </h4>
                                <ul className="space-y-3 text-sm">
                                    <li>
                                        <Link
                                            to="/documentation"
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            Documentation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/blog"
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/guides"
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            Guides
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/faq"
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-medium">Company</h4>
                                <ul className="space-y-3 text-sm">
                                    <li>
                                        <Link
                                            to="/about"
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/careers"
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            Careers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/contact"
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            href="mailto:info@vernis.ai"
                                            className="text-muted-foreground hover:text-foreground flex items-center gap-1"
                                        >
                                            Email Us{' '}
                                            <Mail className="h-3 w-3" />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-medium">Legal</h4>
                                <ul className="space-y-3 text-sm">
                                    <li>
                                        <Link
                                            to="/privacy"
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/terms"
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            Terms of Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/cookies"
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            Cookie Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="flex flex-col items-center justify-between gap-4 border-t py-6 sm:flex-row">
                    <p className="text-muted-foreground text-center text-xs sm:text-left">
                        &copy; {new Date().getFullYear()} VernisAI. All rights
                        reserved. Developed by{' '}
                        <a
                            href="https://monsoftsolutions.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-foreground underline underline-offset-4"
                        >
                            Monsoft Solutions, LLC
                        </a>
                    </p>
                    <div className="flex gap-5">
                        <Link
                            to="/sitemap"
                            className="text-muted-foreground hover:text-foreground text-xs"
                        >
                            Sitemap
                        </Link>
                        <Link
                            to="/accessibility"
                            className="text-muted-foreground hover:text-foreground text-xs"
                        >
                            Accessibility
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
