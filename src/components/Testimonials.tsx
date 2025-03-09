import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function Testimonials() {
    const testimonials = [
        {
            quote: 'VernisAI has completely transformed how I manage my inbox. I save at least 5 hours every week that I used to spend sorting and responding to emails.',
            author: 'Sarah Johnson',
            title: 'Marketing Director',
            avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
        },
        {
            quote: 'As someone with no technical background, I was amazed at how easy it was to set up automated workflows. VernisAI has made technology accessible to me.',
            author: 'Michael Chen',
            title: 'Small Business Owner',
            avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
        },
        {
            quote: "The meeting management features alone are worth it. My team's productivity has increased dramatically since we started using VernisAI to handle scheduling and follow-ups.",
            author: 'Priya Patel',
            title: 'Team Lead',
            avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        },
    ];

    return (
        <section className="w-full bg-gray-50 py-16 md:py-24">
            <div className="px-4 md:px-6">
                <motion.div
                    className="mx-auto mb-12 max-w-3xl text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        What Our Users Say
                    </h2>
                    <p className="text-xl text-gray-600">
                        Real people, real results with VernisAI
                    </p>
                </motion.div>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="mb-4 text-gray-400">
                                <Quote className="h-8 w-8" />
                            </div>
                            <p className="mb-6 flex-grow text-gray-700">
                                "{testimonial.quote}"
                            </p>
                            <div className="mt-auto flex items-center">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                    className="mr-4 h-12 w-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        {testimonial.author}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {testimonial.title}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
