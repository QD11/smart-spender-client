import React, {useState} from 'react';
import ExpenseList from '.ExpenseList';


const Expenses = () => {
    const [spendings, setSpendings] = useState([]);

    useEffect(()=> {fetch('http://localhost:9292/spending')
    .then(resp => resp.json())
    .then((expense)=> setSpendings(expense))}, []);

    return(
        <div>
            <ExpenseList expenses = {spendings}/>
        </div>   
    )
}

export default Expenses;