import React from 'react';
import Expense from './Expense'


function ExpenseList({spendings}) {
    return(
        <div>
            <h3>Spending Items</h3>
            {spendings.map((spending) => (
                <Expense key = {spending.id} 
                spending = {spending}/>))}
        </div>
    )
}

export default ExpenseList