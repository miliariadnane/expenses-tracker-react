// @ts-ignore
import React from 'react'
import {z} from "zod";
import {useForm} from "react-hook-form";
// @ts-ignore
import {zodResolver} from "@hookform/resolvers/zod";
import categories from "./categories";


const schema = z.object({
    description: z.string()
        .min(5, {message: 'Description must be at least 5 characters'})
        .max(100, {message: 'Description must be at most 100 characters'}),
    amount: z.number({invalid_type_error: 'Amount is required'})
        .min(0.01)
        .max(1_000_000),
    category: z.enum(categories, {
        errorMap: () => ({message: 'Category is required'})
    })
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
    onSubmit: (data: ExpenseFormData) => void;
}

export const ExpenseForm = ({onSubmit}: Props) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<ExpenseFormData>({resolver: zodResolver(schema)});

    return (
        <form
            onSubmit={handleSubmit(data => {
                onSubmit(data);
                reset();
            })}
        >
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input
                    {...register('description')}
                    type="text"
                    className="form-control"
                    id="description"
                />
                {errors.description &&
                    <p className="text-danger">{errors.description.message}</p>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input
                    {...register('amount', {valueAsNumber: true})}
                    type="number"
                    className="form-control"
                    id="amount"
                />
                {errors.amount &&
                    <p className="text-danger">{errors.amount.message}</p>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select
                    {...register('category')}
                    className="form-select"
                    id="category"
                >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                {errors.category &&
                    <p className="text-danger">{errors.category.message}</p>
                }
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
