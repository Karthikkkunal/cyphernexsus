import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ShieldCheck, AlertTriangle, BarChart } from 'lucide-react';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const SecurityScoreWidget: React.FC = () => {
  // Chart data
  const data = {
    datasets: [
      {
        data: [78, 22],
        backgroundColor: ['#2A9D8F', '#334155'],
        borderWidth: 0,
        cutout: '80%',
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between p-4 border-b border-slate-800">
        <h3 className="font-medium text-white">Security Score</h3>
        <button className="text-xs text-teal-400 hover:text-teal-300">
          View Report
        </button>
      </div>
      <div className="p-6 flex flex-col items-center">
        <div className="relative h-40 w-40 mb-6">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">78</span>
            <span className="text-xs text-slate-400">out of 100</span>
          </div>
        </div>

        <div className="w-full space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-teal-900/20 flex items-center justify-center mr-3">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-white">Strengths</p>
                <p className="text-xs text-slate-400">Strong in 6 areas</p>
              </div>
            </div>
            <button className="text-xs text-slate-400 hover:text-white">Details</button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-amber-900/20 flex items-center justify-center mr-3">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <p className="text-sm text-white">Weaknesses</p>
                <p className="text-xs text-slate-400">Issues in 3 areas</p>
              </div>
            </div>
            <button className="text-xs text-slate-400 hover:text-white">Details</button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-900/20 flex items-center justify-center mr-3">
                <BarChart className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-white">Trends</p>
                <p className="text-xs text-slate-400">+12 points this month</p>
              </div>
            </div>
            <button className="text-xs text-slate-400 hover:text-white">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityScoreWidget;