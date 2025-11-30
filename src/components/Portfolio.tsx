"use client"

import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with payment integration and inventory management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["React", "Node.js", "MongoDB"],
    metrics: { users: "50K+", revenue: "$2M+", satisfaction: "98%" }
  },
  {
    id: 2,
    title: "Healthcare App",
    category: "Mobile Development",
    description: "Patient management system with appointment scheduling and telemedicine features",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["React Native", "Firebase", "AI"],
    metrics: { users: "100K+", appointments: "500K+", rating: "4.8/5" }
  },
  {
    id: 3,
    title: "Financial Dashboard",
    category: "Data Analytics",
    description: "Real-time analytics dashboard for financial data visualization and reporting",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Vue.js", "D3.js", "Python"],
    metrics: { transactions: "10M+", accuracy: "99.9%", speed: "< 100ms" }
  },
  // {
  //   id: 4,
  //   title: "Smart Home System",
  //   category: "IoT",
  //   description: "Integrated smart home automation with AI-powered energy optimization",
  //   image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
  //   tags: ["IoT", "Machine Learning", "AWS"],
  //   metrics: { devices: "1M+", savings: "40%", homes: "25K+" }
  // },
  // {
  //   id: 5,
  //   title: "EdTech Platform",
  //   category: "Education",
  //   description: "Interactive learning platform with adaptive curriculum and progress tracking",
  //   image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
  //   tags: ["React", "GraphQL", "PostgreSQL"],
  //   metrics: { students: "200K+", courses: "5K+", completion: "85%" }
  // },
  // {
  //   id: 6,
  //   title: "Social Media Analytics",
  //   category: "Marketing",
  //   description: "Comprehensive social media analytics and campaign management platform",
  //   image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80",
  //   tags: ["Angular", "TensorFlow", "Redis"],
  //   metrics: { brands: "1K+", insights: "50M+", roi: "+300%" }
  // }
];

const categories = ["All", "Web Development", "Mobile Development", "Data Analytics", "Education"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen relative overflow-hidden animate-in fade-in zoom-in duration-500">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-linear-to-b from-[#0a0118] to-[#0f0524]">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 backdrop-blur-sm">
            Our Work
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Our{" "}
            <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses transform their digital presence
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-4 py-8 relative z-10 bg-[#0f0524]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 border-primary"
                    : "bg-white/5 hover:bg-white/10 text-white/70 border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-20 relative z-10 bg-linear-to-b from-[#0f0524] to-[#0a0118]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0118] via-[#0a0118]/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <Badge className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white border-white/20">
                    {project.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-white">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                        <Github className="w-5 h-5 text-white/50 hover:text-white cursor-pointer" />
                        <ExternalLink className="w-5 h-5 text-white/50 hover:text-white cursor-pointer" />
                    </div>
                  </div>
                  
                  <p className="text-white/60 mb-6 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-primary/10 border border-primary/20 text-primary-foreground/80 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-bold text-primary">{value}</div>
                        <div className="text-[10px] uppercase tracking-wider text-white/40">{key}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
