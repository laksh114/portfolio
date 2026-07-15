import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// TO RECEIVE REAL EMAIL MESSAGES IN YOUR INBOX:
// 1. Go to https://formspree.io/ and create a free account.
// 2. Create a new form, name it (e.g. "Portfolio Contact"), and set the target email to: lakshjangid41@gmail.com
// 3. Formspree will give you an ID (it looks like a short code, e.g. "mvolepzv").
// 4. Paste that ID below replacing "YOUR_FORM_ID".
const FORMSPREE_FORM_ID = "mzdnddkw";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Email Validation
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Validation checks
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Check if user set up Formspree
    if (FORMSPREE_FORM_ID === "YOUR_FORM_ID") {
      // Simulation mode fallback
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }, 1500);
      return;
    }

    // Real API submission to Formspree
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `Portfolio Contact: ${formData.subject}`,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        alert("Failed to send message. Please check your Formspree ID or try again later.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An network error occurred. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#060913]/60 relative overflow-hidden border-t border-white/5">
      {/* Glow backgrounds */}
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] rounded-full bg-emerald-900/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] rounded-full bg-teal-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 select-none">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Touch</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          <p className="text-xs text-gray-500 tracking-wider font-mono mt-4">
            Feel free to contact me for internships, freelance inquiries, or collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-space font-semibold text-white mb-6 text-left tracking-wide">
              Contact Information
            </h3>
            
            {/* Quick Cards */}
            <div className="glassmorphism p-5 rounded-2xl flex items-center gap-4 hover:border-emerald-500/20 hover:bg-emerald-500/3 transition-colors text-left group">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-emerald-400 group-hover:bg-emerald-500/10 transition-colors select-none">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Email Me</p>
                <a href="mailto:lakshjangid41@gmail.com" className="text-sm font-space text-gray-200 hover:text-emerald-400 transition-colors">
                  lakshjangid41@gmail.com
                </a>
              </div>
            </div>

            <div className="glassmorphism p-5 rounded-2xl flex items-center gap-4 hover:border-teal-500/20 hover:bg-teal-500/3 transition-colors text-left group">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-teal-400 group-hover:bg-teal-500/10 transition-colors select-none">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Connect</p>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm font-space text-gray-200 hover:text-teal-400 transition-colors">
                  linkedin.com/in/lakshjangid
                </a>
              </div>
            </div>

            <div className="glassmorphism p-5 rounded-2xl flex items-center gap-4 hover:border-sky-500/20 hover:bg-sky-500/3 transition-colors text-left group">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-sky-400 group-hover:bg-sky-500/10 transition-colors select-none">
                <Github size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Follow Work</p>
                <a href="https://github.com/laksh114" target="_blank" rel="noopener noreferrer" className="text-sm font-space text-gray-200 hover:text-sky-400 transition-colors">
                  github.com/laksh114
                </a>
              </div>
            </div>

            <div className="glassmorphism p-5 rounded-2xl flex items-center gap-4 hover:border-orange-500/20 hover:bg-orange-500/3 transition-colors text-left group">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-orange-400 group-hover:bg-orange-500/10 transition-colors select-none">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Location</p>
                <p className="text-sm font-space text-gray-200">
                  Rajasthan, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 relative">
            <form onSubmit={handleFormSubmit} className="glassmorphism p-8 rounded-2xl glow-purple text-left space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider select-none">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                    className={`w-full px-4 py-2.5 bg-[#060913]/50 border rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-all ${
                      errors.name ? 'border-rose-500/40 focus:border-rose-500' : 'border-white/5 focus:border-emerald-500/50'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[10px] font-mono text-rose-400 flex items-center gap-1 select-none">
                      <AlertCircle size={10} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider select-none">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    className={`w-full px-4 py-2.5 bg-[#060913]/50 border rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-all ${
                      errors.email ? 'border-rose-500/40 focus:border-rose-500' : 'border-white/5 focus:border-emerald-500/50'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[10px] font-mono text-rose-400 flex items-center gap-1 select-none">
                      <AlertCircle size={10} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider select-none">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Inquiry / Feedback"
                  className={`w-full px-4 py-2.5 bg-[#060913]/50 border rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-all ${
                    errors.subject ? 'border-rose-500/40 focus:border-rose-500' : 'border-white/5 focus:border-emerald-500/50'
                  }`}
                />
                {errors.subject && (
                  <p className="text-[10px] font-mono text-rose-400 flex items-center gap-1 select-none">
                    <AlertCircle size={10} /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider select-none">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Write message details..."
                  className={`w-full px-4 py-3 bg-[#060913]/50 border rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-all resize-none ${
                    errors.message ? 'border-rose-500/40 focus:border-rose-500' : 'border-white/5 focus:border-emerald-500/50'
                  }`}
                />
                {errors.message && (
                  <p className="text-[10px] font-mono text-rose-400 flex items-center gap-1 select-none">
                    <AlertCircle size={10} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Send Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-space text-xs tracking-widest uppercase rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(20,184,166,0.25)] disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Space Wave...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Success Toast */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="absolute bottom-4 left-4 right-4 glassmorphism p-4 border-emerald-500/30 bg-emerald-500/10 rounded-xl flex items-center gap-3 shadow-lg select-none"
                >
                  <CheckCircle className="text-emerald-400 shrink-0 animate-bounce" size={20} />
                  <div className="text-left">
                    <h4 className="text-xs font-space font-semibold text-emerald-400 uppercase tracking-wider">Transmission Received!</h4>
                    <p className="text-[10px] text-gray-300 font-sans">Thanks for writing, Laksh will reply to your message soon.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
