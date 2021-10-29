import React, {useState} from 'react'
import EditExpense from './EditExpense';
import styled from 'styled-components'

const Spending = ({spending, deleteSpending, categories, handleUpdateSpending, setSpendings}) => {
    const[isEditing, setIsEditing] = useState(false);

    const handleExpenseUpdate = (updatedExpense) => {
        setIsEditing(false);
        handleUpdateSpending(updatedExpense);
    }
    console.log(spending.id)

    const handleDelete = () => {
        console.log(spending.id)
        fetch(`http://localhost:9292/spending/${spending.id}`, {
            method: "DELETE",
        });
        deleteSpending(spending.id);

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
                    <SpendingsDiv> 
                        <SpanDes>
                            {spending.description} 
                        </SpanDes>
                        <SpanAmo>
                            ${spending.amount}
                        </SpanAmo>
                        <SpanDat>
                            {formatDate(spending.date)} 
                        </SpanDat>
                        <SpanCat>
                            {spending.category}
                        </SpanCat>
                        <SpanStyle>
                            <button onClick={() =>setIsEditing((isEditing) => !isEditing)}>Edit Spending</button>
                        </SpanStyle>
                        <SpanStyle>
                            <button onClick={handleDelete}>Delete</button>
                        </SpanStyle>
                    </SpendingsDiv>
                )}
        </DivCard>
    )
}

const DivCard = styled.div`
    width: 100%;
    box-shadow: 1px 1px 5px 3px rgb(132 133 132 / 40%);
    background-color: white;
    margin-bottom: 20px;
    border-radius: 10px;
`


const SpendingsDiv = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    font-size: 1.2em;
`

const SpanDes = styled.span`
    margin-left: 65px;
    width: 213px;
`

const SpanAmo = styled.span`
    margin-left: 100px;
    width: 215px;
`

const SpanDat = styled.span`
    margin-left: 100px;
    width: 155px;
`

const SpanCat = styled.span`
    margin-left: 100px;
    width: 220px;
`

const SpanStyle = styled.span`
    margin-left: 10px;
`

export default Spending
