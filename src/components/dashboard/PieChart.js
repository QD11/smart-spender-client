import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const PieChart = ({sumEachCategory}) => {

    const dateObj = new Date()
    const monthName = dateObj.toLocaleString("default", { month: "long" })  
    const yearName = new Date().getFullYear();

    const data = {
        labels: ['Housing', 'Transportation', 'Food', 'Utility', 'Insurance', 'Emergency', 'Discretionary','Other'],
        datasets: [
        {
            label: '$',
            data: sumEachCategory,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(121, 85, 72, 0.2)',
                'rgba(158, 158, 158, 0.2',
            ],
            borderColor: 
                [ 'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(121, 85, 72, 1)',
                'rgba(158, 158, 158, 1',
            ],
        },
        ],
    };

    const options = {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `${monthName} ${yearName} - Spending`,
                font: {
                    size: 25
                }
            }
        }
        }

    return (
        < >
            <Doughnut data={data}  options={options} />
        </>
    );
}

export default PieChart
