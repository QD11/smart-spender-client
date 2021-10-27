import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom'
import ExpenseList from './ExpenseList';
import NewExpense from './NewExpense'


const Expenses = ({user, categories}) => {    
    const [spendings, setSpendings] = useState([]);
    console.log(user.id)
    
    useEffect(()=> {fetch(`http://localhost:9292/spending/${user.id}`)
    .then(resp => resp.json())
    .then((data)=> setSpendings(data))}, []);
    console.log(spendings)
    
    //Redirects to user to login page on refresh
    if (!user)  {return <Redirect to ="/"/>}    

    const addNewExpense = (spending) =>
    {
        setSpendings([...spendings, spending]);
    }

    function handleUpdateSpending(updatedSpending) {
        const updatedSpendings = spendings.map((spending)=> {
            if (spending.id === updatedSpending.id) {
                return updatedSpending;                
            } else {
                return spending;
            }});
            setSpendings(updatedSpendings)
        };

        const deleteSpending = (id) => {
            const updatedSpendings = spendings.filter((spending) => spending.id !== id);
            setSpendings(updatedSpendings)
        }

    return(
        <div>
            <ExpenseList spendings = {spendings}
                deleteSpending = {deleteSpending}
                onUpdateSpending = {handleUpdateSpending}
            />
            <NewExpense categories={categories} addNewExpense = {addNewExpense} />
        </div>   
    )
}

export default Expenses;