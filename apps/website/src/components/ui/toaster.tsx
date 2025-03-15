import * as React from 'react';
import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
    type ToastProps,
    type ToastActionElement,
} from './toast';
import { useToast } from '../../hooks/use-toast';

export function Toaster() {
    const { toasts } = useToast();

    return (
        <ToastProvider>
            {toasts.map(function ({
                id,
                title,
                description,
                action,
                ...props
            }: {
                id: string;
                title?: React.ReactNode;
                description?: React.ReactNode;
                action?: ToastActionElement;
            } & ToastProps) {
                return (
                    <Toast key={id} {...props}>
                        <div className="flex flex-col gap-1.5">
                            {title && <ToastTitle>{title}</ToastTitle>}
                            {description && (
                                <ToastDescription>
                                    {description}
                                </ToastDescription>
                            )}
                        </div>
                        {action}
                        <ToastClose />
                    </Toast>
                );
            })}
            <ToastViewport />
        </ToastProvider>
    );
}
