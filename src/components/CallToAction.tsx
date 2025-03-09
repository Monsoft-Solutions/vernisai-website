import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

type CallToActionProps = {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    gradient?: string;
    icon?: ReactNode;
    height?: 'default' | 'tall' | 'extra-tall';
    alignment?: 'left' | 'center';
    buttonVariant?:
        | 'default'
        | 'outline'
        | 'secondary'
        | 'ghost'
        | 'link'
        | 'destructive';
    buttonSize?: 'default' | 'sm' | 'lg' | 'icon';
    buttonColor?: string;
    textColor?: string;
    descriptionColor?: string;
};

export function CallToAction({
    title,
    description,
    buttonText,
    buttonLink,
    gradient = 'from-blue-500 to-indigo-600',
    icon = <ArrowUpRight className="h-4 w-4" />,
    height = 'default',
    alignment = 'left',
    buttonVariant = 'default',
    buttonSize = 'lg',
    buttonColor = 'bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700',
    textColor = 'text-white',
    descriptionColor = 'text-blue-100',
}: CallToActionProps) {
    // Determine height class based on the height prop
    const heightClass = {
        default: 'py-8',
        tall: 'py-12',
        'extra-tall': 'py-16',
    }[height];

    // Determine alignment class
    const alignmentClass = alignment === 'center' ? 'text-center' : 'text-left';
    const flexDirection =
        alignment === 'center' ? 'flex-col' : 'flex-col md:flex-row';
    const justifyContent =
        alignment === 'center' ? 'justify-center' : 'justify-between';
    const itemsAlignment =
        alignment === 'center' ? 'items-center' : 'items-center';

    return (
        <motion.div
            className={`rounded-xl bg-gradient-to-r ${gradient} px-8 ${heightClass} shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div
                className={`flex ${flexDirection} ${itemsAlignment} ${justifyContent} gap-6`}
            >
                <div className={alignmentClass}>
                    <h3 className={`mb-3 text-2xl font-bold ${textColor}`}>
                        {title}
                    </h3>
                    <p className={descriptionColor}>{description}</p>
                </div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={alignment === 'center' ? 'mt-6' : ''}
                >
                    <Button
                        asChild
                        size={buttonSize}
                        variant={buttonVariant}
                        className={buttonColor}
                    >
                        <Link
                            to={buttonLink}
                            className="flex items-center gap-2"
                        >
                            <span>{buttonText}</span>
                            {icon}
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </motion.div>
    );
}
