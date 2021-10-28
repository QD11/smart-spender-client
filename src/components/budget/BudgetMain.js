import React, {useState, useEffect} from 'react'
import CategoryTable from './CategoryTable'
import PieChart from './PieChart'
import BarChart from './BarChart'
import EditButton from './EditButton'

const BudgetMain = ({user}) => {
    const [percentages, setPercentages] = useState([])
    
    return (
        <div>
            <h5>Available Monthly Budget: ${user.balance}</h5>
            <EditButton />
            <CategoryTable user={user} setPercentages={setPercentages}/>
            {/* {percentages? <PieChart percentages={percentages}/> : null} */}
            {percentages? <BarChart percentages={percentages}/> : null}
        </div>
    )
}

export default BudgetMain
