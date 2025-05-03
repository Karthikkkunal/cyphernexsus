import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="section bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-25"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-900/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-indigo-900/20 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ShieldCheck className="w-16 h-16 text-teal-500 mx-auto mb-6" />
          <h2 className="heading-lg mb-6">
            Ready to Transform Your <span className="gradient-text">Cybersecurity</span> Operations?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join the growing number of forward-thinking companies replacing traditional SOC teams with our AI-powered platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/dashboard" className="btn-primary inline-flex items-center text-base">
              Explore Platform Demo <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
            <a href="#" className="btn-secondary inline-flex items-center text-base">
              Schedule Investment Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;