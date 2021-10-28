import React from 'react'
import ActualTable from './ActualTable'

const CategoryTable = ({budgetPlans}) => {

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

export default CategoryTable
