import React, {useState, useEffect} from 'react'
import ActualTable from './ActualTable'

const CategoryTable = ({user, setPercentages}) => {

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

    if (budgetPlans) {

        const data = [...budgetPlans].map(element => {
            return({
                category: element.category,
                plannedPercentage: (element.plannedPercentage).toFixed(2)+'%',
                plannedMoney: '$'+(element.plannedMoney).toFixed(2),
                actualDollar: '$'+(element.actualDollar).toFixed(2),
                actualPercentage: (element.actualPercentage).toFixed(2)+'%',
            })
        })
        
        const columns = [
            {
                Header: 'Category',
                accessor: 'category'
            },
            {
                Header: 'Planned %',
                accessor: 'plannedPercentage'
            },
            {
                Header: 'Planned $',
                accessor: 'plannedMoney'
            },
            {
                Header: 'Actual %',
                accessor: 'actualPercentage'
            },
            {
                Header: 'Actual $',
                accessor: 'actualDollar'
            },
        ]

        return (
            <div>
                <ActualTable data={data} columns={columns}/>
            </div>
        )
    }
    else {
        return(
            <>

            </>
        )
    }
}

export default CategoryTable
