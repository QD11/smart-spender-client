import React, { useState } from "react";

function EditExpense({ spending, onUpdateSpending}) {
  const { id, description, amount, date } = spending;

  const [updatedAmount, setUpdatedAmount] = useState(amount);
  const [updatedDate, setUpdatedDate] = useState(date);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  

  function handleEditForm(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/spending/${id}/edit`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({amount: updatedAmount, date: updatedDate, description: updatedDescription }),
    })
    .then((resp)=>resp.JSON())
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
        <input type="submit" value="Save"/>
    </form>
  );
}

export default EditExpense;