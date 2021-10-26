import React from 'react';

function Expense ({spending}) {
    const {id, description, amount, date , category_id} = spending
    return(
        <div>
           <li>
                <>
                    Descripton: {description} 
                    Amount: {amount}
                    date: {date}
                    category: {category_id}
                </>
           </li>
        </div>
    )
}

export default Expense