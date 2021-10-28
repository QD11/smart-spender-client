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
                <tbody>
            {isEditing ?
                (<EditExpense spending={spending}
                onUpdateSpending = {handleExpenseUpdate}
                />):(    
                    <tr>
                        <td>{description} </td>
                        <td>{amount} </td>
                        <td>{formatDate(date)} </td>
                        <td>{category} </td>
                        <td> <button onClick={() =>setIsEditing((isEditing) => !isEditing)}>
                        Edit Spending </button></td>
                        <td><button onClick={handleDelete}>Delete</button></td>
                    </tr>)}
                {/* //         <p>
                //         Descripton: 
                //         Amount: 
                //         date: {formatDate(date)}
                //         category: {category}
                //         <button onClick={() =>setIsEditing((isEditing) => !isEditing)}>
                //             Edit Spending
                //         </button>
                //         
                //         </p>
                //     </li>
                // )} */}
                </tbody>
            </table>
        </div>
    
    )}

export default Expense