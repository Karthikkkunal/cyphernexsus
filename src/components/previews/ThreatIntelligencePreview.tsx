import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, BarChart3, Globe, Zap, FileText, Server } from 'lucide-react';

// Mock threat intelligence data
const threatData = [
  {
    id: 1,
    timestamp: '2025-06-12T08:23:45Z',
    type: 'Ransomware',
    severity: 'High',
    source: 'Dark Web',
    status: 'Blocked',
    details: 'Attempted encryption of financial data by GammaBit ransomware variant',
    affectedSystems: ['Finance Server', 'Accounting DB'],
    icon: <FileText />
  },
  {
    id: 2,
    timestamp: '2025-06-12T10:15:22Z',
    type: 'Phishing',
    severity: 'Medium',
    source: 'Email Gateway',
    status: 'Detected',
    details: 'Targeted spear phishing campaign impersonating CEO',
    affectedSystems: ['Email System'],
    icon: <Globe />
  },
  {
    id: 3,
    timestamp: '2025-06-12T11:45:12Z',
    type: 'Zero-Day',
    severity: 'Critical',
    source: 'Threat Intelligence',
    status: 'Patched',
    details: 'New vulnerability in Apache Log4j affecting web applications',
    affectedSystems: ['Web Server', 'API Gateway', 'CRM System'],
    icon: <Zap />
  },
  {
    id: 4,
    timestamp: '2025-06-12T12:30:56Z',
    type: 'Brute Force',
    severity: 'Low',
    source: 'Authentication System',
    status: 'Blocked',
    details: 'Multiple failed login attempts from suspicious IP range',
    affectedSystems: ['Admin Portal'],
    icon: <Server />
  }
];

const severityColors = {
  Low: 'bg-blue-100 text-blue-800',
  Medium: 'bg-yellow-100 text-yellow-800',
  High: 'bg-orange-100 text-orange-800',
  Critical: 'bg-red-100 text-red-800'
};

const statusColors = {
  Detected: 'bg-purple-100 text-purple-800',
  Investigating: 'bg-amber-100 text-amber-800',
  Blocked: 'bg-green-100 text-green-800',
  Patched: 'bg-teal-100 text-teal-800'
};

const ThreatIntelligencePreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('threats');
  const [data, setData] = useState(threatData);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Simulate new threat detection
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % threatData.length;
      setCurrentIndex(newIndex);
      
      // Highlight a threat by bringing it to the top
      const newData = [...threatData];
      const item = newData.splice(newIndex, 1)[0];
      newData.unshift({...item, id: Date.now()});
      setData(newData);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="section bg-slate-950">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="heading-lg mb-4">Real-Time <span className="gradient-text">Threat Intelligence</span></h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Our platform continuously aggregates and analyzes threat data from multiple sources,
            providing actionable intelligence to protect your organization.
          </p>
        </motion.div>

        <motion.div 
          className="card border-slate-700 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Dashboard Header */}
          <div className="bg-slate-800 border-b border-slate-700 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield className="text-teal-500 w-5 h-5 mr-2" />
                <h3 className="font-medium text-white">Threat Intelligence Dashboard</h3>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-xs px-2 py-1 rounded-full bg-teal-900/30 text-teal-400">
                  Live Demo
                </div>
                <div className="flex space-x-1 items-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs text-slate-400">Connected</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Tabs */}
          <div className="bg-slate-900 border-b border-slate-700 px-4">
            <div className="flex overflow-x-auto hide-scrollbar">
              <button 
                onClick={() => setActiveTab('threats')}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                  activeTab === 'threats' 
                  ? 'text-teal-400 border-b-2 border-teal-400' 
                  : 'text-slate-400 hover:text-white'
                }`}
              >
                Active Threats
              </button>
              <button 
                onClick={() => setActiveTab('analytics')}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                  activeTab === 'analytics' 
                  ? 'text-teal-400 border-b-2 border-teal-400' 
                  : 'text-slate-400 hover:text-white'
                }`}
              >
                Threat Analytics
              </button>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-4 bg-slate-900">
            {activeTab === 'threats' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-slate-400 border-b border-slate-800">
                      <th className="pb-2 pl-2 pr-4">Severity</th>
                      <th className="p-2">Type</th>
                      <th className="p-2">Details</th>
                      <th className="p-2">Source</th>
                      <th className="p-2">Status</th>
                      <th className="p-2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((threat, index) => (
                      <motion.tr 
                        key={threat.id}
                        className={`border-b border-slate-800 ${index === 0 ? 'bg-slate-800/40' : ''}`}
                        initial={index === 0 ? { backgroundColor: 'rgba(15, 23, 42, 0.6)' } : {}}
                        animate={index === 0 ? { 
                          backgroundColor: ['rgba(15, 23, 42, 0.6)', 'rgba(42, 157, 143, 0.1)', 'rgba(15, 23, 42, 0.6)'] 
                        } : {}}
                        transition={{ duration: 2, times: [0, 0.5, 1] }}
                      >
                        <td className="py-3 pl-2 pr-4">
                          <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${severityColors[threat.severity as keyof typeof severityColors]}`}>
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            {threat.severity}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="flex items-center">
                            <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center mr-2">
                              {threat.icon}
                            </div>
                            <span className="text-sm text-white">{threat.type}</span>
                          </div>
                        </td>
                        <td className="p-2 text-sm text-slate-300">{threat.details}</td>
                        <td className="p-2 text-sm text-slate-400">{threat.source}</td>
                        <td className="p-2">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[threat.status as keyof typeof statusColors]}`}>
                            {threat.status}
                          </span>
                        </td>
                        <td className="p-2 text-sm text-slate-400">
                          {new Date(threat.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400">Threat analytics demo available in the full platform.</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreatIntelligencePreview;