import React, {useState} from 'react';
import EditExpense from './EditExpense';

function Expense ({spending, deleteSpending, onUpdateSpending}) {
    const {id, description, amount, date , category} = spending
    const[isEditing, setIsEditing] = useState(false);

    const handleExpenseUpdate = (updatedExpense) => {
        setIsEditing(false);
        onUpdateSpending(updatedExpense);
    }

    const handleDelete = () => {
        deleteSpending(id);
        fetch(`http://localhost:9292/spending/${id}`, {
            method: "DELETE",
        });
    };

    const formatDate = (string) => {
        let options = {year: "numeric", month: "long", day: "numeric"};
        return new Date(string).toUTCString('en-US', options)
    }

    return(
        <div>
            {isEditing ?
                (<EditExpense spending={spending}
                onUpdateSpending = {handleExpenseUpdate}
                />):(    
                    <li>
                        <p>
                        Descripton: {description} 
                        Amount: {amount}
                        date: {formatDate(date)}
                        category: {category}
                        <button onClick={() =>setIsEditing((isEditing) => !isEditing)}>
                            Edit Spending
                        </button>
                        <button onClick={handleDelete}>Delete</button>
                        </p>
                    </li>
                )}
        </div>
    );
}

export default Expense