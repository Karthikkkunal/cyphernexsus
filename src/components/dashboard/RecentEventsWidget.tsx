import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Clock, Server, User, Globe, HardDrive, Lock } from 'lucide-react';

// Mock events data
const events = [
  {
    id: 1,
    type: 'threat-detected',
    description: 'Suspicious login attempt blocked',
    timestamp: '09:23 AM',
    source: 'Authentication System',
    status: 'Blocked',
    icon: <Lock className="w-4 h-4" />,
    severity: 'medium',
  },
  {
    id: 2,
    type: 'vulnerability-patched',
    description: 'Critical Apache Log4j vulnerability patched on web servers',
    timestamp: '08:47 AM',
    source: 'VAPT System',
    status: 'Resolved',
    icon: <Shield className="w-4 h-4" />,
    severity: 'high',
  },
  {
    id: 3,
    type: 'compliance-update',
    description: 'SOC 2 compliance report updated for Q2',
    timestamp: '08:15 AM',
    source: 'Compliance Engine',
    status: 'Updated',
    icon: <CheckCircle className="w-4 h-4" />,
    severity: 'low',
  },
  {
    id: 4,
    type: 'scan-completed',
    description: 'Full network vulnerability scan completed',
    timestamp: '07:30 AM',
    source: 'VAPT System',
    status: 'Completed',
    icon: <Globe className="w-4 h-4" />,
    severity: 'low',
  },
  {
    id: 5,
    type: 'threat-detected',
    description: 'Potential data exfiltration attempt detected and blocked',
    timestamp: 'Yesterday',
    source: 'Network Monitor',
    status: 'Blocked',
    icon: <HardDrive className="w-4 h-4" />,
    severity: 'critical',
  },
  {
    id: 6,
    type: 'policy-update',
    description: 'Cloud access policies automatically updated based on AI recommendations',
    timestamp: 'Yesterday',
    source: 'AI Assistant',
    status: 'Updated',
    icon: <Server className="w-4 h-4" />,
    severity: 'low',
  },
];

const severityColors = {
  critical: 'text-red-400',
  high: 'text-orange-400',
  medium: 'text-amber-400',
  low: 'text-blue-400',
};

const statusBadges = {
  'Blocked': 'bg-green-900/20 text-green-400',
  'Detected': 'bg-amber-900/20 text-amber-400',
  'Resolved': 'bg-blue-900/20 text-blue-400',
  'Updated': 'bg-purple-900/20 text-purple-400',
  'Completed': 'bg-teal-900/20 text-teal-400',
};

const RecentEventsWidget: React.FC = () => {
  return (
    <div className="card">
      <div className="flex items-center justify-between p-4 border-b border-slate-800">
        <h3 className="font-medium text-white">Recent Events</h3>
        <button className="text-xs text-teal-400 hover:text-teal-300">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-slate-900/80">
              <th className="py-3 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Event</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Source</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Status</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {events.map((event) => (
              <tr key={event.id} className="hover:bg-slate-800/50">
                <td className="py-4 px-4">
                  <div className="flex items-start">
                    <div className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-3 ${severityColors[event.severity as keyof typeof severityColors]}`}>
                      {event.icon}
                    </div>
                    <div>
                      <p className="text-sm text-white">{event.description}</p>
                      <p className={`text-xs mt-1 ${severityColors[event.severity as keyof typeof severityColors]}`}>
                        {event.severity.charAt(0).toUpperCase() + event.severity.slice(1)} severity
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-slate-400">{event.source}</td>
                <td className="py-4 px-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusBadges[event.status as keyof typeof statusBadges]}`}>
                    {event.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-slate-400">{event.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentEventsWidget;