import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const ProblemSolutionSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="section bg-slate-900">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Problem Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="card p-8 bg-slate-800 border-red-900/30"
          >
            <motion.div variants={itemVariants} className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="heading-md text-red-400">The Problem</h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 mb-6">
              <div className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-red-900/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-sm text-red-400">1</span>
                </span>
                <p className="text-slate-300">
                  <span className="font-medium text-red-400">Reactive Security Models</span> - Traditional SOC operations wait for alerts, leaving businesses vulnerable to emerging threats.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-red-900/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-sm text-red-400">2</span>
                </span>
                <p className="text-slate-300">
                  <span className="font-medium text-red-400">Costly Operations</span> - Building and maintaining SOC teams requires significant investment in talent and tools.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-red-900/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-sm text-red-400">3</span>
                </span>
                <p className="text-slate-300">
                  <span className="font-medium text-red-400">Manual Processes</span> - VAPT and compliance assessments are slow, labor-intensive, and provide only point-in-time security.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-red-900/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-sm text-red-400">4</span>
                </span>
                <p className="text-slate-300">
                  <span className="font-medium text-red-400">Alert Fatigue</span> - Excessive false positives decrease response effectiveness and increase analyst burnout.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="terminal">
                <div className="text-slate-400">$ security_status</div>
                <div className="text-red-400 mt-1">ERROR: Vulnerable to emerging threats.</div>
                <div className="text-red-400">ERROR: Manual processes causing delays.</div>
                <div className="text-red-400">ERROR: 78% of alerts are false positives.</div>
                <div className="text-amber-400 mt-1">WARNING: SOC team operating at capacity.</div>
                <div className="text-amber-400">WARNING: Compliance status outdated.</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Solution Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="card p-8 bg-slate-800 border-teal-900/30"
          >
            <motion.div variants={itemVariants} className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-teal-900/20 flex items-center justify-center mr-4">
                <CheckCircle2 className="w-6 h-6 text-teal-400" />
              </div>
              <h2 className="heading-md text-teal-400">Our Solution</h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 mb-6">
              <div className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-teal-900/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-sm text-teal-400">1</span>
                </span>
                <p className="text-slate-300">
                  <span className="font-medium text-teal-400">AI Autonomous Agents</span> - 24/7 proactive monitoring with self-learning agents that detect and triage threats with 87% fewer false positives.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-teal-900/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-sm text-teal-400">2</span>
                </span>
                <p className="text-slate-300">
                  <span className="font-medium text-teal-400">Automated VAPT</span> - Continuous vulnerability assessment and penetration testing that adapts to your evolving infrastructure.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-teal-900/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-sm text-teal-400">3</span>
                </span>
                <p className="text-slate-300">
                  <span className="font-medium text-teal-400">Real-time Compliance</span> - Automated monitoring and reporting across multiple frameworks with clear remediation guidance.
                </p>
              </div>
              
              <div className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-teal-900/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-sm text-teal-400">4</span>
                </span>
                <p className="text-slate-300">
                  <span className="font-medium text-teal-400">AI Cyber Assistant</span> - Personalized guidance and recommendations from an assistant trained on the latest threat intelligence.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="terminal">
                <div className="text-slate-400">$ ai_security_status</div>
                <div className="text-teal-400 mt-1">SUCCESS: AI agents actively monitoring all systems.</div>
                <div className="text-teal-400">SUCCESS: Automated VAPT completed. 0 critical issues.</div>
                <div className="text-teal-400">SUCCESS: SOC 2 compliance status: 98% complete.</div>
                <div className="text-amber-400 mt-1">RECOMMENDATION: Update cloud access policies.</div>
                <div className="text-slate-400 mt-1">AI Assistant: I've drafted the policy updates for your review.</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;