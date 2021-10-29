import React, {useState} from 'react'
import EditExpense from './EditExpense';
import styled from 'styled-components'

const Spending = ({spending, deleteSpending, categories, handleUpdateSpending}) => {
    const[isEditing, setIsEditing] = useState(false);

    const handleExpenseUpdate = (updatedExpense) => {
        setIsEditing(false);
        handleUpdateSpending(updatedExpense);
    }

    const handleDelete = () => {
        deleteSpending(spending.id);
        fetch(`http://localhost:9292/spending/${spending.id}`, {
            method: "DELETE",
        });
    };

    const formatDate = (string) => {
        const year = string.slice(0,4)
        const month = string.slice(5,7)
        const day = string.slice(8,10)
        return `${month}/${day}/${year}`
    }

    return (
        <DivCard>
            {isEditing ?
                (<EditExpense categories = {categories} spending={spending}
                handleExpenseUpdate = {handleExpenseUpdate} setIsEditing={setIsEditing} categories={categories}/>)
                :
                (    
                    <div> Description: {spending.description} Amount: ${spending.amount} Date: {formatDate(spending.date)} Category: {spending.category}
                        <button onClick={() =>setIsEditing((isEditing) => !isEditing)}>
                        Edit Spending </button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                )}
        </DivCard>
    )
}

const DivCard = styled.div`
    display: flex,
`

export default Spending
