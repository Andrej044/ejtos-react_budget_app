import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {expenses, budget} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total,item) => {
        return (total = total + item.cost);
    }, 0)
    const handleBudgetChange = (event) => {
        if(event.target.value > 20000){
            alert("Budget can't be more than 20000£");
            return;
        }
        if(event.target.value < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending");
        }
        setNewBudget(event.target.value);
    }
    return(
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type='number' step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;