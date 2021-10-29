import React, {useState} from 'react'
import styled from 'styled-components'

function NewExpense({categories, setSpendings, user}) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [newCategory, setNewCategory] = useState("")
    
    const newSpending = {
        description,
        amount,
        date,
        category_id: newCategory,
    };

    const configObj = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newSpending),
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch(`http://localhost:9292/spending/${user.id}`, configObj)
        .then((resp) => resp.json())
        .then((expenses) => setSpendings(expenses));  
    };

    return (
        <AddExpense>
            {/* <LabelHeader> */}
                <StyledH1> Create a new Expense </StyledH1>
            {/* </LabelHeader> */}
            <div>
            {/* <InputsContainer> */}
            <form onSubmit = {handleSubmit}>
                {/* <InputDiv> */}
                    <InputDiv 
                        id = "description"
                        type="text"
                        placeholder = "Description"
                        name = "description"
                        value = {description}
                        required = "required"
                        onChange={(e)=> setDescription(e.target.value)}
                    />
                {/* </InputDiv>
                <InputDiv> */}
                <InputDiv 
                    id = "amount"
                    type="number"
                    placeholder = "Amount"
                    name = "amount"
                    value = {amount}
                    min = "0.01"
                    step = "any"
                    required = "required"
                    onChange={(e)=> setAmount(e.target.value)}
                />
                {/* </InputDiv>
                <InputDiv> */}
                <InputCalender
                    id = "date"
                    type="date"
                    placeholder = ""
                    name = "date"
                    value = {date}
                    required = "required"
                    onChange={(e)=> setDate(e.target.value)}
                />
                {/* </InputDiv>
                <InputDiv> */}
                    <InputSelect 
                        placeholder="Select a Category"
                        onChange={(e) => setNewCategory(e.target.value)}
                    >
                        <option hidden>Select a Category</option>   
                        {categories.map((category) => (
                            <option key = {category.id} value={category.id}>
                                {category.description}
                            </option>    
                        ))}    
                    </InputSelect>
                {/* </InputDiv> */}
                <InputButton disabled= {newCategory && description && amount && date?false:true} type="submit">Add Expense</InputButton>
            </form>
            {/* </InputsContainer> */}
            </div>
        </AddExpense>
    )
}

const StyledH1 = styled.h1`
    margin-top: 6px;
`

const AddExpense = styled.div`
    margin-bottom: 25px;
    margin-top: 25px;
    margin-left: 5px;
    text-align: center;
    padding: 10px;
`

const InputDiv = styled.input`
    margin: 0px 3em;
    font-size: 1em;
    font-weight: 700;
    background-color: #ebeff2;
    margin-bottom: 10px;
`

const InputSelect = styled.select`
    margin: 0px 3em;
    font-size: 1em;
    font-weight: 700;
    background-color: #ebeff2;
`

const InputCalender = styled.input`
    margin: 0px 3em;
    font-size: 1.2em;
    font-weight: 700;
    background-color: #ebeff2;
`

const InputButton = styled.button`
    margin: 0px 3em;
    font-size: 1em;
    font-weight: 700;
`
// const InputsContainer = styled.div`
//     // display: flex,
// `

// const InputDiv = styled.div`
//     // margin:1em,
// `

// const LabelHeader = styled.div`
//     text-align: center; 
// `

export default NewExpense;
