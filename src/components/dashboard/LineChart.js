import React from 'react'
import { Line } from 'react-chartjs-2';

const LineChart = ({sixMonthData}) => {

    const dateObj = new Date()
    const monthName = dateObj.toLocaleString("default", { month: "short" })  
    const yearName = new Date().getFullYear();

    // const fiveMonthsAgo = new Date()
    const d = new Date()
    d.setMonth(d.getMonth() - 5)
    const pastFiveMonth = d.toLocaleString("default", { month: "short" }) 
    const pastYearToFiveMonth = d.getFullYear()

    const data = {
        labels: sixMonthData.map(element => {
            switch (element.month) {
                case 1:
                    return "Jan"
                case 2:
                    return "Feb"
                case 3:
                    return "Mar"
                case 4:
                    return "Apr"
                case 5:
                    return "May"
                case 6:
                    return "Jun"
                case 7:
                    return "Jul"
                case 8:
                    return "Aug"
                case 9:
                    return "Sep"
                case 10:
                    return "Oct"
                case 11:
                    return "Nov"
                case 12:
                    return "Dec"                    
                default:
                    return "Unknown"
        }}),
        datasets: [
        {
            label: 'Total Spendings ($)',
            data: sixMonthData.map(element => element.spending),
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
        ],
    };

    const options = {
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: `${pastFiveMonth}, ${pastYearToFiveMonth} - ${monthName}, ${yearName} `,
                font: {
                    size: 25
                }
            }
        },
        scales: {
        yAxes: {
            // beginAtZero: true,
            callback: function(value) {
                return `£${value}k`}
            // }
        }
    }}

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart
