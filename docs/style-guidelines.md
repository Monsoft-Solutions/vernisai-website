# VernisAI Style Guidelines

## Table of Contents

- [Introduction](#introduction)
- [Design Principles](#design-principles)
- [Brand Identity](#brand-identity)
- [Color Palette](#color-palette)
- [Typography](#typography)
- [Spacing System](#spacing-system)
- [Components](#components)
- [Imagery and Icons](#imagery-and-icons)
- [Animations and Transitions](#animations-and-transitions)
- [Accessibility](#accessibility)
- [Responsive Design](#responsive-design)
- [Code Standards](#code-standards)
- [Best Practices](#best-practices)

## Introduction

This document serves as the definitive guide for VernisAI's visual design system. It ensures consistency across all interfaces and maintains a cohesive brand experience. These guidelines should be followed by all designers and developers working on the VernisAI platform.

## Design Principles

VernisAI's design is guided by the following core principles:

### Clarity & Minimalism

- Keep interfaces clean with only essential elements
- Eliminate unnecessary visual clutter
- Focus user attention on what matters most
- Use white space effectively to create visual hierarchy

### Accessibility First

- Design for users of all abilities
- Ensure high contrast and legible typography
- Support keyboard navigation and screen readers
- Follow WCAG 2.1 AA standards at minimum

### Intuitive & User-Centric

- Create interfaces that feel familiar and easy to understand
- Design for users with varying levels of technical expertise
- Prioritize common tasks and make them effortless
- Provide clear feedback for all user interactions

### Consistency & Coherence

- Maintain visual and functional consistency across the platform
- Use established patterns to reduce cognitive load
- Ensure components behave predictably throughout the application
- Create a sense of unity across all touchpoints

### Purposeful Animation

- Use motion to enhance understanding, not for decoration
- Animate with purpose to guide user attention
- Keep transitions smooth and performant
- Respect user preferences for reduced motion

## Brand Identity

### Logo Usage

- Always use the official VernisAI logo files
- Maintain the minimum clear space around the logo (equal to the height of the "V")
- Never distort, recolor, or modify the logo
- Use the appropriate logo variant based on background color

### Voice & Tone

- Professional but approachable
- Clear and concise, avoiding technical jargon when possible
- Helpful and solution-oriented
- Confident without being boastful
- Friendly but not casual

## Color Palette

### Primary Colors

- **Blue** (`#2563eb`): Primary brand color, used for key actions and important UI elements
- **Purple** (`#7c3aed`): Secondary brand color, used for accents and visual interest

### Neutral Colors

- **White** (`#ffffff`): Backgrounds, cards
- **Gray-50** (`#f9fafb`): Alternative backgrounds, hover states
- **Gray-100** (`#f3f4f6`): Borders, dividers, subtle backgrounds
- **Gray-200** (`#e5e7eb`): Disabled states, secondary borders
- **Gray-300** (`#d1d5db`): Disabled text, tertiary elements
- **Gray-500** (`#6b7280`): Secondary text, icons
- **Gray-700** (`#374151`): Primary text
- **Gray-900** (`#111827`): Headings, emphasized text

### Semantic Colors

- **Success** (`#10b981`): Positive actions, confirmations
- **Warning** (`#f59e0b`): Alerts, cautionary messages
- **Error** (`#ef4444`): Errors, destructive actions
- **Info** (`#3b82f6`): Informational messages, help text

### Color Usage Guidelines

- Use the primary blue for main CTAs and interactive elements
- Reserve purple for accents and secondary interactive elements
- Maintain sufficient contrast ratios (4.5:1 minimum for normal text)
- Use semantic colors consistently to reinforce meaning
- Limit the use of accent colors to avoid visual overload

## Typography

### Font Family

- **Primary Font**: Inter (sans-serif)
- **Fallback Fonts**: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial

### Type Scale

- **xs**: 0.75rem (12px)
- **sm**: 0.875rem (14px)
- **base**: 1rem (16px)
- **lg**: 1.125rem (18px)
- **xl**: 1.25rem (20px)
- **2xl**: 1.5rem (24px)
- **3xl**: 1.875rem (30px)
- **4xl**: 2.25rem (36px)
- **5xl**: 3rem (48px)
- **6xl**: 3.75rem (60px)

### Font Weights

- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700
- **Extrabold**: 800

### Line Heights

- **Tight**: 1.25
- **Normal**: 1.5
- **Relaxed**: 1.75
- **Loose**: 2

### Typography Usage

- Use font size to establish clear hierarchy
- Maintain consistent heading levels (H1, H2, H3, etc.)
- Limit line length to 60-80 characters for optimal readability
- Use appropriate line height based on text size and purpose
- Avoid using too many font weights in a single design

## Spacing System

VernisAI uses an 8-point grid system for consistent spacing throughout the interface.

### Spacing Scale

- **0**: 0px
- **1**: 0.25rem (4px)
- **2**: 0.5rem (8px)
- **3**: 0.75rem (12px)
- **4**: 1rem (16px)
- **5**: 1.25rem (20px)
- **6**: 1.5rem (24px)
- **8**: 2rem (32px)
- **10**: 2.5rem (40px)
- **12**: 3rem (48px)
- **16**: 4rem (64px)
- **20**: 5rem (80px)
- **24**: 6rem (96px)

### Spacing Guidelines

- Use consistent spacing between related elements
- Apply larger spacing between unrelated sections
- Maintain consistent padding within components
- Adjust spacing responsively for different screen sizes
- Use the spacing scale for margins, paddings, and gaps

## Components

### Buttons

- **Primary**: Blue background, white text, rounded corners
- **Secondary**: White background, gray border, dark text
- **Tertiary**: No background, blue text
- **Dark**: Black background, white text, rounded corners
- **Destructive**: Red background or red text
- **Disabled**: Gray background, lighter text, no hover effects

Button sizes:

- **Small**: px-3 py-1.5, text-sm
- **Medium** (default): px-4 py-2, text-base
- **Large**: px-6 py-3, text-lg

### Cards

- Consistent padding (p-6)
- Subtle shadows (shadow-sm or shadow-md)
- Rounded corners (rounded-lg)
- Optional hover states for interactive cards
- Clear visual hierarchy for card content

### Forms

- Clear labels positioned above inputs
- Consistent input styling with focus states
- Helpful validation messages
- Logical grouping of related fields
- Clear indication of required fields

### Navigation

- Clear indication of current page/section
- Consistent hover and active states
- Appropriate spacing between navigation items
- Mobile-friendly navigation patterns
- Breadcrumbs for complex hierarchies

### Modals & Dialogs

- Center-aligned on desktop
- Full-screen on mobile
- Clear titles and actions
- Dismissible via close button, ESC key, and overlay click
- Focus trap for keyboard accessibility

## Imagery and Icons

### Icons

- Use Lucide icons as the primary icon set
- Maintain consistent icon sizes within contexts
- Use appropriate icon weights to match typography
- Ensure icons have sufficient touch targets on mobile
- Add labels to icons when their meaning might be ambiguous

### Illustrations

- Use illustrations that align with the brand style
- Maintain consistent illustration style throughout the platform
- Use illustrations purposefully to explain concepts or add visual interest
- Ensure illustrations are responsive and scale appropriately

### Images

- Use high-quality, professional imagery
- Optimize images for web performance
- Maintain consistent aspect ratios
- Use appropriate alt text for accessibility
- Apply consistent styling to images within the same context

## Animations and Transitions

### Principles

- Animations should be subtle and purposeful
- Use motion to guide attention and provide feedback
- Keep animations short (150-300ms) for UI elements
- Ensure animations don't block user interaction

### Common Animations

- **Fade**: For appearing/disappearing elements
- **Slide**: For panels and drawers
- **Scale**: For emphasis and focus
- **Color transitions**: For state changes

### Motion Settings

- **Default timing**: 200ms
- **Easing**: ease-in-out for natural movement
- **Delay**: Use sparingly, typically 50-100ms for staggered animations
- **Respect reduced motion**: Honor user preferences for reduced motion

## Accessibility

### Color Contrast

- Maintain minimum contrast ratios:
    - 4.5:1 for normal text
    - 3:1 for large text (18pt+)
    - 3:1 for UI components and graphical objects

### Keyboard Navigation

- Ensure all interactive elements are keyboard accessible
- Use logical tab order
- Provide visible focus indicators
- Support standard keyboard shortcuts

### Screen Readers

- Use semantic HTML elements
- Provide appropriate ARIA attributes when necessary
- Include alternative text for images
- Ensure dynamic content changes are announced

### Responsive Design

- Support zoom up to 200% without loss of content
- Ensure touch targets are at least 44x44px
- Design for various input methods (touch, mouse, keyboard)
- Test with actual assistive technologies

## Responsive Design

### Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Mobile-First Approach

- Design for mobile first, then enhance for larger screens
- Use fluid layouts that adapt to different screen sizes
- Adjust typography scale for different devices
- Consider touch as the primary input method on mobile

### Responsive Patterns

- Stack elements vertically on mobile
- Use appropriate navigation patterns for different screen sizes
- Adjust spacing and sizing proportionally
- Hide non-essential content on smaller screens

## Code Standards

### CSS/Tailwind

- Follow utility-first approach with Tailwind CSS
- Use consistent class ordering (layout → typography → visual)
- Extract common patterns to components
- Use custom Tailwind theme values for brand colors and typography
- Avoid inline styles

### React Components

- Build components with reusability in mind
- Use TypeScript for type safety
- Follow consistent naming conventions
- Document component props and usage
- Implement responsive behavior consistently

### Accessibility in Code

- Use semantic HTML elements
- Implement keyboard navigation
- Add appropriate ARIA attributes
- Test with screen readers and keyboard navigation

## Best Practices

### Performance

- Optimize images and assets
- Minimize JavaScript bundle size
- Implement code splitting
- Use efficient CSS (avoid complex selectors)
- Lazy load non-critical resources

### Consistency

- Reuse components and patterns
- Follow established conventions
- Maintain consistent spacing and alignment
- Use the design system as the single source of truth

### Documentation

- Document component usage and variations
- Keep the style guide updated
- Include examples and code snippets
- Document accessibility considerations

### Design-Development Collaboration

- Use shared terminology
- Establish clear handoff processes
- Maintain open communication channels
- Conduct regular design reviews

---

This style guide is a living document and will evolve as VernisAI grows. All team members are encouraged to contribute to its improvement.
