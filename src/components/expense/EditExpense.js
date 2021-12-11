import React, { useState } from "react";
import styled from 'styled-components'

function EditExpense({ spending, handleExpenseUpdate, setIsEditing, categories}) {

  // const convertCategoryToCategoryID = (category) => {
  //   switch (category){
  //     case 'Housing':
  //       return 1
  //     case 'Transportation':
  //       return 2
  //     case 'Food':
  //       return 3
  //     case 'Utility':
  //       return 4
  //     case 'Insurance':
  //       return 5
  //     case 'Emergency':
  //       return 6
  //     case 'Discretionary':
  //       return 7
  //     case 'Other':
  //       return 8
  //     default:
  //       console.log("NOPE")
  //   }
  // }

  // const convertCategoryIDToCategory = (category) => {
  //   switch (category){
  //     case 1:
  //       return 'Housing'
  //     case 2:
  //       return 'Transportation'
  //     case 3:  
  //       return 'Food'
  //     case 4: 
  //       return 'Utility'
  //     case 5: 
  //       return 'Insurance'
  //     case 6: 
  //       return 'Emergency'
  //     case 7: 
  //       return 'Discretionary'
  //     case 9: 
  //       return 'Other'
  //     default:
  //       console.log("NOPE")
  //   }
  // }


  const [formData, setFormData] = useState({
    description: spending.description,
    amount: spending.amount,
    date: spending.date,
    category_id: 0
  })


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
    .then((updatedSpending) => handleExpenseUpdate(updatedSpending))
  }


  return (
    <StyledForm onSubmit={handleEditForm}>

          <StyledDes
            id="description"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
        />


          <StyledAmo 
            id="amount"
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
        />

          <StyledDat 
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
        />

          <StyledSelect 
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
          </StyledSelect>
          <StyledSave>
            <input disabled={formData.description && formData.amount && formData.date && formData.category_id !== 0 ? false:true} type="submit" value="Save"/>
          </StyledSave>
          <StyledCan>
            <input type="button" value="Cancel" onClick={() => setIsEditing(isEditing => !isEditing)}/>
          </StyledCan>
    </StyledForm>
  );
}

const StyledForm = styled.form`
    height: 70px;
    display: flex;
    align-items: center;
`

const StyledDes = styled.input`
  font-size: 1em;
  font-weight: 700;
  background-color: #ebeff2;
  width: 211px;
  margin-left: 63px;
`

const StyledAmo = styled.input`
  // margin: 0 px3em;
  font-size: 1em;
  font-weight: 700;
  background-color: #ebeff2;
  width: 211px;
  margin-left: 95px;
`
const StyledDat = styled.input`
  // margin: 0 px3em;
  font-size: 1em;
  font-weight: 700;
  background-color: #ebeff2;
  width: 157px;
  margin-left: 95px;
`

const StyledSelect = styled.select`
  font-size: 1em;
  font-weight: 700;
  background-color: #ebeff2;
  width: 160px;
  margin-left: 95px;
`

const StyledSave = styled.span`
  font-size: 1em;
  font-weight: 700;
  width: 50px;
  margin-left: 100px;
`

const StyledCan = styled.span`
  font-size: 1em;
  font-weight: 700;
  width: 50px;
  margin-left: 20px;
`

export default EditExpense;