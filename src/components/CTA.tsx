"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const CTA = () => {

  const router = useRouter()

  return (
    <section className="relative py-24 px-4 bg-linear-to-b from-[#0a0118] to-[#0f0524] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[140px] animate-pulse-glow" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
          Ready to Transform Your
          <span className="block gradient-text mt-2">Digital Presence?</span>
        </h2>
        
        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
          Let's discuss how we can help you achieve your business goals with innovative digital solutions tailored to your needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-linear-to-r from-primary to-secondary hover:shadow-[0_0_40px_rgba(255,71,87,0.4)] transition-all duration-300 text-base px-10 py-6 rounded-lg font-semibold"
            onClick={()=> router.push("/contact")}
          >
            <span className="relative z-10 flex items-center gap-2">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          
          {/* <Button 
            size="lg" 
            variant="outline"
            className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white hover:text-white text-base px-10 py-6 rounded-lg font-semibold hover:border-white/30"
          >
            View Pricing
          </Button> */}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="text-white/60 text-sm mb-6">Trusted by industry leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {["Tech", "Global", "Innovate", "Digital", "Future"].map((company) => (
              <div key={company} className="text-white/40 font-bold text-lg">
                {company}Corp
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
