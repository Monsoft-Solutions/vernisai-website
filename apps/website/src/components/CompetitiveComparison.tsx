import { motion, useReducedMotion, TargetAndTransition } from 'framer-motion';
import { CheckCircle, X, Info } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

// Simple table components since we don't have access to the actual components
const Table = ({
    children,
    className = '',
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <table className={`w-full border-collapse ${className}`}>{children}</table>
);

const TableHeader = ({ children }: { children: React.ReactNode }) => (
    <thead>{children}</thead>
);

const TableBody = ({ children }: { children: React.ReactNode }) => (
    <tbody>{children}</tbody>
);

const TableRow = ({
    children,
    className = '',
}: {
    children: React.ReactNode;
    className?: string;
}) => <tr className={`border-b border-gray-200 ${className}`}>{children}</tr>;

const TableHead = ({
    children,
    className = '',
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <th className={`px-4 py-3 text-sm font-semibold ${className}`}>
        {children}
    </th>
);

const TableCell = ({
    children,
    className = '',
}: {
    children: React.ReactNode;
    className?: string;
}) => <td className={`px-4 py-3 text-sm ${className}`}>{children}</td>;

interface ComparisonFeature {
    name: string;
    description?: string;
    vernisAI: boolean | string;
    competitor1: boolean | string;
    competitor2: boolean | string;
    highlight?: boolean;
}

interface CompetitiveComparisonProps {
    title?: string;
    description?: string;
    competitor1Name?: string;
    competitor2Name?: string;
    features: ComparisonFeature[];
    className?: string;
}

export function CompetitiveComparison({
    title = 'Why Choose VernisAI',
    description = 'See how we compare to other workflow automation platforms',
    competitor1Name = 'Competitor A',
    competitor2Name = 'Competitor B',
    features,
    className = '',
}: CompetitiveComparisonProps) {
    const shouldReduceMotion = useReducedMotion();

    // Animation settings that respect reduced motion preferences
    const fadeInAnimation: TargetAndTransition = shouldReduceMotion
        ? { opacity: 1 }
        : { opacity: 1, y: 0 };

    const initialFadeInAnimation: TargetAndTransition = shouldReduceMotion
        ? { opacity: 0 }
        : { opacity: 0, y: 20 };

    const renderValue = (value: boolean | string) => {
        if (typeof value === 'boolean') {
            return value ? (
                <CheckCircle className="mx-auto h-5 w-5 text-green-500" />
            ) : (
                <X className="mx-auto h-5 w-5 text-gray-300" />
            );
        }
        return <span className="text-sm">{value}</span>;
    };

    return (
        <section className={`w-full py-16 md:py-24 ${className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="mx-auto mb-12 max-w-3xl text-center"
                    initial={initialFadeInAnimation}
                    whileInView={fadeInAnimation}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                    <p className="text-xl text-gray-600">{description}</p>
                </motion.div>

                <motion.div
                    className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                    initial={initialFadeInAnimation}
                    whileInView={fadeInAnimation}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-1/3">
                                        Feature
                                    </TableHead>
                                    <TableHead className="w-1/5 bg-blue-50 text-center text-blue-700">
                                        VernisAI
                                    </TableHead>
                                    <TableHead className="w-1/5 text-center">
                                        {competitor1Name}
                                    </TableHead>
                                    <TableHead className="w-1/5 text-center">
                                        {competitor2Name}
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {features.map((feature) => (
                                    <TableRow
                                        key={feature.name}
                                        className={
                                            feature.highlight
                                                ? 'bg-blue-50'
                                                : ''
                                        }
                                    >
                                        <TableCell className="font-medium">
                                            <div className="flex items-start">
                                                <span>{feature.name}</span>
                                                {feature.description && (
                                                    <div className="group relative ml-1">
                                                        <Info className="h-4 w-4 cursor-help text-gray-400" />
                                                        <div className="absolute top-0 left-0 z-10 hidden w-64 rounded-md bg-gray-800 p-2 text-xs text-white group-hover:block">
                                                            {
                                                                feature.description
                                                            }
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell className="bg-blue-50 text-center font-medium text-blue-700">
                                            {renderValue(feature.vernisAI)}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            {renderValue(feature.competitor1)}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            {renderValue(feature.competitor2)}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </motion.div>

                <div className="mx-auto mt-12 flex max-w-xl flex-col items-center justify-center space-y-4 text-center">
                    <p className="text-lg text-gray-600">
                        Ready to experience the VernisAI difference?
                    </p>
                    <Button
                        asChild
                        className="group bg-blue-600 text-white hover:bg-blue-700"
                    >
                        <Link to="/waitlist">Start Your Free Trial</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
