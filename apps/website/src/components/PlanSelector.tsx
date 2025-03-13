import { useState } from 'react';
import { motion, useReducedMotion, TargetAndTransition } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

// Simple radio group implementation since we don't have access to the actual components
interface RadioGroupProps {
    className?: string;
    children: React.ReactNode;
}

function RadioGroup({ className, children }: RadioGroupProps) {
    return (
        <div className={className} role="radiogroup">
            {children}
        </div>
    );
}

interface RadioGroupItemProps {
    value: string;
    id: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function RadioGroupItem({ value, id }: RadioGroupItemProps) {
    return (
        <input
            type="radio"
            id={id}
            value={value}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
        />
    );
}

interface PlanSelectorProps {
    title?: string;
    description?: string;
    className?: string;
}

export function PlanSelector({
    title = 'Find Your Perfect Plan',
    description = 'Answer a few questions to see which plan best fits your needs',
    className = '',
}: PlanSelectorProps) {
    const shouldReduceMotion = useReducedMotion();
    const [teamSize, setTeamSize] = useState<string>('');
    const [workflowCount, setWorkflowCount] = useState<string>('');
    const [integrationNeeds, setIntegrationNeeds] = useState<string>('');
    const [securityNeeds, setSecurityNeeds] = useState<string>('');
    const [recommendedPlan, setRecommendedPlan] = useState<string | null>(null);

    // Animation settings that respect reduced motion preferences
    const fadeInAnimation: TargetAndTransition = shouldReduceMotion
        ? { opacity: 1 }
        : { opacity: 1, y: 0 };

    const initialFadeInAnimation: TargetAndTransition = shouldReduceMotion
        ? { opacity: 0 }
        : { opacity: 0, y: 20 };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simple logic to determine the recommended plan
        const points = {
            starter: 0,
            pro: 0,
            enterprise: 0,
        };

        // Team size scoring
        if (teamSize === 'solo') {
            points.starter += 3;
        } else if (teamSize === 'small') {
            points.pro += 3;
        } else if (teamSize === 'medium') {
            points.pro += 2;
            points.enterprise += 1;
        } else if (teamSize === 'large') {
            points.enterprise += 3;
        }

        // Workflow count scoring
        if (workflowCount === 'few') {
            points.starter += 3;
        } else if (workflowCount === 'several') {
            points.pro += 3;
        } else if (workflowCount === 'many') {
            points.enterprise += 3;
        }

        // Integration needs scoring
        if (integrationNeeds === 'basic') {
            points.starter += 3;
        } else if (integrationNeeds === 'advanced') {
            points.pro += 3;
        } else if (integrationNeeds === 'custom') {
            points.enterprise += 3;
        }

        // Security needs scoring
        if (securityNeeds === 'standard') {
            points.starter += 2;
            points.pro += 1;
        } else if (securityNeeds === 'advanced') {
            points.pro += 3;
        } else if (securityNeeds === 'enterprise') {
            points.enterprise += 3;
        }

        // Determine the recommended plan
        if (
            points.enterprise > points.pro &&
            points.enterprise > points.starter
        ) {
            setRecommendedPlan('enterprise');
        } else if (points.pro > points.starter) {
            setRecommendedPlan('pro');
        } else {
            setRecommendedPlan('starter');
        }
    };

