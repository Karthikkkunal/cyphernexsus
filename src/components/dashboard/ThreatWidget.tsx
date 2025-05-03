import React from 'react';
import { AlertTriangle, GlobeIcon, MonitorIcon, ServerIcon, HardDriveIcon } from 'lucide-react';

const ThreatWidget: React.FC = () => {
  return (
    <div className="card">
      <div className="flex items-center justify-between p-4 border-b border-slate-800">
        <h3 className="font-medium text-white">Active Threats</h3>
        <select className="bg-slate-800 text-xs text-slate-300 rounded-md border border-slate-700 px-2 py-1">
          <option>Last 24 hours</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
        </select>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          <div className="p-3 bg-slate-800 rounded-lg border border-amber-900/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-amber-900/20 flex items-center justify-center mr-3 flex-shrink-0">
                <GlobeIcon className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <span className="text-sm font-medium text-white">Suspicious API Calls</span>
                  <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-amber-900/30 text-amber-400">Medium</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">Multiple unauthorized API requests from IP range 103.28.54.X attempting to access user data.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <AlertTriangle className="w-3 h-3 text-amber-400 mr-1" />
                    <span className="text-xs text-slate-500">12 minutes ago</span>
                  </div>
                  <button className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 text-white rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-800 rounded-lg border border-red-900/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-red-900/20 flex items-center justify-center mr-3 flex-shrink-0">
                <ServerIcon className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <span className="text-sm font-medium text-white">Ransomware Activity</span>
                  <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-red-900/30 text-red-400">Critical</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">Detected potential GammaBit ransomware signature on Finance-Server-03. Containment measures active.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <AlertTriangle className="w-3 h-3 text-red-400 mr-1" />
                    <span className="text-xs text-slate-500">43 minutes ago</span>
                  </div>
                  <button className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 text-white rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-800 rounded-lg border border-blue-900/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-blue-900/20 flex items-center justify-center mr-3 flex-shrink-0">
                <MonitorIcon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <span className="text-sm font-medium text-white">Authentication Anomaly</span>
                  <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-blue-900/30 text-blue-400">Low</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">Multiple failed login attempts for admin user from unusual geolocation (Moscow, Russia).</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <AlertTriangle className="w-3 h-3 text-blue-400 mr-1" />
                    <span className="text-xs text-slate-500">1 hour ago</span>
                  </div>
                  <button className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 text-white rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-800 rounded-lg border border-amber-900/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-amber-900/20 flex items-center justify-center mr-3 flex-shrink-0">
                <HardDriveIcon className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <span className="text-sm font-medium text-white">Unusual Data Transfer</span>
                  <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-amber-900/30 text-amber-400">Medium</span>
                </div>
                <p className="text-xs text-slate-400 mb-2">Large data transfer (3.2GB) from HR database server to external IP address detected and blocked.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <AlertTriangle className="w-3 h-3 text-amber-400 mr-1" />
                    <span className="text-xs text-slate-500">2 hours ago</span>
                  </div>
                  <button className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 text-white rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreatWidget;