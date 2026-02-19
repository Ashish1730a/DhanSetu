import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                color: '#1f2937',
                font: {
                    weight: '600'
                }
            }
        },
        title: {
            display: true,
            text: 'Holdings',
            color: '#065f46', // Deep emerald
            font: {
                size: 18,
                weight: 'bold'
            }
        },
    },
    scales: {
        x: {
            grid: {
                display: false   // ❌ vertical lines band
            }
        },
        y: {
            grid: {
                color: 'rgba(0,0,0,0.08)'  // light horizontal lines rehne do (premium look)
            }
        }
    }
};



export function VerticalGraph({ data }) {
    return <Bar options={options} data={data} />;
}