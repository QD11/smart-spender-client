import React from 'react';
import Expense from './Expense'


function ExpenseList({spendings, deleteSpending, onUpdateSpending, categories}) {
    return(
        <div>
            <h3>Spending Items</h3>
              
            {spendings.map((spending) => (
                <Expense key = {spending.id} 
                spending = {spending}
                deleteSpending = {deleteSpending}
                onUpdateSpending = {onUpdateSpending}
            
                />))}
        </div>
    )
}

export default ExpenseList