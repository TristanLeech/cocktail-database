import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CompareGraph = () => {
    const data = {
        labels: ['Margharita', 'Tequila Sunrise', 'Manhattan', 'Long Island', 'Whiskey'],
        datasets: [
            {
                label: 'Drink Volume (ml)',
                data: [120, 300, 100, 400, 60], 
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Bar Graph of Drink Volumes',
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default CompareGraph;