import { Code2, Palette, Rocket, Shield, Zap, LayoutGrid } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description: "Scalable web applications built with React, Node.js, and modern technologies for optimal performance and security.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality to create exceptional digital experiences.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: LayoutGrid,
    title: "Custom App Development",
    description: "End-to-end mobile app development using React Native for high-performance iOS and Android applications.",
    gradient: "from-accent to-primary",
  },
  
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "Strategic consulting and implementation to modernize your business processes and technology stack.",
    gradient: "from-primary via-accent to-secondary",
  },
  {
    icon: Shield,
    title: "Security & Compliance (soon)",
    description: "Enterprise-grade security audits, penetration testing, and compliance management (SOC 2, GDPR, HIPAA).",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed optimization, SEO enhancement, and monitoring to ensure peak performance and user satisfaction.",
    gradient: "from-accent to-secondary",
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-24 px-4 bg-linear-to-b from-[#0a0118] to-[#0f0524]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase text-secondary">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            From strategy to execution, we provide end-to-end services that transform your digital vision into reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-xl blur-xl transition-all duration-500`} />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 h-full hover:bg-white/[0.07]">
                <div className={`inline-flex p-4 rounded-lg bg-linear-to-br ${service.gradient} mb-6 shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
