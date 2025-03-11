import * as React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from './ui/accordion';
import { cn } from '../lib/utils';

export type FAQItem = {
    question: string;
    answer: React.ReactNode;
};

export type FAQProps = {
    title?: string;
    summary?: string;
    items: FAQItem[];
    className?: string;
    titleClassName?: string;
    summaryClassName?: string;
    accordionClassName?: string;
    variant?: 'light' | 'dark';
};

/**
 * A reusable FAQ component that can be used across the site.
 * It allows pages to set their own questions and answers, as well as a title and summary.
 * Supports 'light' and 'dark' variants for different styling.
 */
export const FAQ: React.FC<FAQProps> = ({
    title = 'Frequently Asked Questions',
    summary,
    items,
    className,
    titleClassName,
    summaryClassName,
    accordionClassName,
    variant = 'light',
}) => {
    // Define styles based on variant
    const variantStyles = {
        container:
            variant === 'dark'
                ? 'bg-gray-900 text-white'
                : 'bg-gray-50 text-gray-900',
        title: variant === 'dark' ? 'text-white' : 'text-gray-900',
        summary: variant === 'dark' ? 'text-gray-300' : 'text-gray-500',
        accordion: variant === 'dark' ? 'border-gray-700' : 'border-gray-200',
        question: variant === 'dark' ? 'text-white' : 'text-gray-900',
        answer: variant === 'dark' ? 'text-gray-300' : 'text-gray-500',
    };

    return (
        <div className={cn('w-full py-12', variantStyles.container, className)}>
            <div className="mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    {title && (
                        <h2
                            className={cn(
                                'text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl',
                                variantStyles.title,
                                titleClassName,
                            )}
                        >
                            {title}
                        </h2>
                    )}
                    {summary && (
                        <p
                            className={cn(
                                'max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed',
                                variantStyles.summary,
                                summaryClassName,
                            )}
                        >
                            {summary}
                        </p>
                    )}
                </div>
                <div className="mx-auto mt-8 max-w-3xl">
                    <Accordion
                        type="single"
                        collapsible
                        className={cn(
                            'w-full',
                            variantStyles.accordion,
                            accordionClassName,
                        )}
                    >
                        {items.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className={
                                    variant === 'dark'
                                        ? 'border-gray-700'
                                        : 'border-gray-200'
                                }
                            >
                                <AccordionTrigger
                                    className={cn(
                                        'cursor-pointer text-left font-medium',
                                        variantStyles.question,
                                    )}
                                >
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent
                                    className={variantStyles.answer}
                                >
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};
