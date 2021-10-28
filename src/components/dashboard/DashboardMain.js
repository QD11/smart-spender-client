import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import LineChart from './LineChart'
import PieChart from './PieChart'
import Spending from './Spending'

const DashboardMain = ({user}) => {
    const [sixMonthData, setSixMonthData] = useState(null)
    const [recentSpendings, setRecentSpendings] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:9292/spending/sixmonths/${user.id}`)
        .then(resp => resp.json())
        .then((data)=> setSixMonthData(data))

        fetch(`http://localhost:9292/spending/recent/${user.id}`)
        .then(resp => resp.json())
        .then((data => setRecentSpendings(data)))
    }, [user]);

    console.log(recentSpendings)

    //Redirects to user to login page on refresh
    if (!user)  {return <Redirect to ="/"/>}

    if (sixMonthData){
    return (
        <div>
            <LineChart sixMonthData={sixMonthData}/>
            <PieChart sixMonthData={sixMonthData}/>
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
