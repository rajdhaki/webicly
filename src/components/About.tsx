import { ParticleBackground } from "@/components/ParticleBackground";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "15+ years in digital transformation"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
    bio: "Expert in cloud architecture & AI"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    bio: "Award-winning UX/UI designer"
  },
  {
    name: "David Park",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    bio: "Full-stack development specialist"
  }
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions"
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We build lasting partnerships through transparency and dedication"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in every project, from concept to deployment"
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do and it shows in the quality and creativity of our work"
  }
];

const About = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-linear-to-b from-[#0a0118] to-[#0f0524]">
        {/* Gradient orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 backdrop-blur-sm">
            About Us
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Building the <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Future</span> Together
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We're a team of passionate innovators dedicated to transforming businesses through cutting-edge digital solutions
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 py-20 bg-[#9c27b0]/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2015, Digital Dreams started with a simple mission: to help businesses harness the power of technology to achieve their dreams. What began as a small team of developers has grown into a full-service digital agency serving clients worldwide.
              </p>
              <p className="text-muted-foreground mb-4">
                Over the years, we've completed 500+ projects, partnered with Fortune 500 companies, and helped startups scale to millions of users. Our commitment to innovation and excellence has earned us industry recognition and, more importantly, the trust of our clients.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to push boundaries, explore emerging technologies, and deliver solutions that make a real impact on businesses and their customers.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-bold">500+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-20 relative z-10 bg-linear-to-b from-[#0a0118] to-[#0f0524]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-white/70 text-lg">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 h-full hover:bg-white/[0.07]">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-sm text-white/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-20 bg-accent/30 relative z-10 bg-linear-to-b from-[#0a0118] to-[#0f0524]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-white/70 text-lg">
              The talented people behind our success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 h-full hover:bg-white/[0.07]">
                <div className="relative overflow-hidden h-52">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" /> */}
                </div>
                <CardContent className="p-6 text-center relative ">
                  <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-white/70 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-20 relative z-10 bg-linear-to-b from-[#0a0118] to-[#0f0524] ">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-white/70">Projects Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">200+</div>
              <div className="text-white/70 ">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-white/70">Team Members</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-white/70 ">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
