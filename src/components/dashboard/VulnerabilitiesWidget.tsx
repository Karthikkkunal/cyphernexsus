import React from 'react';
import { Shield, XCircle } from 'lucide-react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Vulnerabilities data
const vulnerabilitiesData = {
  total: 42,
  critical: 3,
  high: 8,
  medium: 15,
  low: 16,
  fixed: 127,
  systems: [
    { name: 'Web Application', count: 12 },
    { name: 'Infrastructure', count: 18 },
    { name: 'Endpoints', count: 7 },
    { name: 'Cloud Services', count: 5 },
  ],
};

const VulnerabilitiesWidget: React.FC = () => {
  // Chart data
  const data = {
    labels: ['Critical', 'High', 'Medium', 'Low'],
    datasets: [
      {
        data: [
          vulnerabilitiesData.critical,
          vulnerabilitiesData.high,
          vulnerabilitiesData.medium,
          vulnerabilitiesData.low,
        ],
        backgroundColor: ['#EF4444', '#F97316', '#F59E0B', '#3B82F6'],
        borderWidth: 0,
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
    },
    cutout: '70%',
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between p-4 border-b border-slate-800">
        <h3 className="font-medium text-white">Vulnerabilities</h3>
        <button className="text-xs text-teal-400 hover:text-teal-300">
          Run Scan
        </button>
      </div>
      <div className="p-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="h-40 w-40 relative">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-white">{vulnerabilitiesData.total}</span>
              <span className="text-xs text-slate-400">total</span>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-slate-800 rounded-lg p-2 flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <span className="text-xs text-slate-300">Critical: {vulnerabilitiesData.critical}</span>
              </div>
              <div className="bg-slate-800 rounded-lg p-2 flex items-center">
                <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                <span className="text-xs text-slate-300">High: {vulnerabilitiesData.high}</span>
              </div>
              <div className="bg-slate-800 rounded-lg p-2 flex items-center">
                <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                <span className="text-xs text-slate-300">Medium: {vulnerabilitiesData.medium}</span>
              </div>
              <div className="bg-slate-800 rounded-lg p-2 flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-xs text-slate-300">Low: {vulnerabilitiesData.low}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-xs text-slate-300">{vulnerabilitiesData.fixed} vulnerabilities fixed</span>
              </div>
              <div className="flex items-center">
                <XCircle className="w-4 h-4 text-red-400 mr-2" />
                <span className="text-xs text-slate-300">3 past due</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-800">
          <h4 className="text-xs font-medium text-slate-400 mb-2">Vulnerable Systems</h4>
          {vulnerabilitiesData.systems.map((system) => (
            <div key={system.name} className="flex justify-between items-center mb-1">
              <span className="text-xs text-slate-300">{system.name}</span>
              <span className="text-xs text-slate-400">{system.count} issues</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VulnerabilitiesWidget;