import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Popup from 'reactjs-popup'

const EditButton = ({setPercentages, percentages, tableBudgetPlans, setTableBudgetPlans, budgetPlans, setBudgetPlans}) => {
    const [formData, setFormData] = useState({
        balance: "",
        housing_percentage: "",
        transport_percentage: "",
        food_percentage: "",
        utility_percentage: "",
        insurance_percentage: "",
        emergency_percentage: "",
        discretionary_percentage: "",
        other_percentage: ""
    })

    useEffect(() => {
        setFormData(formData => {
            return({
                ...formData,
                balance: tableBudgetPlans.balance,
                housing_percentage: tableBudgetPlans.housing_percentage,
                transport_percentage: tableBudgetPlans.transport_percentage,
                food_percentage: tableBudgetPlans.food_percentage,
                utility_percentage: tableBudgetPlans.utility_percentage,
                insurance_percentage: tableBudgetPlans.insurance_percentage,
                emergency_percentage: tableBudgetPlans.emergency_percentage,
                discretionary_percentage: tableBudgetPlans.discretionary_percentage,
                other_percentage: tableBudgetPlans.other_percentage
            })
        })
    }, [])

    const onChangeHandler = (event) => {
        setFormData((formData) => {
            return ({
                ...formData,
                [event.target.name] : parseFloat(event.target.value)
            })
        })
    }

    //imma cheat
    const onUpdateHandler = () => {
        fetch(`http://localhost:9292/budgetplan/${tableBudgetPlans.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            setTableBudgetPlans(data)
            /////////////////////////////
            console.log(data)
            const newData = {...data}
            delete newData.balance
            delete newData.id
            delete newData.user_id
            const arrayPercentages = Object.values(newData)
            const newBudgetPlans = [...budgetPlans]
            const newPercentages = [...percentages]
            console.log(newPercentages)
            for (let i = 0; i < newBudgetPlans.length; i++) {
                newBudgetPlans[i].plannedPercentage = arrayPercentages[i]
                newBudgetPlans[i].plannedMoney = data.balance * arrayPercentages[i]/100
                newPercentages[i].plannedPercentage = arrayPercentages[i]
            }
            setBudgetPlans(newBudgetPlans)
            setPercentages(newPercentages)
        })
    } 



    return (
        <div>
            <Popup 
                modal 
                nested 
                trigger={<button type="button" >Edit</button>}
            >
            {close => (
                <Modal>
                    <div> Update your budget/planned % </div>
                        <div>
                            <FlexDiv>
                                <div>
                                    <label>Available Monthly Budget ($)</label>
                                    <input type="number" step=".01" min="0" required="required" name='balance' value={formData.balance} onChange={onChangeHandler}></input>
                                </div>
                            </FlexDiv>
                            <FlexDiv>
                                <LabelDiv>
                                    <div>
                                        <label>Housing (%)</label>
                                        <input type="number" step=".01" min="0" max="100" required="required" name='housing_percentage' value={formData.housing_percentage} onChange={onChangeHandler}></input>
                                    </div>
                                    <div>
                                        <label>Food (%)</label>
                                        <input type="number" step=".01" min="0" max="100" required="required" name='food_percentage' value={formData.food_percentage} onChange={onChangeHandler}></input>
                                    </div>
                                    <div>
                                        <label>Insurance (%)</label>
                                        <input type="number" step=".01" min="0" max="100" required="required" name='insurance_percentage' value={formData.insurance_percentage} onChange={onChangeHandler}></input>
                                    </div>
                                    <div>
                                        <label>Discretionary (%)</label>
                                        <input type="number" step=".01" min="0" max="100" required="required" name='discretionary_percentage' value={formData.discretionary_percentage} onChange={onChangeHandler}></input>
                                    </div>
                                </LabelDiv>
                                <LabelDiv>
                                    <div>
                                        <label>Transportation (%)</label>
                                        <input type="number" step=".01" min="0" max="100" required="required" name='transport_percentage' value={formData.transport_percentage} onChange={onChangeHandler}></input>
                                    </div>
                                    <div>
                                        <label>Utility (%)</label>
                                        <input type="number" step=".01" min="0" max="100" required="required" name='utility_percentage' value={formData.utility_percentage} onChange={onChangeHandler}></input>
                                    </div>
                                    <div>
                                        <label>Emergency (%)</label>
                                        <input type="number" step=".01" min="0" max="100" required="required" name='emergency_percentage' value={formData.emergency_percentage} onChange={onChangeHandler}></input>
                                    </div>
                                    <div>
                                        <label>Other (%)</label>
                                        <input type="number" step=".01" min="0" max="100" required="required" name='other_percentage' value={formData.other_percentage} onChange={onChangeHandler}></input>
                                    </div>
                                </LabelDiv>
                            </FlexDiv>
                        </div>
                        <Actions>
                            <ActionsButton onClick={() => {onUpdateHandler(); close()}}>Update</ActionsButton>
                            <ActionsButton onClick={() => close()}>Cancel</ActionsButton>
                        </Actions>
                </Modal>
    )}
            </Popup>
        </div>
    )
}

export default EditButton

const FlexDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const LabelDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const Modal = styled.div`
    font-size: 25px;
    width: 50vw;
    background-color: #e5e5e5;
    border: 2px solid black;
    border-radius: 25px;
    size: b5;
    text-align: center;
    padding: 20px;
`

const ActionsButton = styled.button`
    padding: 15px;
    border-radius: 12px;
    font-size: 15px;
    border: 1px solid black;
    cursor: pointer;
`

const ActionsSubmit = styled.input`
    // padding: 15px;
    // border-radius: 12px;
    // font-size: 15px;
    // border: 1px solid black;
    // cursor: pointer;
`

const Actions = styled.div`
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
`