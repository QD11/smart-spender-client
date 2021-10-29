import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom'
import NewExpense from './NewExpense'
import Spending from './Spending'
import styled from 'styled-components'

const Expenses = ({user, categories, spendings, setSpendings}) => {    
    // const [spendings, setSpendings] = useState([]);
    
    useEffect(()=> {fetch(`http://localhost:9292/spending/${user.id}`)
    .then(resp => resp.json())
    .then((data)=> setSpendings(data))}, [user]);

    //Redirects to user to login page on refresh
    if (!user)  {return <Redirect to ="/"/>}    

    function handleUpdateSpending(updatedSpending) {
        console.log(updatedSpending)
        const updatedSpendings = spendings.map((spending)=> {
            if (spending.id === updatedSpending.id) {
                return updatedSpending;                
            } else {
                return spending;
            }});
        console.log(updatedSpendings)
            setSpendings(updatedSpendings)
        };

    const deleteSpending = (id) => {
        const updatedSpendings = spendings.filter((spending) => spending.id !== id);
        setSpendings(updatedSpendings)
    }

    console.log(spendings)

    return(
        <WholeDiv>
            <NewExpenseDiv>
                <NewExpense user={user} categories={categories} setSpendings = {setSpendings} />
            </NewExpenseDiv>
            <Spendingscontainer>
                {spendings.map(spending => <Spending key={spending.id} setSpendings={setSpendings} spending={spending} deleteSpending={deleteSpending} categories={categories} handleUpdateSpending={handleUpdateSpending}/>)}
            </Spendingscontainer>
        </WholeDiv>   
    )
}

const WholeDiv = styled.div`
    margin-left: 90px;
`

const NewExpenseDiv = styled.div`
    background-color: white;
    box-shadow: 1px 1px 5px 3px rgb(132 133 132 / 40%);
    border-radius: 10px;
`

const Spendingscontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // box-shadow: 1px 1px 5px 3px rgb(132 133 132 / 40%);
    // background-color: white;
`

export default Expenses;