import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const DrinkStacked = ({ ingredients }) => {
    ingredients = [
        { name: 'Brandy', data: [30, 30, 50] },
        { name: 'Ice', data: [50, 50, 50] },
        { name: 'Grenadine', data: [20, 20, 50] }
    ];

    const labels = ['Step 1', 'Step 2'];
    const colors = [
        { background: 'rgba(255, 159, 64, 0.5)', border: 'rgba(255, 159, 64, 0.5)' },
        { background: 'rgba(201, 245, 245, 0.74)', border: 'rgba(201, 245, 245, 0.74)' },
        { background: 'rgba(242, 255, 102, 0.5)', border: 'rgba(242, 255, 102, 0.5)' },
        { background: 'rgba(196, 196, 196, 0.5)', border: 'rgba(196, 196, 196, 0.5)' },
        { background: 'rgba(255, 99, 132, 0.5)', border: 'rgba(255, 99, 132, 0.5)' }
    ];

    const datasets = ingredients.map((ingredient, index) => ({
        label: ingredient.name,
        data: ingredient.data,
        backgroundColor: colors[index % colors.length].background,
        borderColor: colors[index % colors.length].border,
        fill: true,
    }));

    const data = {
        labels,
        datasets,
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Drink Breakdown',
            },
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    return <Line options={options} data={data} />;
};

export default DrinkStacked;