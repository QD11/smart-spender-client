import React, {useState, useEffect} from 'react'
import CategoryTable from './CategoryTable'

const BudgetMain = ({user}) => {
    // const [categories, setCategories] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:9292/category')
    //     .then(resp => resp.json())
    //     .then(data => setCategories(data))
    // }, [])

    return (
        <div>
            <h5>Available Monthly Budget: ${user.balance}</h5>
            <CategoryTable user={user} />
        </div>
    )
}

export default BudgetMain
