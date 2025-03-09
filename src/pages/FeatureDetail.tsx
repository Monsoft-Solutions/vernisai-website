import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { featureDetails } from '../data/features';

export function FeatureDetail() {
    const { featureId } = useParams<{ featureId: string }>();
    const feature =
        featureId && featureDetails[featureId as keyof typeof featureDetails]
            ? featureDetails[featureId as keyof typeof featureDetails]
            : null;

    if (!feature) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="mb-4 text-3xl font-bold">Feature not found</h1>
                <p className="mb-8">
                    The feature you're looking for doesn't exist or has been
                    moved.
                </p>
                <Link
                    to="/features"
                    className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Go to Use Cases
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-4xl">
                <div className="mb-12 text-center">
                    <div className="mb-6 text-6xl">{feature.icon}</div>
                    <h1 className="mb-4 text-4xl font-bold tracking-tight">
                        {feature.title}
                    </h1>
                    <p className="text-xl text-gray-600">
                        {feature.description}
                    </p>
                </div>

                <div className="prose prose-lg mb-12 max-w-none">
                    <p>{feature.longDescription}</p>
                </div>

                <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="mb-4 text-2xl font-semibold">
                            Key Benefits
                        </h2>
                        <ul className="space-y-2">
                            {feature.benefits.map(
                                (benefit: string, index: number) => (
                                    <li
                                        key={index}
                                        className="flex items-start"
                                    >
                                        <span className="mr-2 text-green-500">
                                            ✓
                                        </span>
                                        <span>{benefit}</span>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-2xl font-semibold">
                            Common Use Cases
                        </h2>
                        <ul className="space-y-2">
                            {feature.useCases.map(
                                (useCase: string, index: number) => (
                                    <li
                                        key={index}
                                        className="flex items-start"
                                    >
                                        <span className="mr-2 text-blue-500">
                                            •
                                        </span>
                                        <span>{useCase}</span>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                </div>

                <div className="rounded-lg bg-gray-50 p-8">
                    <h2 className="mb-4 text-2xl font-semibold">
                        Ready to get started?
                    </h2>
                    <p className="mb-6">
                        Experience the power of our {feature.title} feature and
                        transform the way you work.
                    </p>
                    <Link
                        to="/waitlist"
                        className="inline-block rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-blue-700"
                    >
                        Join our waitlist
                    </Link>
                </div>
            </div>
        </div>
    );
}
