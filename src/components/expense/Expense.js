import React from 'react';

function Expense ({spending}) {
    const {id, description, amount, date , category} = spending
    return(
        <div>
            <li>
                    <>
                        Descripton: {description} 
                        Amount: {amount}
                        date: {date}
                        category: {category}
                    </>
            </li>
        </div>
    )
}

export default Expense