import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-40 pb-24 bg-obsidian min-h-screen text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Info Side */}
          <div>
            <span className="text-brand-gold font-heading tracking-[0.4em] text-[10px] uppercase mb-6 block">CONNECT</span>
            <h1 className="font-display text-5xl lg:text-8xl mb-8 leading-[0.9]">
              How can we <span className="serif-italic text-brand-gold-muted text-7xl lg:text-9xl">Assist?</span>
            </h1>
            <p className="text-white/40 text-lg mb-12 font-light leading-relaxed max-w-md">
              Whether you're inquiring about bespoke alterations or tracking a global shipment, our luxury concierge is at your service.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-widest uppercase font-bold text-white/40 mb-2">Email Inquiries</h4>
                  <p className="text-xl font-display">concierge@mjexclusive.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold flex-shrink-0">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-widest uppercase font-bold text-white/40 mb-2">WhatsApp Support</h4>
                  <p className="text-xl font-display">+92 321 456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-widest uppercase font-bold text-white/40 mb-2">Location</h4>
                  <p className="text-xl font-display">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-charcoal-dark border border-white/5 p-10 lg:p-16">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="w-16 h-16 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={24} />
                </div>
                <h3 className="text-2xl font-display mb-4">Message Transmitted</h3>
                <p className="text-white/40 font-light text-sm">Response pending via verified heritage channels.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-white/40 block ml-1">Your Identity</label>
                  <input required type="text" placeholder="Full Name" className="w-full bg-obsidian border-b border-white/10 py-4 px-2 focus:outline-none focus:border-brand-gold transition-colors text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-white/40 block ml-1">Electronic Mail</label>
                  <input required type="email" placeholder="email@address.com" className="w-full bg-obsidian border-b border-white/10 py-4 px-2 focus:outline-none focus:border-brand-gold transition-colors text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-white/40 block ml-1">How can we serve you?</label>
                  <select className="w-full bg-obsidian border-b border-white/10 py-4 px-2 focus:outline-none focus:border-brand-gold transition-colors text-white appearance-none">
                    <option>General Inquiry</option>
                    <option>Bespoke Tailoring</option>
                    <option>Shipment Tracking</option>
                    <option>Wholesale Opportunities</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-white/40 block ml-1">Message</label>
                  <textarea required rows={4} placeholder="Your detailed message..." className="w-full bg-obsidian border-b border-white/10 py-4 px-2 focus:outline-none focus:border-brand-gold transition-colors text-white resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-5 gold-gradient text-obsidian font-heading font-bold text-xs tracking-widest uppercase hover:scale-[1.02] transition-transform flex items-center justify-center gap-3">
                  Transmit Message <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
