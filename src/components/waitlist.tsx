import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
    Form,
    FormControl,
    FormDescription,
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
});

type FormValues = z.infer<typeof formSchema>;

export function Waitlist() {
    const { toast } = useToast();
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            name: '',
        },
    });

    function onSubmit(data: FormValues) {
        // In a real implementation, this would send the data to a backend service
        console.log(data);
        toast({
            title: 'Success!',
            description:
                "You've been added to our waitlist. We'll be in touch soon!",
        });
        form.reset();
    }

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                        Join the VernisAI Waitlist
                    </h2>
                    <p className="text-muted-foreground max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Be among the first to experience the power of AI-driven
                        workflow automation. Sign up for early access and
                        updates.
                    </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2 lg:mx-0">
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
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Your name"
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
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="your.email@example.com"
                                                type="email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription className="text-foreground text-xs">
                                            We'll never share your email with
                                            anyone else.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="mt-8 w-full bg-black text-white"
                            >
                                Join Waitlist
                            </Button>
                        </form>
                    </Form>
                    <p className="text-muted-foreground text-xs">
                        By signing up, you agree to our{' '}
                        <a href="#" className="underline underline-offset-2">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="underline underline-offset-2">
                            Privacy Policy
                        </a>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
}
