import React from 'react';
import { FileLock2, CheckCircle, AlertCircle, Clock } from 'lucide-react';

// Compliance frameworks data
const frameworks = [
  {
    id: 'soc2',
    name: 'SOC 2',
    progress: 92,
    status: 'compliant',
    lastAssessed: '2 days ago',
    issues: 2,
  },
  {
    id: 'gdpr',
    name: 'GDPR',
    progress: 87,
    status: 'compliant',
    lastAssessed: '1 week ago',
    issues: 4,
  },
  {
    id: 'iso27001',
    name: 'ISO 27001',
    progress: 76,
    status: 'in-progress',
    lastAssessed: '3 days ago',
    issues: 7,
  },
  {
    id: 'hipaa',
    name: 'HIPAA',
    progress: 65,
    status: 'at-risk',
    lastAssessed: '5 days ago',
    issues: 12,
  },
];

const statusColors = {
  'compliant': 'bg-green-900/20 text-green-400',
  'in-progress': 'bg-amber-900/20 text-amber-400',
  'at-risk': 'bg-red-900/20 text-red-400',
};

const statusIcons = {
  'compliant': <CheckCircle className="w-3 h-3" />,
  'in-progress': <Clock className="w-3 h-3" />,
  'at-risk': <AlertCircle className="w-3 h-3" />,
};

const ComplianceWidget: React.FC = () => {
  return (
    <div className="card">
      <div className="flex items-center justify-between p-4 border-b border-slate-800">
        <h3 className="font-medium text-white">Compliance Status</h3>
        <button className="text-xs text-teal-400 hover:text-teal-300">
          View All
        </button>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {frameworks.map((framework) => (
            <div key={framework.id} className="p-3 bg-slate-800 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mr-3">
                    <FileLock2 className="w-4 h-4 text-teal-400" />
                  </div>
                  <span className="text-sm font-medium text-white">{framework.name}</span>
                </div>
                <span className={`inline-flex items-center px-2 py-0.5 text-xs rounded-full ${statusColors[framework.status as keyof typeof statusColors]}`}>
                  {statusIcons[framework.status as keyof typeof statusIcons]}
                  <span className="ml-1 capitalize">{framework.status}</span>
                </span>
              </div>
              <div className="ml-11">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-slate-400">{framework.progress}% complete</span>
                  <span className="text-xs text-slate-500">Last assessed: {framework.lastAssessed}</span>
                </div>
                <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      framework.progress > 90 
                        ? 'bg-green-500' 
                        : framework.progress > 75 
                          ? 'bg-amber-500' 
                          : 'bg-red-500'
                    }`} 
                    style={{ width: `${framework.progress}%` }}
                  ></div>
                </div>
                {framework.issues > 0 && (
                  <div className="mt-2 text-xs text-slate-400">
                    <span className="text-red-400">{framework.issues} issues</span> need attention
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplianceWidget;