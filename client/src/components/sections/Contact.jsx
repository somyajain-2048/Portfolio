import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../lib/constants';
import SectionLabel from '../ui/SectionLabel';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Mail, Send, Check, Copy, MessageSquare, User, AtSign, Sparkles, Phone } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

// EmailJS credentials — set these in your client/.env file
const EJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAIL_READY  = !!(EJS_SERVICE && EJS_TEMPLATE && EJS_KEY
  && !EJS_SERVICE.includes('xxxxxxx'));

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
};

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setIsCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setIsCopied(false), 2000);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      if (EMAIL_READY) {
        // ── EmailJS path ──────────────────────────────────────────
        // Template variables sent to EmailJS:
        //   {{from_name}}  → sender's name
        //   {{from_email}} → sender's email (for Reply-To)
        //   {{subject}}    → email subject
        //   {{message}}    → the message body
        await emailjs.send(
          EJS_SERVICE,
          EJS_TEMPLATE,
          {
            from_name:  data.name,
            from_email: data.email,
            subject:    data.subject,
            message:    data.message,
            reply_to:   data.email,
          },
          EJS_KEY
        );
        toast.success('Message sent! I\'ll get back to you within 24–48 hours. 🚀');
      } else {
        // ── Dev fallback (EmailJS not configured yet) ─────────────
        console.log('📧 EmailJS not configured — message logged locally:', data);
        toast.success('Message received! (Configure EmailJS in .env to enable real delivery)', { duration: 5000 });
      }
      reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      toast.error('Could not send message. Please email me directly at ' + PERSONAL_INFO.email);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <SectionLabel number="07">Get In Touch</SectionLabel>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-text">
          Let's Build Something <span className="text-gradient-gold">Great</span>
        </h2>
        <p className="text-text-muted text-base sm:text-lg">
          Whether you have an opportunity, a project to collaborate on, or wish to connect, feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info & Social Connections */}
        <div className="lg:col-span-5 space-y-6">
          <Card variant="glass" className="p-8 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for Full-Stack Roles & Internships
              </div>
              <h3 className="font-display font-bold text-2xl text-text">
                Direct Contact Details
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Connect via email, phone, or view verified profiles on GitHub and LinkedIn.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="bg-surface/90 border border-border rounded-xl p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="font-mono text-xs text-text-muted block">Direct Email</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="font-mono text-sm text-text font-medium truncate block hover:text-accent">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <Button
                variant="icon"
                size="sm"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-accent" />}
              </Button>
            </div>

            {/* Phone Card */}
            <div className="bg-surface/90 border border-border rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-text-muted block">Mobile Phone</span>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="font-mono text-sm text-text font-medium hover:text-accent">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Social Grid (GitHub & LinkedIn only) */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
                Professional Profiles
              </span>
              <div className="grid grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = iconMap[social.name] || FaGithub;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="p-3.5 rounded-xl border border-border bg-surface hover:border-accent hover:shadow-gold transition-all duration-200 flex items-center gap-3 group"
                    >
                      <div className="p-2 rounded-lg bg-surface-elevated text-accent group-hover:bg-accent/10 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="font-medium text-sm text-text group-hover:text-accent transition-colors block">
                          {social.name}
                        </span>
                        <span className="font-mono text-[11px] text-text-muted truncate block">
                          @{social.handle}
                        </span>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <Card variant="gradient" className="p-8 sm:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name Field */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-mono text-xs text-text-muted uppercase tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-accent" />
                    <span>Your Name</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Alex Morgan"
                    {...register('name')}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-accent focus:ring-1 focus:ring-accent text-text placeholder:text-text-faint text-sm outline-none transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 font-mono">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-mono text-xs text-text-muted uppercase tracking-wider flex items-center gap-1.5">
                    <AtSign className="w-3.5 h-3.5 text-accent" />
                    <span>Email Address</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="alex@company.com"
                    {...register('email')}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-accent focus:ring-1 focus:ring-accent text-text placeholder:text-text-faint text-sm outline-none transition-colors"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 font-mono">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="font-mono text-xs text-text-muted uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span>Subject</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Full-Stack Opportunity / Project Inquiry"
                  {...register('subject')}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-accent focus:ring-1 focus:ring-accent text-text placeholder:text-text-faint text-sm outline-none transition-colors"
                />
                {errors.subject && (
                  <p className="text-xs text-red-400 font-mono">{errors.subject.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="font-mono text-xs text-text-muted uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-accent" />
                  <span>Message</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Hello Somya, I would love to discuss..."
                  {...register('message')}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-accent focus:ring-1 focus:ring-accent text-text placeholder:text-text-faint text-sm outline-none transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-xs text-red-400 font-mono">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center shadow-gold cursor-pointer"
                  isLoading={isSubmitting}
                  iconRight={Send}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
