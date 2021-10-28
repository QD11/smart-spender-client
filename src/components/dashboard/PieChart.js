import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { chartColors } from "./colors";

const PieChart = ({}) => {

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'hiu','aa'],
        datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 8, 10],
            backgroundColor: ["#0b84a5", "#f6c85f","#6f4e7c","#9dd866","#ca472f","#ffa056","#8dddd0","#9e9e9e"],
            borderColor: ["#0b84a5", "#f6c85f","#6f4e7c","#9dd866","#ca472f","#ffa056","#8dddd0","#9e9e9e"],
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
