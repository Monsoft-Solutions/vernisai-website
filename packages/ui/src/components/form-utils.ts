import * as React from 'react';
import { FieldPath, FieldValues, useFormContext } from 'react-hook-form';

export const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);
    const { getFieldState, formState } = useFormContext();

    if (!fieldContext) {
        throw new Error('useFormField should be used within <FormField>');
    }

    const fieldState = getFieldState(fieldContext.name, formState);

    const { id } = itemContext;

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};

export type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
    name: TName;
};

export const FormFieldContext = React.createContext<FormFieldContextValue>(
    {} as FormFieldContextValue,
);

export type FormItemContextValue = {
    id: string;
};

export const FormItemContext = React.createContext<FormItemContextValue>(
    {} as FormItemContextValue,
);
