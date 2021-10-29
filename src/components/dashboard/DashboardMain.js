import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import LineChart from './LineChart'
import PieChart from './PieChart'
import Spending from './Spending'

const DashboardMain = ({user}) => {
    const [sixMonthData, setSixMonthData] = useState(null)
    const [recentSpendings, setRecentSpendings] = useState([])
    const [sumEachCategory, setSumEachCategory] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:9292/spending/sixmonths/${user.id}`)
        .then(resp => resp.json())
        .then((data)=> setSixMonthData(data))

        fetch(`http://localhost:9292/spending/recent/${user.id}`)
        .then(resp => resp.json())
        .then((data => setRecentSpendings(data)))

        fetch(`http://localhost:9292/spending/currentmonthcategories/${user.id}`)
        .then(resp => resp.json())
        .then((data => setSumEachCategory(data)))

    }, [user]);

    console.log(recentSpendings)
    console.log(sumEachCategory)

    //Redirects to user to login page on refresh
    if (!user)  {return <Redirect to ="/"/>}

    if (sixMonthData){
    return (
        <div>
            <LineChart sixMonthData={sixMonthData}/>
            <PieChart sumEachCategory={sumEachCategory}/>
            {recentSpendings.map(spending => <Spending key={spending.description} spending={spending}/>)}
        </div>
    )}
    else{
        return(
            null
        )
    }
}

export default DashboardMain
