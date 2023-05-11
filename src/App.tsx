import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ExpenseList} from "./components/expenseList.tsx";

function App() {
    const [expenses, setExpenses] = useState([
        { id: 1, description: 'Rent', amount: 1000, category: 'Housing' },
        { id: 2, description: 'Groceries', amount: 200, category: 'Food' },
        { id: 3, description: 'Gas', amount: 50, category: 'Transportation' },
        { id: 4, description: 'Dinner', amount: 100, category: 'Food' },
        { id: 5, description: 'Car Payment', amount: 300, category: 'Transportation' }
    ]);

    return (
        <ExpenseList
            expenses={expenses}
            onDelete={(id) => setExpenses(expenses.filter(expense => expense.id !== id))}
        />
    )
}

export default App
