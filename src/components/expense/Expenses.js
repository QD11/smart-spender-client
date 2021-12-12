import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom'
import NewExpense from './NewExpense'
import Spending from './Spending'
import styled from 'styled-components'
import FilterBox from './FilterBox'

const Expenses = ({user, categories, spendings, setSpendings}) => {    
    const [searchValue, setSearchValue] = useState("")
    const [priceArray, setPriceArray] = useState({
        min: null,
        max: null
    })
    const [categoriesFilter, setCategoriesFilter] = useState(
        {
            Housing: false,
            Transportation: false,
            Food: false,
            Utility: false,
            Insurance: false,
            Emergency: false,
            Discretionary: false,
            Other: false
        }
    )    


    useEffect(()=> {
        // fetch(`http://localhost:9292/spending/${user.id}`)
        fetch(`https://smart-spender-server.herokuapp.com/spending/${user.id}`)
        .then(resp => resp.json())
        .then((data)=> setSpendings(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    //Redirects to user to login page on refresh
    if (!user)  {return <Redirect to ="/"/>}    

    function handleUpdateSpending(updatedSpending) {
        const updatedSpendings = spendings.map((spending)=> {
            if (spending.id === updatedSpending.id) {
                return updatedSpending;                
            } else {
                return spending;
            }});
            setSpendings(updatedSpendings)
        };

    const deleteSpending = (id) => {
        const updatedSpendings = spendings.filter((spending) => spending.id !== id);
        setSpendings(updatedSpendings)
    }

    const spendingsSearch = spendings.filter(spending => spending.description.toLowerCase().includes(searchValue.toLowerCase()))
    const spendingsAmount = (Object.keys(priceArray).every((k) => !priceArray[k]))  ? [...spendingsSearch] : 
        (priceArray.min > 0 && !priceArray.max) ? spendingsSearch.filter(spending => spending.amount >= priceArray.min) : 
        (priceArray.max > 0 && !priceArray.min) ? spendingsSearch.filter(spending => spending.amount <= priceArray.max) : 
        spendingsSearch.filter(spending => spending.amount >= priceArray.min && spending.amount <= priceArray.max)
    
    const spendingsCategory = (Object.keys(categoriesFilter).every((k) => !categoriesFilter[k]))? [...spendingsAmount] : spendingsAmount.filter(spending => categoriesFilter[spending.category])

    return(
        <WholeDiv>
            <ExpensesDiv>
                <NewExpenseDiv>
                    <NewExpense user={user} categories={categories} setSpendings = {setSpendings} />
                </NewExpenseDiv>
                <Spendingscontainer>
                    {spendingsCategory.map(spending => <Spending key={spending.id} setSpendings={setSpendings} spending={spending} deleteSpending={deleteSpending} categories={categories} handleUpdateSpending={handleUpdateSpending}/>)}
                </Spendingscontainer>
            </ExpensesDiv>
            <FilterBox setPriceArray={setPriceArray} setSearchValue={setSearchValue} setCategoriesFilter={setCategoriesFilter} categories={categories}/>
        </WholeDiv>   
    )
}

const ExpensesDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const WholeDiv = styled.div`
    margin-left: 15px;
    display: flex;
`

const NewExpenseDiv = styled.div`
    background-color: white;
    box-shadow: 1px 1px 5px 3px rgb(132 133 132 / 40%);
    border-radius: 10px;
    margin-top: 20px;
`

const Spendingscontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    // box-shadow: 1px 1px 5px 3px rgb(132 133 132 / 40%);
    // background-color: white;
`

export default Expenses;