import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Eye, BarChart3 } from 'lucide-react';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 600;

    const particles: { x: number; y: number; radius: number; xVelocity: number; yVelocity: number; color: string }[] = [];
    const numParticles = Math.min(50, Math.floor(window.innerWidth / 30));

    const colors = ['#2A9D8F', '#E9C46A', '#3BBA9C'];

    // Create particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        xVelocity: Math.random() * 0.5 - 0.25,
        yVelocity: Math.random() * 0.5 - 0.25,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (const particle of particles) {
        particle.x += particle.xVelocity;
        particle.y += particle.yVelocity;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections
        for (const otherParticle of particles) {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(42, 157, 143, ${0.2 - distance / 500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      }
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-30" />
      
      <div className="relative container-custom pt-20 pb-16 md:pt-32 md:pb-24 min-h-[600px] flex flex-col justify-center">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-sm font-medium text-teal-400 border border-teal-900/50">
              <Shield className="w-4 h-4 mr-1" /> Next-Gen Cybersecurity
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-white">AI-Powered </span>
            <span className="gradient-text">Cybersecurity</span>
            <span className="text-white"> for Modern Enterprises</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Replace your expensive SOC with an autonomous AI platform that detects, triages, and responds to threats 24/7 while ensuring continuous compliance.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/dashboard" className="btn-primary inline-flex items-center">
              View Platform Demo <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
            <a href="#features" className="btn-secondary inline-flex items-center">
              Explore Features
            </a>
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center mb-2">
                <Eye className="w-5 h-5 text-teal-500 mr-2" />
                <span className="text-xl md:text-2xl font-bold text-white">87%</span>
              </div>
              <p className="text-sm text-slate-400">Reduction in false positives</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center mb-2">
                <Shield className="w-5 h-5 text-teal-500 mr-2" />
                <span className="text-xl md:text-2xl font-bold text-white">24/7</span>
              </div>
              <p className="text-sm text-slate-400">Autonomous protection</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center mb-2">
                <BarChart3 className="w-5 h-5 text-teal-500 mr-2" />
                <span className="text-xl md:text-2xl font-bold text-white">65%</span>
              </div>
              <p className="text-sm text-slate-400">Cost reduction vs SOC</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;