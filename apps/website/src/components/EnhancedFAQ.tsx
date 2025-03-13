import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';

export interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

interface EnhancedFAQProps {
    title?: string;
    description?: string;
    faqs: FAQItem[];
    categories?: string[];
    className?: string;
}

export function EnhancedFAQ({
    title = 'Frequently Asked Questions',
    description = 'Find answers to common questions about our pricing and features',
    faqs,
    categories = [],
    className = '',
}: EnhancedFAQProps) {
    const shouldReduceMotion = useReducedMotion();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    // Derive categories from FAQs if not provided
    const faqCategories =
        categories.length > 0
            ? categories
            : [...new Set(faqs.map((faq) => faq.category))];

    // Filter FAQs based on search and category
    const filteredFaqs = faqs.filter((faq) => {
        const matchesSearch =
            searchQuery === '' ||
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
            activeCategory === null || faq.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`w-full py-16 md:py-24 ${className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                    <p className="text-xl text-gray-600">{description}</p>
                </div>

                <div className="mx-auto max-w-3xl">
                    {/* Search bar */}
                    <div className="relative mb-8">
                        <div className="relative">
                            <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search for questions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Category filters */}
                    {faqCategories.length > 0 && (
                        <div className="mb-8 flex flex-wrap gap-2">
                            <button
                                onClick={() => setActiveCategory(null)}
                                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                                    activeCategory === null
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                }`}
                            >
                                All
                            </button>
                            {faqCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                                        activeCategory === category
                                            ? 'bg-blue-100 text-blue-800'
                                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* FAQ items */}
                    <div className="space-y-4">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="overflow-hidden rounded-lg border border-gray-200 bg-white"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="flex w-full items-center justify-between p-4 text-left text-gray-900 hover:bg-gray-50 focus:outline-none"
                                    >
                                        <span className="text-lg font-medium">
                                            {faq.question}
                                        </span>
                                        <motion.div
                                            animate={{
                                                rotate:
                                                    activeIndex === index
                                                        ? 180
                                                        : 0,
                                            }}
                                            transition={{
                                                duration: shouldReduceMotion
                                                    ? 0
                                                    : 0.2,
                                            }}
                                        >
                                            <ChevronDown className="h-5 w-5 text-gray-500" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={
                                                    shouldReduceMotion
                                                        ? { opacity: 0 }
                                                        : {
                                                              height: 0,
                                                              opacity: 0,
                                                          }
                                                }
                                                animate={
                                                    shouldReduceMotion
                                                        ? { opacity: 1 }
                                                        : {
                                                              height: 'auto',
                                                              opacity: 1,
                                                          }
                                                }
                                                exit={
                                                    shouldReduceMotion
                                                        ? { opacity: 0 }
                                                        : {
                                                              height: 0,
                                                              opacity: 0,
                                                          }
                                                }
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="border-t border-gray-200 p-4 text-gray-600">
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: faq.answer,
                                                        }}
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))
                        ) : (
                            <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
                                <p className="text-gray-600">
                                    No FAQs found matching your search criteria.
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setActiveCategory(null);
                                    }}
                                    className="mt-4 text-blue-600 hover:text-blue-800"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Contact for more questions */}
                    <div className="mt-12 rounded-lg bg-blue-50 p-6 text-center">
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">
                            Still have questions?
                        </h3>
                        <p className="mb-4 text-gray-600">
                            If you couldn't find the answer to your question,
                            our team is here to help.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
