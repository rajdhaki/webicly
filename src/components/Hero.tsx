"use client"

import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ParticleBackground";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export const Hero = () => {

  const router = useRouter()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-[#0a0118] via-[#0f0524] to-[#1a0b2e] pt-20">
      <ParticleBackground />
      
      {/* Gradient Orbs - More Subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/15 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-10 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-sm text-white/90 font-medium">Trusted by 500+ Companies Worldwide</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="block text-white mb-3">Transform Your Business with</span>
          <span className="gradient-text bg-linear-to-r from-primary via-secondary to-accent bg-size-[300%_300%] animate-gradient-shift">
            Next-Gen Digital Solutions
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
          We craft exceptional digital experiences that drive growth, engage audiences, and deliver measurable results for forward-thinking businesses.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-linear-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(255,71,87,0.4)] transition-all duration-300 text-base px-10 py-6 rounded-lg font-semibold"
          onClick={()=> router.push("/contact")}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          
          {/* <Button 
            size="lg" 
            variant="outline"
            className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white hover:text-white text-base px-10 py-6 rounded-lg font-semibold hover:border-white/30"
          >
            View Case Studies
          </Button> */}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: "0.35s" }}>
          {[
            "Enterprise-Grade Security",
            "99.9% Uptime SLA",
            "24/7 Support",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-white/70">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
  {[
    { value: "500+", label: "Projects Delivered", sublabel: "Across 30+ Industries" },
    { value: "98%", label: "Client Satisfaction", sublabel: "Average Rating" },
    { value: "15+", label: "Years Experience", sublabel: "Industry Leadership" },
  ].map((stat, index) => (
    <div key={index} className="relative group">
      <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-secondary/10 rounded-xl blur-xl group-hover:blur-2xl transition-all" />

      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all hover:bg-white/10">
        
        {/* FIXED GRADIENT TEXT */}
        <div className="text-4xl md:text-5xl font-bold gradient-text bg-linear-to-r from-primary via-secondary to-accent bg-300% animate-gradient-shift mb-2">
          {stat.value}
        </div>

        <div className="text-base font-semibold text-white mb-1">{stat.label}</div>
        <div className="text-sm text-white/50">{stat.sublabel}</div>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0a0118] to-transparent" />
    </section>
  );
};
