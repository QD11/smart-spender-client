import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import LineChart from './LineChart'
import PieChart from './PieChart'
import Spending from './Spending'
import styled from 'styled-components'

const DashboardMain = ({user, spendings}) => {
    const [sixMonthData, setSixMonthData] = useState(null)
    const [recentSpendings, setRecentSpendings] = useState([])
    const [sumEachCategory, setSumEachCategory] = useState([])

    useEffect(()=> {
        // fetch(`http://localhost:9292/spending/sixmonths/${user.id}`)
        fetch(`/spending/sixmonths/${user.id}`)
        .then(resp => resp.json())
        .then((data)=> setSixMonthData(data))

        // fetch(`http://localhost:9292/spending/recent/${user.id}`)
        fetch(`/spending/recent/${user.id}`)
        .then(resp => resp.json())
        .then((data => setRecentSpendings(data)))

        // fetch(`http://localhost:9292/spending/currentmonthcategories/${user.id}`)
        fetch(`/spending/currentsixmonthcategories/${user.id}`)
        .then(resp => resp.json())
        .then((data => setSumEachCategory(data)))

    }, [user, spendings]);

    //Redirects to user to login page on refresh
    if (!user)  {return <Redirect to ="/"/>}

    if (sixMonthData){
    return (
        <BigDiv>
            <div>
                <LineDiv>
                    <LineChart sixMonthData={sixMonthData}/>
                </LineDiv>
                <StyledTitle>Most Recent Purchases </StyledTitle>
                <SpendingDiv>
                    {recentSpendings.map(spending => <Spending key={spending.id} spending={spending}/>)}
                </SpendingDiv>
            </div>
            <PieDiv>
                <PieChart sumEachCategory={sumEachCategory}/>
            </PieDiv>
        </BigDiv>
    )}
    else{
        return(
            null
        )
    }
}

const LineDiv = styled.div`
    box-shadow: 1px 1px 5px 3px rgb(132 133 132 / 40%);
    background-color: white;
    border-radius: 10px;
    padding: 50px;
`

const StyledTitle = styled.h1`
    margin-top: 40px;
    text-align: center;
    box-shadow: 1px 1px 5px 3px rgb(132 133 132 / 40%);
    background-color: white;
    border-radius: 10px;
    width: 68%;
    margin-left:100px;

`

const BigDiv = styled.div`
    display: flex;
    margin-left: 150px;
    margin-top: 20px;
    

`

const PieDiv = styled.div`
    margin-left: 5em;
    width: 600px;
    margin-top: 40px;
    box-shadow: 1px 1px 5px 3px rgb(132 133 132 / 40%);
    background-color: white;
    border-radius: 10px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 625px;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}
`

const SpendingDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default DashboardMain
