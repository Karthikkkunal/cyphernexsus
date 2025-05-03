import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ShieldCheck, Zap, BarChart3, Bot, Lock, Users2, ArrowRight } from 'lucide-react';

import HeroSection from '../components/sections/HeroSection';
import FeatureCard from '../components/cards/FeatureCard';
import ProblemSolutionSection from '../components/sections/ProblemSolutionSection';
import ThreatIntelligencePreview from '../components/previews/ThreatIntelligencePreview';
import TestimonialSection from '../components/sections/TestimonialSection';
import CTASection from '../components/sections/CTASection';

const animationConfig = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />

      {/* Problem/Solution Section */}
      <ProblemSolutionSection />

      {/* Key Features Section */}
      <section className="section bg-slate-900 cyber-grid relative">
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={animationConfig}
          >
            <h2 className="heading-lg mb-4">Comprehensive <span className="gradient-text">AI-Powered</span> Cybersecurity</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Our platform leverages cutting-edge AI to provide a complete security solution for your business,
              eliminating the need for expensive SOC teams and manual security processes.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard 
              icon={<Shield className="w-8 h-8 text-teal-500" />}
              title="Autonomous Threat Detection"
              description="24/7 monitoring with AI agents that identify and triage threats in real-time, reducing false positives by 87%."
              delay={0.1}
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-teal-500" />}
              title="Automated VAPT Service"
              description="Continuous vulnerability scanning and penetration testing that adapts to your evolving infrastructure."
              delay={0.2}
            />
            <FeatureCard 
              icon={<BarChart3 className="w-8 h-8 text-teal-500" />}
              title="Compliance Dashboard"
              description="Real-time visibility into your compliance status across multiple frameworks including SOC 2, GDPR, and ISO 27001."
              delay={0.3}
            />
            <FeatureCard 
              icon={<Bot className="w-8 h-8 text-teal-500" />}
              title="AI Cyber Assistant"
              description="Personalized guidance and recommendations from an AI assistant trained on the latest threat intelligence."
              delay={0.4}
            />
            <FeatureCard 
              icon={<Lock className="w-8 h-8 text-teal-500" />}
              title="Incident Response Automation"
              description="Automated containment and remediation workflows that reduce response time from hours to minutes."
              delay={0.5}
            />
            <FeatureCard 
              icon={<Users2 className="w-8 h-8 text-teal-500" />}
              title="Executive Reporting"
              description="Clear, actionable reports for stakeholders with risk scoring and ROI metrics for security investments."
              delay={0.6}
            />
          </div>

          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animationConfig}
          >
            <Link to="/dashboard" className="btn-primary inline-flex items-center">
              See Platform Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Threat Intelligence Preview */}
      <ThreatIntelligencePreview />

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;