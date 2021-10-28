import React, {useEffect, useState} from 'react'
import ActualTable from './ActualTable'

const CategoryTable = ({budgetPlans}) => {
    const [data, setData] = useState(null)

    useEffect(() =>{
    const data2 = [...budgetPlans].map(element => {
        return({
            category: element.category,
            plannedPercentage: (element.plannedPercentage).toFixed(2)+'%',
            plannedMoney: '$'+(element.plannedMoney).toFixed(2),
            actualDollar: '$'+(element.actualDollar).toFixed(2),
            actualPercentage: (element.actualPercentage).toFixed(2)+'%',
        })
    })
    setData(data2)
    }, [budgetPlans])
    
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
            {data? <ActualTable data={data} columns={columns}/>: null}
        </div>
    )

}

export default CategoryTable
