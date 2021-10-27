import React, {useState} from 'react'

function NewExpense({categories, addNewExpense}) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("")

    //Do we need user_id somewhere in here??    
    const newSpending = {
        description,
        amount,
        date,
        category_id: category
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
        e.PreventDefault();
        
        fetch("http://localhost:9292/spending/:user_id", configObj)
        .then((resp) => resp.JSON())
        .then((expense) => {
            addNewExpense(expense)
        });
        
    };

    return (
        <div>
            <h3> Create a new Expense </h3>
            <form onSubmit = {handleSubmit}>
                <label htmlFor = "description"> Description:</label>
                <input 
                    id = "description"
                    type="text"
                    placeholder = ""
                    name = "description"
                    value = {description}
                    onChange={(e)=> setDescription(e.target.value)}
                />
                <label htmlFor = "amount"> Amount:</label>
                <input 
                    id = "amount"
                    type="number"
                    placeholder = "$"
                    name = "amount"
                    value = {amount}
                    onChange={(e)=> setAmount(e.target.value)}
                />
                <label htmlFor = "date"> Date: </label>
                <input 
                    id = "date"
                    type="date"
                    placeholder = ""
                    name = "date"
                    value = {date}
                    onChange={(e)=> setDate(e.target.value)}
                />
                <label>
                    Category:
                    <select
                        placeholder="Select a Category"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="none">Select a Category</option>   
                        {categories.map((category) => (
                            <option key = {category.id} value={category.id}>
                                {category.description}
                            </option>    
                        ))}    
                    </select>
                </label>
                <button type="submit">Add Expense</button>
            </form>
        </div>
    )
}

export default NewExpense;
