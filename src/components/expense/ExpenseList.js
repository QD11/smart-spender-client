import React from 'react';
import Expense from './Expense'


function ExpenseList({spendings, deleteSpending, onUpdateSpending}) {
    return(
        <div>
            <h3>Spending Items</h3>
              <table>
                <thead>
                    <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Modify?</th>
                    <th>Remove?</th>
                    </tr>
                </thead>
                </table>
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