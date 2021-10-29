import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { chartColors } from "./colors";

const PieChart = ({sumEachCategory}) => {

    const data = {
        labels: ['Housing', 'Transportation', 'Food', 'Utility', 'Insurance', 'Emergency', 'Discritionary','Other'],
        datasets: [
        {
            label: '# of Votes',
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
            borderWidth: 1,
        },
        ],
    };

    return (
        <div >
            <Doughnut data={data} />
        </div>
    );
}

export default PieChart
