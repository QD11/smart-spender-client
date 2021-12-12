import React, {useState, useEffect} from 'react'
import CategoryTable from './CategoryTable'
import BarChart from './BarChart'
import EditButton from './EditButton'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'

const BudgetMain = ({user}) => {
    const [percentages, setPercentages] = useState(null)
    const [budgetPlans, setBudgetPlans] = useState(null)
    const [tableBudgetPlans, setTableBudgetPlans] = useState(null)

    useEffect(() => {
        // fetch(`http://localhost:9292/budgetplan/${user.id}`)
        fetch(`https://smart-spender-server.herokuapp.com/budgetplan/${user.id}`)
        .then(resp => resp.json())
        .then(data => {
            setBudgetPlans(data)
            setPercentages(
                [...data].map(element => {
                    return({
                        category: element.category,
                        plannedPercentage: element.plannedPercentage,
                        actualPercentage: element.actualPercentage,
                    })
                })
            )
        })
        // fetch(`http://localhost:9292/budgetplan/table/${user.id}`)
        fetch(`https://smart-spender-server.herokuapp.com/budgetplan/table/${user.id}`)
        .then(resp => resp.json())
        .then(data => setTableBudgetPlans(data))
    }, [user])

    if (!user)  {return <Redirect to ="/"/>}
    
    return (
        <WholeDiv>
            <TitleDiv>
                {tableBudgetPlans? <StyledH1>Available Monthly Budget: ${tableBudgetPlans.balance}</StyledH1> : null}
                {tableBudgetPlans && percentages? <EditButton user={user} percentages={percentages} setPercentages={setPercentages} budgetPlans={budgetPlans} tableBudgetPlans={tableBudgetPlans} setTableBudgetPlans={setTableBudgetPlans} setBudgetPlans={setBudgetPlans}/> : null}
            </TitleDiv>
            <ContentDiv>
                <OtherDiv>
                    {budgetPlans? <CategoryTable budgetPlans={budgetPlans}/> : null}
                </OtherDiv>
                <BarDiv>
                    {percentages? <BarChart percentages={percentages}/> : null}
                </BarDiv>
            </ContentDiv>
        </WholeDiv>
    )
}

const WholeDiv = styled.div`
    margin-left:30px;
    transition: all 5s ease-in-out;
`

const TitleDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
`

const ContentDiv = styled.div`
    display: flex;
`

const BarDiv = styled.div`
height: 479
px
;
    width: 54%;
    margin-left: 20
px
;
    border-radius: 10
px
;
    margin-top: 93
px
;
    box-shadow: 1px 1px 5px 3px rgb(132 133 132 / 40%);
    background-color: white;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`

const OtherDiv = styled.div`
    box-shadow: 1px 1px 5px 3px rgb(132 133 132 / 40%);
    background-color: white;
`

const StyledH1 = styled.h1`
    margin-left: 234px;
    box-shadow: 1px 1px 5px 3px rgb(132 133 132 / 40%);
    background-color: white;
    padding: 7px;
    border-radius: 10px;
    display:flex;
    justify-content: center;
    align-items: center;
`

export default BudgetMain
