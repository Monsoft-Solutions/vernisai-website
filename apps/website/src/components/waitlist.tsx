import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './ui/form';
import { useToast } from '../hooks/use-toast';

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters.',
    }),
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
    company: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function Waitlist() {
    const { toast } = useToast();
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            name: '',
            company: '',
        },
    });

    function onSubmit(_data: FormValues) {
        // TODO: In a real implementation, this would send the data to a backend service
        toast({
            title: 'Success!',
            description:
                "You've been added to our waitlist. We'll be in touch soon!",
        });
        form.reset();
    }

    const benefits = [
        'Early access to VernisAI platform',
        'Exclusive onboarding support',
        'Influence future features',
        'Special early adopter pricing',
    ];

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                        <Sparkles className="mr-1.5 h-4 w-4" />
                        <span>Limited Early Access</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                        Join the VernisAI Waitlist
                    </h2>
                    <p className="text-muted-foreground max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Be among the first to experience the power of AI-driven
                        workflow automation. Sign up for early access and
                        updates.
                    </p>

                    <div className="mt-8 space-y-3">
                        <p className="font-medium">Early access benefits:</p>
                        <ul className="space-y-3">
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start gap-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <CheckCircle className="mt-0.5 h-5 w-5 text-blue-500" />
                                    <span>{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    className="mx-auto w-full max-w-md space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="space-y-2 text-center">
                        <h3 className="text-xl font-bold">Reserve Your Spot</h3>
                        <p className="text-muted-foreground text-sm">
                            Complete the form below to join our waitlist
                        </p>
                    </div>

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4"
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Your name"
                                                className="h-11 rounded-lg"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="your.email@example.com"
                                                type="email"
                                                className="h-11 rounded-lg"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Company{' '}
                                            <span className="text-muted-foreground text-xs">
                                                (optional)
                                            </span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Your company name"
                                                className="h-11 rounded-lg"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                variant="black"
                                size="lg"
                                className="mt-6 w-full rounded-lg"
                            >
                                <span>Join Waitlist</span>
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </form>
                    </Form>

                    <div className="pt-2">
                        <p className="text-muted-foreground text-center text-xs">
                            By signing up, you agree to our{' '}
                            <a
                                href="/terms"
                                className="text-blue-600 underline-offset-2 hover:underline"
                            >
                                Terms of Service
                            </a>{' '}
                            and{' '}
                            <a
                                href="/privacy"
                                className="text-blue-600 underline-offset-2 hover:underline"
                            >
                                Privacy Policy
                            </a>
                            .
                        </p>
                        <p className="text-muted-foreground mt-1 text-center text-xs">
                            We'll never share your information with third
                            parties.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
