import React, {useState, useEffect} from 'react';
import ExpenseList from './ExpenseList';


const Expenses = ({user}) => {
    const [spendings, setSpendings] = useState([]);

    console.log('hi', user)

    useEffect(()=> {fetch(`http://localhost:9292/spending/${user.id}`)
    .then(resp => resp.json())
    .then((data)=> setSpendings(data))}, []);


    return(
        <div>
            <ExpenseList spendings = {spendings}/>
        </div>   
    )
}

export default Expenses;