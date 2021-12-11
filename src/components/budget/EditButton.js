import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Popup from 'reactjs-popup'
import {BiEdit} from 'react-icons/bi'

const EditButton = ({setPercentages, percentages, tableBudgetPlans, setTableBudgetPlans, budgetPlans, setBudgetPlans, user}) => {
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


    const [percentageCheck, setPercentageCheck] = useState(false)

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    const onChangeHandler = (event) => {
        setFormData((formData) => ({
                ...formData,
                [event.target.name] : parseFloat(event.target.value)
            })
        )
        console.log(Object.values(formData).reduce((a, b) => a + b)-formData.balance)
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
            const newData = {...data}
            delete newData.balance
            delete newData.id
            delete newData.user_id
            const arrayPercentages = Object.values(newData)
            const newBudgetPlans = [...budgetPlans]
            const newPercentages = [...percentages]
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
                trigger={<EditBut/>}
            >
            {close => (
                <Modal>
                    <div> Update your budget/planned % </div>
                        <div>
                            <FlexDiv>
                                <div>
                                    <label>Available Monthly Budget ($)</label>
                                    <StyledInput type="number" step=".01" min="0" required="required" name='balance' value={formData.balance} onChange={onChangeHandler}></StyledInput>
                                </div>
                            </FlexDiv>
                            <FlexDiv>
                                <LabelDiv>
                                    <div>
                                        <label>Housing (%)</label>
                                        <StyledInput type="number" step=".01" min="0" max="100" required="required" name='housing_percentage' value={formData.housing_percentage} onChange={onChangeHandler}></StyledInput>
                                    </div>
                                    <div>
                                        <label>Food (%)</label>
                                        <StyledInput type="number" step=".01" min="0" max="100" required="required" name='food_percentage' value={formData.food_percentage} onChange={onChangeHandler}></StyledInput>
                                    </div>
                                    <div>
                                        <label>Insurance (%)</label>
                                        <StyledInput type="number" step=".01" min="0" max="100" required="required" name='insurance_percentage' value={formData.insurance_percentage} onChange={onChangeHandler}></StyledInput>
                                    </div>
                                    <div>
                                        <label>Discretionary (%)</label>
                                        <StyledInput type="number" step=".01" min="0" max="100" required="required" name='discretionary_percentage' value={formData.discretionary_percentage} onChange={onChangeHandler}></StyledInput>
                                    </div>
                                </LabelDiv>
                                <LabelDiv>
                                    <div>
                                        <label>Transportation (%)</label>
                                        <StyledInput type="number" step=".01" min="0" max="100" required="required" name='transport_percentage' value={formData.transport_percentage} onChange={onChangeHandler}></StyledInput>
                                    </div>
                                    <div>
                                        <label>Utility (%)</label>
                                        <StyledInput type="number" step=".01" min="0" max="100" required="required" name='utility_percentage' value={formData.utility_percentage} onChange={onChangeHandler}></StyledInput>
                                    </div>
                                    <div>
                                        <label>Emergency (%)</label>
                                        <StyledInput type="number" step=".01" min="0" max="100" required="required" name='emergency_percentage' value={formData.emergency_percentage} onChange={onChangeHandler}></StyledInput>
                                    </div>
                                    <div>
                                        <label>Other (%)</label>
                                        <StyledInput type="number" step=".01" min="0" max="100" required="required" name='other_percentage' value={formData.other_percentage} onChange={onChangeHandler}></StyledInput>
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

const EditBut = styled(BiEdit)`
    font-size: 35px;
    box-shadow: 1px 1px 5px 3px rgb(132 133 132 / 40%);
    border-radius: 10px;
    border: 0px solid black;
    padding: 7px;
    margin-bottom: 10px;
    margin-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
    margin-left: 20px;
    background-color: white;
    cursor: pointer;
    // transition: all 0.5s;
    // & :hover {
    //     transform: scale(1.5)
    // }
`

const StyledInput = styled.input`
    font-size: 1em;
`

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
    width: 500px;
    background-color: white;
    // border: 2px solid black;
    border-radius: 10px;
    size: b5;
    text-align: center;
    padding: 20px;
    box-shadow: 1px 1px 5px 3px rgb(132 133 132 / 40%);
`

const ActionsButton = styled.button`
    padding: 15px;
    font-size: 15px;
    cursor: pointer;
`

const Actions = styled.div`
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
`