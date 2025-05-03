import React, { useState, useEffect } from 'react';
import { Bot, Send, Zap, Trash2 } from 'lucide-react';

// Mock conversation data
const initialMessages = [
  { 
    id: 1, 
    type: 'system', 
    content: 'How can I help you with your cybersecurity needs today?',
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
  },
];

const suggestions = [
  "Explain the recent ransomware threat",
  "Summarize our security posture",
  "Show me compliance gaps",
  "How can we improve our score?",
];

const AIAssistantWidget: React.FC = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content,
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let response = '';
      if (content.includes('ransomware')) {
        response = "I've detected a GammaBit ransomware variant attempting to encrypt financial data on Finance-Server-03. Our AI agents have isolated the server and stopped the encryption process. The attack originated from IP 103.28.54.112, which has been blacklisted. I recommend updating your endpoint protection and reviewing user access to financial systems.";
      } else if (content.includes('security posture') || content.includes('score')) {
        response = "Your overall security score is 78/100, which is 12% better than industry average. Strengths: network segmentation, endpoint protection, and authentication. Weaknesses: outdated cloud access policies, insufficient backup verification, and several application vulnerabilities in the CRM system.";
      } else if (content.includes('compliance') || content.includes('gaps')) {
        response = "I've identified 8 compliance gaps across your frameworks. Most critical issues: GDPR - user data retention policy exceeds limits (Article 5), SOC 2 - missing evidence for 2 controls in the Availability category, ISO 27001 - incident response procedures require updates.";
      } else if (content.includes('improve')) {
        response = "To improve your security score, I recommend these actionable steps: 1) Update cloud access policies (est. +5 pts), 2) Implement MFA for remaining admin accounts (est. +4 pts), 3) Patch the 3 critical CRM vulnerabilities (est. +7 pts), 4) Conduct phishing training for high-risk departments (est. +3 pts).";
      } else {
        response = "Based on my analysis of your security posture, I recommend focusing on cloud security policies and application vulnerabilities. I've drafted updated policies for your review and initiated automated VAPT scans for your top 5 most vulnerable applications.";
      }

      const aiMessage = {
        id: Date.now(),
        type: 'system',
        content: response,
        timestamp: new Date(),
      };
      setMessages(prevMessages => [...prevMessages, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between p-4 border-b border-slate-800">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-teal-900/20 flex items-center justify-center mr-3">
            <Bot className="w-4 h-4 text-teal-400" />
          </div>
          <h3 className="font-medium text-white">AI Cyber Assistant</h3>
        </div>
        <button className="text-slate-400 hover:text-slate-300">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      <div className="h-80 overflow-y-auto p-4 bg-slate-900 space-y-4" style={{ scrollBehavior: 'smooth' }}>
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                message.type === 'user' 
                  ? 'bg-teal-900/40 text-white' 
                  : 'bg-slate-800 text-slate-300'
              }`}
            >
              <div className="text-sm">{message.content}</div>
              <div className="text-xs text-right mt-1 opacity-60">
                {formatTime(message.timestamp)}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-800 text-slate-300 rounded-lg px-4 py-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 border-t border-slate-800">
        <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full text-xs whitespace-nowrap"
              onClick={() => handleSendMessage(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
            placeholder="Ask anything about your security..."
            className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
          />
          <button 
            className="w-10 h-10 rounded-lg bg-teal-600 hover:bg-teal-500 flex items-center justify-center text-white"
            onClick={() => handleSendMessage(inputValue)}
          >
            <Send className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300">
            <Zap className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantWidget;