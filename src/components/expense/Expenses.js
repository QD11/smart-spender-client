import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom'
import NewExpense from './NewExpense'
import Spending from './Spending'

const Expenses = ({user, categories}) => {    
    const [spendings, setSpendings] = useState([]);
    
    useEffect(()=> {fetch(`http://localhost:9292/spending/${user.id}`)
    .then(resp => resp.json())
    .then((data)=> setSpendings(data))}, []);

    //Redirects to user to login page on refresh
    if (!user)  {return <Redirect to ="/"/>}    

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
            <NewExpense user={user} categories={categories} setSpendings = {setSpendings} />
            {spendings.map(spending => <Spending key={spending.id} spending={spending} deleteSpending={deleteSpending} categories={categories} handleUpdateSpending={handleUpdateSpending}/>)}
        </div>   
    )
}

export default Expenses;