import React from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '992dcd14-7c7d-42f7-bb49-cf529ae03940',
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert('Message sent successfully!');
        reset();
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-mono text-primary uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Let's create something <span className="text-gradient">extraordinary</span> together.
            </h3>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Have a project in mind or just want to say hi? Feel free to reach out.
              I'm always open to new opportunities and collaborations.
            </p>

            <div className="space-y-8">
              <ContactInfo icon={<Mail className="text-primary" />} label="Email" value="ac6279269@gmail.com" />
              <ContactInfo icon={<Phone className="text-secondary" />} label="Phone" value="+ 63 09911963938" />
              <ContactInfo icon={<MapPin className="text-accent" />} label="Location" value="Iloilo City, Philippines" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-12 rounded-3xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Name</label>
                  <input
                    {...register('name')}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.name && <p className="text-accent text-[10px] uppercase font-bold">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Email</label>
                  <input
                    {...register('email')}
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.email && <p className="text-accent text-[10px] uppercase font-bold">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Subject</label>
                <input
                  {...register('subject')}
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
                {errors.subject && <p className="text-accent text-[10px] uppercase font-bold">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Message</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                />
                {errors.message && <p className="text-accent text-[10px] uppercase font-bold">{errors.message.message}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-bg-dark font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-1">{label}</div>
        <div className="text-lg font-medium text-white">{value}</div>
      </div>
    </div>
  );
}
