import React from 'react'
import { Pie, Doughnut } from 'react-chartjs-2'
import { chartColors } from "./colors";

const PieChart = ({percentages}) => {

    console.log(percentages)

    let chartInstance = null;

    const plannedData = {
        maintainAspectRatio: true,
        responsive: true,
        labels: percentages.map(element => element.category),
        datasets: [
        {
            data: percentages.map(element => element.plannedPercentage),
            backgroundColor: chartColors,
            hoverBackgroundColor: chartColors
        }
        ]
    };

    const pieOptions = {
        plugins:{
        legend: {
        display: false,
        position: "right",
        legendCallback: function(chart) {
            // Return the HTML string here.
            console.log(chart);
            return [
                <ul>
                <li>z</li>
                <li>zzzz</li>
                <li>ppp</li>
                <li>adasda</li>
                </ul>
            ];
        }
        }},
        elements: {
        arc: {
            borderWidth: 0
        }
        }
    };
    
    const actual_data = {
        maintainAspectRatio: true,
        responsive: true,
        labels: percentages.map(element => element.category),
        datasets: [
        {
            data: percentages.map(element => element.actualPercentage),
            backgroundColor: chartColors,
            hoverBackgroundColor: chartColors
        }
        ]
    };

    const actual_options = {
        legend: {
            display: false,
            position: "right"
        },
        elements: {
            arc: {
            borderWidth: 0
        }
        }
    };

    return (
        <div className="App">
            <div style={styles.relative}>
                <Doughnut data={actual_data} options={actual_options} />
                <div style={styles.pieContainer}>
                    <Pie
                        data={plannedData}
                        options={pieOptions}
                        ref={input => {
                        chartInstance = input;
                    }}
                />
            </div>
            <div id="legend" />
            </div>
        </div>
    );
}

const styles = {
    pieContainer: {
    width: "40%",
    height: "40%",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -36%)"
    },
    relative: {
    position: "relative"
    }
};

export default PieChart
