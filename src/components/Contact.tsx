"use client"

import React, { useState } from 'react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Toaster } from '@/components/ui/toaster';
import { Mail, Phone, MapPin, Clock, Send, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000)
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      contactSchema.parse(formData);
      setErrors({});
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0].toString()] = issue.message;
          }
        });
        setErrors(newErrors);
        toast({
            title: "Validation Error",
            description: "Please check the form for errors.",
            variant: "destructive"
        });
      }
    } finally {
        setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0118] relative overflow-hidden text-foreground">
      <ParticleBackground />
      <Toaster />
      
      {/* Decorative Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-white/5 text-primary border-primary/30 backdrop-blur-md px-4 py-1 text-sm uppercase tracking-wider hover:bg-white/10 transition-colors">
            <Sparkles className="w-3 h-3 mr-2" />
            Get In Touch
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white leading-tight">
            Let's Start a <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
              Conversation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear about it. Reach out and let's discuss how we can help bring your vision to life with our digital expertise.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="grid gap-6">
                {[
                  { icon: Mail, title: "Email", lines: ["hello@digitaldreams.com", "support@digitaldreams.com"] },
                  { icon: Phone, title: "Phone", lines: ["+1 (555) 123-4567", "+1 (555) 987-6543"] },
                  { icon: MapPin, title: "Office", lines: ["123 Innovation Drive", "San Francisco, CA 94105"] },
                  { icon: Clock, title: "Business Hours", lines: ["Monday - Friday", "9:00 AM - 6:00 PM PST"] }
                ].map((item, idx) => (
                    <Card key={idx} className="group relative bg-white/[0.03] backdrop-blur-xl border-white/10 overflow-hidden hover:bg-white/[0.06] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <CardContent className="p-6 relative z-10">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-inner">
                            <item.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                            <h3 className="font-semibold mb-1 text-white tracking-wide">{item.title}</h3>
                            {item.lines.map((line, i) => (
                                <p key={i} className="text-white/50 text-sm group-hover:text-white/70 transition-colors">{line}</p>
                            ))}
                            </div>
                        </div>
                        </CardContent>
                    </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <Card className="relative bg-white/[0.03] backdrop-blur-2xl border-white/10 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 opacity-80" />
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2 text-white">Send us a Message</h2>
                    <p className="text-white/50">Fill out the form below and we'll respond within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-white/80 ml-1">
                          Name <span className="text-secondary">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`h-12 bg-white/[0.05] border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-primary/20 transition-all ${errors.name ? "border-destructive/50 focus:border-destructive/50" : ""}`}
                        />
                        {errors.name && (
                          <p className="text-destructive text-xs ml-1 animate-in slide-in-from-left-1">{errors.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-white/80 ml-1">
                          Email <span className="text-secondary">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`h-12 bg-white/[0.05] border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-primary/20 transition-all ${errors.email ? "border-destructive/50 focus:border-destructive/50" : ""}`}
                        />
                        {errors.email && (
                          <p className="text-destructive text-xs ml-1 animate-in slide-in-from-left-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-white/80 ml-1">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className="h-12 bg-white/[0.05] border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-white/80 ml-1">
                          Subject <span className="text-secondary">*</span>
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Project inquiry"
                          className={`h-12 bg-white/[0.05] border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-primary/20 transition-all ${errors.subject ? "border-destructive/50 focus:border-destructive/50" : ""}`}
                        />
                        {errors.subject && (
                          <p className="text-destructive text-xs ml-1 animate-in slide-in-from-left-1">{errors.subject}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-white/80 ml-1">
                        Message <span className="text-secondary">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project details..."
                        rows={6}
                        className={`bg-white/[0.05] border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-primary/20 min-h-[160px] transition-all ${errors.message ? "border-destructive/50 focus:border-destructive/50" : ""}`}
                      />
                      {errors.message && (
                        <p className="text-destructive text-xs ml-1 animate-in slide-in-from-left-1">{errors.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-12 text-lg font-medium bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                          "Sending..."
                      ) : (
                          <span className="flex items-center gap-2">
                            Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="px-4 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Card className="border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm">
            <div className="w-full h-96 bg-[#0f0524] relative group cursor-pointer overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 transform group-hover:scale-105" />
               <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-md border border-white/10 animate-pulse">
                     <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-white font-medium tracking-wide">View on Map</p>
               </div>
            </div>
          </Card>
        </div>
      </section>

    </main>
  );
};

export default Contact;
