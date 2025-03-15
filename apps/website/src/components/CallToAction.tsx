import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './ui/button-variant';

type CallToActionProps = {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    gradient?: string;
    icon?: ReactNode;
    height?: 'default' | 'tall' | 'extra-tall';
    alignment?: 'left' | 'center';
    buttonVariant?: VariantProps<typeof buttonVariants>['variant'];
    buttonSize?: VariantProps<typeof buttonVariants>['size'];
    buttonAnimation?: VariantProps<typeof buttonVariants>['animation'];
    buttonGlow?: boolean;
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
    buttonVariant = 'white',
    buttonSize = 'lg',
    buttonAnimation = 'scale',
    buttonGlow = false,
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
                <div className={alignment === 'center' ? 'mt-6' : ''}>
                    <Button
                        asChild
                        size={buttonSize}
                        variant={buttonVariant}
                        animation={buttonAnimation}
                        glow={buttonGlow}
                        iconRight={icon}
                    >
                        <Link to={buttonLink}>{buttonText}</Link>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
