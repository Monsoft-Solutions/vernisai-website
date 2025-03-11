import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Lenis from 'lenis';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function initSmoothScroll() {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        touchMultiplier: 2,
    });

    function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return lenis;
}
