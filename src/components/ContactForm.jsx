import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Prepare mailto URI
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalData.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyMessage = () => {
    const textToCopy = `To: ${personalData.email}\nSubject: ${formData.subject}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="rounded-2xl bg-cardBg border border-subtleBorder p-6 sm:p-8 backdrop-blur-sm shadow-glow-card relative">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-mainText">Send Me a Message</h3>
        <p className="text-sm text-secondaryText mt-1">
          Fill out the details below to initiate direct email communication.
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-mainText">Email Client Triggered!</h4>
          <p className="text-sm text-secondaryText max-w-md mx-auto leading-relaxed">
            Your default mail application has been opened with your message pre-filled to{' '}
            <span className="text-secondaryAccent font-mono">{personalData.email}</span>.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleCopyMessage}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-elevatedCard border border-subtleBorder text-sm font-medium text-mainText hover:border-primaryAccent/50 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Message Copied!' : 'Copy Prepared Message'}</span>
            </button>
            <button
              onClick={handleReset}
              type="button"
              className="px-4 py-2.5 rounded-xl bg-transparent border border-white/10 text-sm font-medium text-secondaryText hover:text-white transition-colors"
            >
              Send Another
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-secondaryText uppercase tracking-wider mb-1.5">
                Full Name <span className="text-primaryAccent">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className={`w-full px-4 py-3 rounded-xl bg-secondaryBg border text-sm text-mainText placeholder-secondaryText/40 focus:outline-none transition-all ${
                  errors.name
                    ? 'border-red-500/60 focus:border-red-500 ring-1 ring-red-500/20'
                    : 'border-subtleBorder focus:border-primaryAccent/60 focus:ring-1 focus:ring-primaryAccent/30'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.name}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-secondaryText uppercase tracking-wider mb-1.5">
                Email Address <span className="text-primaryAccent">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full px-4 py-3 rounded-xl bg-secondaryBg border text-sm text-mainText placeholder-secondaryText/40 focus:outline-none transition-all ${
                  errors.email
                    ? 'border-red-500/60 focus:border-red-500 ring-1 ring-red-500/20'
                    : 'border-subtleBorder focus:border-primaryAccent/60 focus:ring-1 focus:ring-primaryAccent/30'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-xs font-semibold text-secondaryText uppercase tracking-wider mb-1.5">
              Subject <span className="text-primaryAccent">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Collaboration Opportunity / Inquiry"
              className={`w-full px-4 py-3 rounded-xl bg-secondaryBg border text-sm text-mainText placeholder-secondaryText/40 focus:outline-none transition-all ${
                errors.subject
                  ? 'border-red-500/60 focus:border-red-500 ring-1 ring-red-500/20'
                  : 'border-subtleBorder focus:border-primaryAccent/60 focus:ring-1 focus:ring-primaryAccent/30'
              }`}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-secondaryText uppercase tracking-wider mb-1.5">
              Message <span className="text-primaryAccent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message or inquiry here..."
              className={`w-full px-4 py-3 rounded-xl bg-secondaryBg border text-sm text-mainText placeholder-secondaryText/40 focus:outline-none transition-all resize-none ${
                errors.message
                  ? 'border-red-500/60 focus:border-red-500 ring-1 ring-red-500/20'
                  : 'border-subtleBorder focus:border-primaryAccent/60 focus:ring-1 focus:ring-primaryAccent/30'
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-primaryAccent to-purple-600 hover:from-purple-600 hover:to-primaryAccent text-white font-semibold text-sm shadow-glow-purple flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group active:scale-[0.99]"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Preparing Mail...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-secondaryText/70 mt-2">
            Direct mailto dispatch with no external server tracking.
          </p>
        </form>
      )}
    </div>
  );
};
