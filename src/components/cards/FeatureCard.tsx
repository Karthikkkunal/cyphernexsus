import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div 
      className="card hover-card p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="heading-sm mb-2 text-white">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;