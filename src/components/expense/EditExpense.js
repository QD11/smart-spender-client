import React, { useState } from "react";

function EditExpense({ spending, handleExpenseUpdate, setIsEditing, categories}) {
  console.log(typeof handleExpenseUpdate)
  const convertCategoryToCategoryID = (category) => {
    switch (category){
      case 'Housing':
        return 1
      case 'Transportation':
        return 2
      case 'Food':
        return 3
      case 'Utility':
        return 4
      case 'Insurance':
        return 5
      case 'Emergency':
        return 6
      case 'Discretionary':
        return 7
      case 'Other':
        return 8
      default:
        console.log("NOPE")
    }
  }

  const convertCategoryIDToCategory = (category) => {
    switch (category){
      case 1:
        return 'Housing'
      case 2:
        return 'Transportation'
      case 3:  
        return 'Food'
      case 4: 
        return 'Utility'
      case 5: 
        return 'Insurance'
      case 6: 
        return 'Emergency'
      case 7: 
        return 'Discretionary'
      case 9: 
        return 'Other'
      default:
        console.log("NOPE")
    }
  }


  const [formData, setFormData] = useState({
    description: spending.description,
    amount: spending.amount,
    date: spending.date,
    category_id: 0
  })

  console.log(formData)

  const handleChange = (event) => {
    if (event.target.name === "category_id") {
      setFormData(formData => {
        return({
          ...formData,
          [event.target.name] : parseInt(event.target.value)
        })
      })
    }
    else {
    setFormData(formData => {
      return({
        ...formData,
        [event.target.name] : event.target.value
      })
    })}
  }

  

  function handleEditForm(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/spending/${spending.id}/edit`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((resp)=>resp.json())
    .then((updatedSpending) => console.log(updatedSpending))
  }


  return (
    <form onSubmit={handleEditForm}>
        <label>
          Description: 
        </label>
          <input 
            id="description"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
        />
        <label>
          Amount: $ 
        </label>
          <input 
            id="amount"
            type="number"
            min="0.01"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
        />
        <label>
          Date: 
        </label>
          <input 
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
        />
          <select 
            placeholder="Select a Category"
            name="category_id"
            onChange={handleChange}
          >
            <option hidden value={0} >Select a Category</option>   
            {categories.map((category) => (
                <option key = {category.id} value={category.id}>
                    {category.description}
                </option>    
            ))}    
          </select>
          <input disabled={formData.description && formData.amount && formData.date && formData.category_id !== 0 ? false:true} type="submit" value="Save"/>
          <input type="button" value="Cancel" onClick={() => setIsEditing(isEditing => !isEditing)}/>
    </form>
  );
}

export default EditExpense;