import React, { useState } from "react";

function EditExpense({ spending, onUpdateSpending}) {
  const { id, description, amount, date, category_id } = spending;

  const [updatedAmount, setUpdatedAmount] = useState(amount);
  const [updatedDate, setUpdatedDate] = useState(date);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedCategory, setUpdatedCategory] = useState(category_id)
  

  function handleEditForm(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/spending/${spending.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({amount: updatedAmount, date: updatedDate, description: updatedDescription, category_id: updatedCategory}),
    })
    .then((resp)=>resp.json())
    .then((updatedSpending) => onUpdateSpending(updatedSpending))
  }
  return (
    <form onSubmit={handleEditForm}>
         <input 
            id="description"
            type="text"
            name="description"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
        />
          <input 
            id="amount"
            type="text"
            name="amount"
            value={updatedAmount}
            onChange={(e) => setUpdatedAmount(e.target.value)}
        />
          <input 
            id="date"
            type="date"
            name="date"
            value={updatedDate}
            onChange={(e) => setUpdatedDate(e.target.value)}
        />
        <input 
            id="Category"
            type="text"
            name="Category"
            value={updatedCategory}
            onChange={(e) => setUpdatedCategory(e.target.value)}
        />
          <input type="submit" value="Save"/>
    </form>
  );
}

export default EditExpense;