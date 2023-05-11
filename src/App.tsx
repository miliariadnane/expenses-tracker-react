import {useState} from 'react';
import {ExpenseList} from "./components/ExpenseList.tsx";
import {ExpenseFilter} from "./components/ExpenseFilter.tsx";
import {ExpenseForm} from "./components/ExpenseForm.tsx";

export const categories = [
    'food',
    'transportation',
    'housing',
    'utilities',
    'clothing'
]

function App() {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [expenses, setExpenses] = useState([
        {id: 1, description: 'Rent', amount: 1000, category: 'housing'},
        {id: 2, description: 'Groceries', amount: 200, category: 'food'},
        {id: 3, description: 'Gas', amount: 50, category: 'transportation'},
        {id: 4, description: 'Dinner', amount: 100, category: 'food'},
        {id: 5, description: 'Car Payment', amount: 300, category: 'transportation'}
    ]);

    const visibleExpenses = selectedCategory
        ? expenses.filter(expense => expense.category === selectedCategory)
        : expenses

    return (
        <div className="container">
            <h1 className="text-center mt-3">Expense Tracker</h1>
            <div className="mb-3">
                <ExpenseForm/>
            </div>
            <div className="mb-3 mt-2">
                <ExpenseFilter
                    onSelectCategory={(category) => setSelectedCategory(category)}
                />
            </div>
            <ExpenseList
                expenses={visibleExpenses}
                onDelete={(id) => setExpenses(
                    expenses.filter(expense => expense.id !== id))}
            />
        </div>
    )
}

export default App
