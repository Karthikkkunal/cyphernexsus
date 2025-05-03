import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company, rating, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`} 
          />
        ))}
      </div>
      <blockquote className="mb-4 text-slate-300">"{quote}"</blockquote>
      <div>
        <p className="font-medium text-white">{author}</p>
        <p className="text-sm text-slate-400">{role}, {company}</p>
      </div>
    </motion.div>
  );
};

const TestimonialSection: React.FC = () => {
  return (
    <section className="section bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-4">Trusted by Security Leaders</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Discover how our AI-powered cybersecurity platform is transforming security operations
            for businesses across industries.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Testimonial 
            quote="Implementing Sentinel AI has completely transformed our security operations. We've reduced our SOC costs by 60% while improving our threat detection capability."
            author="Sarah Johnson"
            role="CISO"
            company="TechNova Solutions"
            rating={5}
            delay={0.1}
          />
          <Testimonial 
            quote="The automated VAPT service has been a game-changer for us. We're now able to run continuous security testing across our entire infrastructure with minimal oversight."
            author="Michael Chen"
            role="Director of Security"
            company="FinServ Global"
            rating={5}
            delay={0.2}
          />
          <Testimonial 
            quote="As a mid-sized company with limited security resources, the AI Cyber Assistant has become our virtual security expert, guiding our team through complex security challenges."
            author="Jessica Patel"
            role="IT Manager"
            company="MedTech Innovations"
            rating={4}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;