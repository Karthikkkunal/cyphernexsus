import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-900/30 flex items-center justify-center mr-2">
                <Shield className="w-4 h-4 text-teal-400" />
              </div>
              <span className="text-lg font-bold text-white">Cypher<span className="text-teal-400">Nexsus</span></span>
            </Link>
            <p className="text-sm text-slate-400 mb-4">
              AI-powered cybersecurity platform for modern enterprises, providing autonomous threat detection and compliance monitoring.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Threat Detection</a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">VAPT Service</a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Compliance</a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">AI Assistant</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Leadership</a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Investors</a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Careers</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Whitepapers</a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">Support</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between">
          <p className="text-sm text-slate-500">
            © 2025 SentinelAI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
            <a href="#" className="text-xs text-slate-500 hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-400">Terms of Service</a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-400">Security</a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;