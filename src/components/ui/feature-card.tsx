import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface FeatureCardProps {
    /**
     * Icon to display in the card
     */
    icon: ReactNode;

    /**
     * Title of the feature
     */
    title: string;

    /**
     * Description of the feature
     */
    description: string | ReactNode;

    /**
     * Background color class (Tailwind)
     * @default "bg-blue-50"
     */
    color?: string;

    /**
     * Border color class (Tailwind)
     * @default "border-blue-200"
     */
    borderColor?: string;

    /**
     * Shadow color class (Tailwind)
     * @default "shadow-blue-100"
     */
    shadowColor?: string;

    /**
     * Optional className for additional styling
     */
    className?: string;

    /**
     * Optional onClick handler
     */
    onClick?: () => void;
}

export function FeatureCard({
    icon,
    title,
    description,
    color = 'bg-blue-50',
    borderColor = 'border-blue-200',
    shadowColor = 'shadow-blue-100',
    className,
    onClick,
}: FeatureCardProps) {
    return (
        <motion.div
            className={cn(
                `flex flex-col rounded-xl border p-6 shadow-lg transition-all`,
                color,
                borderColor,
                shadowColor,
                className,
            )}
            onClick={onClick}
            whileHover={
                onClick
                    ? {
                          y: -10,
                          scale: 1.03,
                          transition: {
                              type: 'spring',
                              stiffness: 400,
                              damping: 10,
                          },
                      }
                    : undefined
            }
        >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white p-3 shadow-sm">
                {icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </motion.div>
    );
}
