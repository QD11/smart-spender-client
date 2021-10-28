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
        const year = string.slice(0,4)
        const month = string.slice(5,7)
        const day = string.slice(8,10)
        return `${month}/${day}/${year}`
        // let options = {year: "numeric", month: "long", day: "numeric"};
        // return new Date(string).toUTCString('en-US', options)
    }

    return(
        <div>
            <table>
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
      
                </tbody>
            </table>
        </div>
    
    )}

export default Expense