    const resetForm = () => {
        setTeamSize('');
        setWorkflowCount('');
        setIntegrationNeeds('');
        setSecurityNeeds('');
        setRecommendedPlan(null);
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

                <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                    {!recommendedPlan ? (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    How large is your team?
                                </h3>
                                <RadioGroup className="grid gap-4 md:grid-cols-2">
                                    <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                                        <RadioGroupItem
                                            id="team-size-1"
                                            value="just-me"
                                            checked={teamSize === 'just-me'}
                                            onChange={() =>
                                                setTeamSize('just-me')
                                            }
                                        />
                                        <label
                                            htmlFor="team-size-1"
                                            className="flex-grow cursor-pointer"
                                        >
                                            Just me
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                                        <RadioGroupItem
                                            id="team-size-2"
                                            value="small"
                                            checked={teamSize === 'small'}
                                            onChange={() =>
                                                setTeamSize('small')
                                            }
                                        />
                                        <label
                                            htmlFor="team-size-2"
                                            className="flex-grow cursor-pointer"
                                        >
                                            2-5 people
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                                        <RadioGroupItem
                                            id="team-size-3"
                                            value="medium"
                                            checked={teamSize === 'medium'}
                                            onChange={() =>
                                                setTeamSize('medium')
                                            }
                                        />
                                        <label
                                            htmlFor="team-size-3"
                                            className="flex-grow cursor-pointer"
                                        >
                                            6-20 people
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                                        <RadioGroupItem
                                            id="team-size-4"
                                            value="large"
                                            checked={teamSize === 'large'}
                                            onChange={() =>
                                                setTeamSize('large')
                                            }
                                        />
                                        <label
                                            htmlFor="team-size-4"
                                            className="flex-grow cursor-pointer"
                                        >
                                            20+ people
                                        </label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    How many workflows do you need?
                                </h3>
                                <RadioGroup className="grid gap-4 md:grid-cols-3">
                                    <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                                        <RadioGroupItem
                                            id="workflow-count-1"
                                            value="few"
                                            checked={workflowCount === 'few'}
                                            onChange={() =>
                                                setWorkflowCount('few')
                                            }
                                        />
                                        <label
                                            htmlFor="workflow-count-1"
                                            className="flex-grow cursor-pointer"
                                        >
                                            1-5 workflows
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                                        <RadioGroupItem
                                            id="workflow-count-2"
                                            value="moderate"
                                            checked={
                                                workflowCount === 'moderate'
                                            }
                                            onChange={() =>
                                                setWorkflowCount('moderate')
                                            }
                                        />
                                        <label
                                            htmlFor="workflow-count-2"
                                            className="flex-grow cursor-pointer"
                                        >
                                            6-20 workflows
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                                        <RadioGroupItem
                                            id="workflow-count-3"
                                            value="many"
                                            checked={workflowCount === 'many'}
                                            onChange={() =>
                                                setWorkflowCount('many')
                                            }
                                        />
                                        <label
                                            htmlFor="workflow-count-3"
                                            className="flex-grow cursor-pointer"
                                        >
                                            20+ workflows
                                        </label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    What are your integration needs?
                                </h3>
                                <RadioGroup className="grid gap-4 md:grid-cols-3">
                                    <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                                        <RadioGroupItem
                                            id="integration-1"
                                            value="standard"
                                            checked={
                                                integrationNeeds === 'standard'
                                            }
                                            onChange={() =>
                                                setIntegrationNeeds('standard')
                                            }
                                        />
                                        <label
                                            htmlFor="integration-1"
                                            className="flex-grow cursor-pointer"
                                        >
                                            Standard integrations
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                                        <RadioGroupItem
                                            id="integration-2"
                                            value="advanced"
                                            checked={
                                                integrationNeeds === 'advanced'
                                            }
                                            onChange={() =>
                                                setIntegrationNeeds('advanced')
                                            }
                                        />
                                        <label
                                            htmlFor="integration-2"
                                            className="flex-grow cursor-pointer"
                                        >
                                            Advanced integrations
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                                        <RadioGroupItem
                                            id="integration-3"
                                            value="custom"
                                            checked={
                                                integrationNeeds === 'custom'
                                            }
                                            onChange={() =>
                                                setIntegrationNeeds('custom')
                                            }
                                        />
                                        <label
                                            htmlFor="integration-3"
                                            className="flex-grow cursor-pointer"
                                        >
                                            Custom integrations
                                        </label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    What security features do you need?
                                </h3>
                                <RadioGroup className="grid gap-4 md:grid-cols-3">
                                    <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                                        <RadioGroupItem
                                            id="security-1"
                                            value="standard"
                                            checked={
                                                securityNeeds === 'standard'
                                            }
                                            onChange={() =>
                                                setSecurityNeeds('standard')
                                            }
                                        />
                                        <label
                                            htmlFor="security-1"
                                            className="flex-grow cursor-pointer"
                                        >
                                            Standard security
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                                        <RadioGroupItem
                                            id="security-2"
                                            value="advanced"
                                            checked={
                                                securityNeeds === 'advanced'
                                            }
                                            onChange={() =>
                                                setSecurityNeeds('advanced')
                                            }
                                        />
                                        <label
                                            htmlFor="security-2"
                                            className="flex-grow cursor-pointer"
                                        >
                                            Advanced security
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                                        <RadioGroupItem
                                            id="security-3"
                                            value="enterprise"
                                            checked={
                                                securityNeeds === 'enterprise'
                                            }
                                            onChange={() =>
                                                setSecurityNeeds('enterprise')
                                            }
                                        />
                                        <label
                                            htmlFor="security-3"
                                            className="flex-grow cursor-pointer"
                                        >
                                            Enterprise security
                                        </label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-blue-600 text-white hover:bg-blue-700"
                                disabled={
                                    !teamSize ||
                                    !workflowCount ||
                                    !integrationNeeds ||
                                    !securityNeeds
                                }
                            >
                                See My Recommended Plan
                            </Button>
                        </form>
                    ) : (
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-blue-100 p-3">
                                <CheckCircle className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="mb-2 text-2xl font-bold text-gray-900">
                                We Recommend Our{' '}
                                {recommendedPlan === 'starter'
                                    ? 'Starter'
                                    : recommendedPlan === 'pro'
                                      ? 'Pro'
                                      : 'Enterprise'}{' '}
                                Plan
                            </h3>
                            <p className="mb-6 text-lg text-gray-600">
                                {recommendedPlan === 'starter'
                                    ? 'Perfect for individuals and small projects with basic automation needs.'
                                    : recommendedPlan === 'pro'
                                      ? 'Ideal for teams that need advanced features and multiple workflows.'
                                      : 'Best for organizations with complex needs, custom integrations, and enterprise-grade security.'}
                            </p>

                            <div className="mb-8 space-y-4 rounded-lg bg-gray-50 p-6">
                                <h4 className="font-semibold text-gray-900">
                                    Based on your needs:
                                </h4>
                                <ul className="space-y-2 text-left">
                                    <li className="flex items-start">
                                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                        <span>
                                            {teamSize === 'solo'
                                                ? 'Individual user'
                                                : teamSize === 'small'
                                                  ? 'Small team (2-5 people)'
                                                  : teamSize === 'medium'
                                                    ? 'Medium team (6-20 people)'
                                                    : 'Large team (20+ people)'}
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                        <span>
                                            {workflowCount === 'few'
                                                ? 'Few workflows (1-5)'
                                                : workflowCount === 'several'
                                                  ? 'Several workflows (6-20)'
                                                  : 'Many workflows (20+)'}
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                        <span>
                                            {integrationNeeds === 'basic'
                                                ? 'Standard integrations'
                                                : integrationNeeds ===
                                                    'advanced'
                                                  ? 'Advanced integrations'
                                                  : 'Custom integrations'}
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                        <span>
                                            {securityNeeds === 'standard'
                                                ? 'Standard security features'
                                                : securityNeeds === 'advanced'
                                                  ? 'Advanced security features'
                                                  : 'Enterprise-grade security'}
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <Button
                                    asChild
                                    className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
                                >
                                    <Link to="/waitlist" className="group">
                                        <span>
                                            Get Started with{' '}
                                            {recommendedPlan === 'starter'
                                                ? 'Starter'
                                                : recommendedPlan === 'pro'
                                                  ? 'Pro'
                                                  : 'Enterprise'}
                                        </span>
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={resetForm}
                                    className="flex-1"
                                >
                                    Start Over
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
