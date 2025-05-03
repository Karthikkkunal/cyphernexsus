import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Bell, User, Settings, BarChart3, Server, AlertTriangle, CheckCircle, Eye, FileLock2, Zap, Activity, PieChart, Clock, MessageSquare, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Components
import ComplianceWidget from '../components/dashboard/ComplianceWidget';
import ThreatWidget from '../components/dashboard/ThreatWidget';
import SecurityScoreWidget from '../components/dashboard/SecurityScoreWidget';
import AIAssistantWidget from '../components/dashboard/AIAssistantWidget';
import VulnerabilitiesWidget from '../components/dashboard/VulnerabilitiesWidget';
import RecentEventsWidget from '../components/dashboard/RecentEventsWidget';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      {/* Dashboard Header */}
      <div className="bg-slate-900 border-b border-slate-800 py-4">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="text-slate-400 hover:text-white mr-4">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-xl md:text-2xl font-bold text-white">Security Dashboard</h1>
              <span className="ml-3 text-xs px-2 py-1 rounded-full bg-teal-900/30 text-teal-400">Demo</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800">
                <Settings className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Navigation */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="container-custom">
          <div className="flex overflow-x-auto hide-scrollbar">
            <button 
              onClick={() => setActiveTab('overview')} 
              className={`px-4 py-3 text-sm font-medium flex items-center whitespace-nowrap ${activeTab === 'overview' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-slate-400 hover:text-white'}`}
            >
              <BarChart3 className="w-4 h-4 mr-2" /> Overview
            </button>
            <button 
              onClick={() => setActiveTab('threats')} 
              className={`px-4 py-3 text-sm font-medium flex items-center whitespace-nowrap ${activeTab === 'threats' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-slate-400 hover:text-white'}`}
            >
              <AlertTriangle className="w-4 h-4 mr-2" /> Threats
            </button>
            <button 
              onClick={() => setActiveTab('compliance')} 
              className={`px-4 py-3 text-sm font-medium flex items-center whitespace-nowrap ${activeTab === 'compliance' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-slate-400 hover:text-white'}`}
            >
              <CheckCircle className="w-4 h-4 mr-2" /> Compliance
            </button>
            <button 
              onClick={() => setActiveTab('vapt')} 
              className={`px-4 py-3 text-sm font-medium flex items-center whitespace-nowrap ${activeTab === 'vapt' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-slate-400 hover:text-white'}`}
            >
              <Eye className="w-4 h-4 mr-2" /> VAPT
            </button>
            <button 
              onClick={() => setActiveTab('assets')} 
              className={`px-4 py-3 text-sm font-medium flex items-center whitespace-nowrap ${activeTab === 'assets' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-slate-400 hover:text-white'}`}
            >
              <Server className="w-4 h-4 mr-2" /> Assets
            </button>
            <button 
              onClick={() => setActiveTab('reports')} 
              className={`px-4 py-3 text-sm font-medium flex items-center whitespace-nowrap ${activeTab === 'reports' ? 'text-teal-400 border-b-2 border-teal-400' : 'text-slate-400 hover:text-white'}`}
            >
              <FileLock2 className="w-4 h-4 mr-2" /> Reports
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="py-6">
        <div className="container-custom">
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="px-3 py-1 bg-slate-800 rounded-lg flex items-center text-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-slate-300">Systems Protected</span>
              </div>
              <div className="px-3 py-1 bg-slate-800 rounded-lg flex items-center text-sm">
                <Shield className="w-3 h-3 text-teal-500 mr-2" />
                <span className="text-slate-300">AI Active</span>
              </div>
              <div className="px-3 py-1 bg-slate-800 rounded-lg flex items-center text-sm">
                <Clock className="w-3 h-3 text-slate-500 mr-2" />
                <span className="text-slate-300">Last scan: 5 minutes ago</span>
              </div>
              <div className="ml-auto">
                <select className="bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-300 px-3 py-1.5">
                  <option>Last 24 hours</option>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card p-4 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-slate-400">Total Alerts</h3>
                  <div className="w-8 h-8 rounded-full bg-red-900/20 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-red-400" />
                  </div>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-white">48</span>
                  <span className="ml-2 text-xs px-1.5 py-0.5 rounded text-red-400 bg-red-900/30">+12</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">From 36 yesterday</div>
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Critical</span>
                    <span className="text-red-400">5</span>
                  </div>
                  <div className="flex justify-between items-center text-xs mt-1">
                    <span className="text-slate-500">High</span>
                    <span className="text-orange-400">12</span>
                  </div>
                  <div className="flex justify-between items-center text-xs mt-1">
                    <span className="text-slate-500">Medium</span>
                    <span className="text-amber-400">18</span>
                  </div>
                  <div className="flex justify-between items-center text-xs mt-1">
                    <span className="text-slate-500">Low</span>
                    <span className="text-slate-300">13</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="card p-4 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-slate-400">Threat Score</h3>
                  <div className="w-8 h-8 rounded-full bg-amber-900/20 flex items-center justify-center">
                    <PieChart className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-white">62</span>
                  <span className="ml-2 text-xs px-1.5 py-0.5 rounded text-green-400 bg-green-900/30">-8</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">From 70 last week</div>
                <div className="mt-4 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 via-amber-500 to-red-500" style={{ width: '62%' }}></div>
                </div>
                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>Good</span>
                  <span>Moderate</span>
                  <span>Critical</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="card p-4 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-slate-400">Response Time</h3>
                  <div className="w-8 h-8 rounded-full bg-green-900/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-green-400" />
                  </div>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-white">4.2</span>
                  <span className="ml-1 text-white">min</span>
                  <span className="ml-2 text-xs px-1.5 py-0.5 rounded text-green-400 bg-green-900/30">-82%</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">vs. 23 min industry avg</div>
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Detection</span>
                    <span className="text-green-400">12s</span>
                  </div>
                  <div className="flex justify-between items-center text-xs mt-1">
                    <span className="text-slate-500">Triage</span>
                    <span className="text-green-400">1m 48s</span>
                  </div>
                  <div className="flex justify-between items-center text-xs mt-1">
                    <span className="text-slate-500">Containment</span>
                    <span className="text-green-400">2m 20s</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="card p-4 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-slate-400">AI-Solved Issues</h3>
                  <div className="w-8 h-8 rounded-full bg-blue-900/20 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                  </div>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-white">94%</span>
                  <span className="ml-2 text-xs px-1.5 py-0.5 rounded text-green-400 bg-green-900/30">+3%</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">From 91% last month</div>
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Auto-Resolved</span>
                    <span className="text-blue-400">127</span>
                  </div>
                  <div className="flex justify-between items-center text-xs mt-1">
                    <span className="text-slate-500">Human Escalated</span>
                    <span className="text-blue-400">8</span>
                  </div>
                  <div className="flex justify-between items-center text-xs mt-1">
                    <span className="text-slate-500">Avg. Resolution</span>
                    <span className="text-blue-400">3m 12s</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Dashboard Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <ThreatWidget />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <SecurityScoreWidget />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ComplianceWidget />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <VulnerabilitiesWidget />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="lg:col-span-3"
            >
              <AIAssistantWidget />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="lg:col-span-3"
            >
              <RecentEventsWidget />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;