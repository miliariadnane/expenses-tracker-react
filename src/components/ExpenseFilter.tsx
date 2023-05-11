// @ts-ignore
import React from 'react'

interface Props {
    onSelectCategory: (category: string) => void;
}

export const ExpenseFilter = ({onSelectCategory}: Props) => {
    return (
        <select
            className="form-select"
            onChange={(e) => onSelectCategory(e.target.value)}
        >
            <option value="all">All</option>
            <option value="food">Food</option>
            <option value="transportation">Transportation</option>
            <option value="housing">Housing</option>
            <option value="utilities">Utilities</option>
            <option value="clothing">Clothing</option>
        </select>
    )
}
