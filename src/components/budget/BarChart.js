import React from 'react'
import { Bar } from 'react-chartjs-2'


const BarChart = ({percentages}) => {

    const data = {
        labels: percentages.map(element => element.category),
        datasets: [
            {
                label: '% of Planned Spendings',
                data: percentages.map(element => element.plannedPercentage),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                stack: 'Stack 0',
                borderWidth: 1,
            },
            {
                label: '% of Actual Spendings',
                data: percentages.map(element => element.actualPercentage),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                stack: 'Stack 1',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        masintainAspectRatio: true,
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
        bar: {
            borderWidth: 2,
        },
        },
        responsive: true,
        plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Planned Percentage vs Actual Percentage',
        },
        },
    };

    return (
        <div>
            <Bar data={data} height={410}
                width={826} options={options} />
        </div>
    )
}

export default BarChart
