import React, {useState, useEffect} from 'react'
import CategoryTable from './CategoryTable'
import PieChart from './PieChart'
import BarChart from './BarChart'
import EditButton from './EditButton'

const BudgetMain = ({user}) => {
    const [percentages, setPercentages] = useState([])
    const [budgetPlans, setBudgetPlans] = useState([])

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
    }, [])
    
    return (
        <div>
            <h5>Available Monthly Budget: ${user.balance}</h5>
            {percentages? <EditButton /> : null}
            {budgetPlans? <CategoryTable user={user} budgetPlans={budgetPlans}/> : null}
            {/* {percentages? <PieChart percentages={percentages}/> : null} */}
            {percentages? <BarChart percentages={percentages}/> : null}
        </div>
    )
}

export default BudgetMain
