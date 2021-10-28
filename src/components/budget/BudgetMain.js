import React, {useState, useEffect} from 'react'
import CategoryTable from './CategoryTable'
import BarChart from './BarChart'
import EditButton from './EditButton'
import {Redirect} from 'react-router-dom'

const BudgetMain = ({user}) => {
    const [percentages, setPercentages] = useState(null)
    const [budgetPlans, setBudgetPlans] = useState(null)
    const [tableBudgetPlans, setTableBudgetPlans] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:9292/budgetplan/${user.id}`)
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
        fetch(`http://localhost:9292/budgetplan/table/${user.id}`)
        .then(resp => resp.json())
        .then(data => setTableBudgetPlans(data))
    }, [user])

    if (!user)  {return <Redirect to ="/"/>}
    
    return (
        <div>
            {tableBudgetPlans? <h5>Available Monthly Budget: ${tableBudgetPlans.balance}</h5> : null}
            {tableBudgetPlans && percentages? <EditButton percentages={percentages} setPercentages={setPercentages} budgetPlans={budgetPlans} tableBudgetPlans={tableBudgetPlans} setTableBudgetPlans={setTableBudgetPlans} setBudgetPlans={setBudgetPlans}/> : null}
            {budgetPlans? <CategoryTable budgetPlans={budgetPlans}/> : null}
            {/* {percentages? <PieChart percentages={percentages}/> : null} */}
            {percentages? <BarChart percentages={percentages}/> : null}
        </div>
    )
}

export default BudgetMain
