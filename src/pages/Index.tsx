import { Link } from "react-router-dom";
import { ArrowRight, Shield, Eye, Zap, Target } from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "National Security",
      description: "Building AI solutions for government-level security infrastructure"
    },
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Advanced Surveillance",
      description: "Cutting-edge facial recognition and monitoring systems"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "AI Innovation",
      description: "Leveraging artificial intelligence for threat detection and prevention"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Strategic Vision",
      description: "Building Bangladesh's future as a leader in security technology"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-slide-in-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-glow">Mezbah</span>
                <br />
                <span className="text-primary">Uddin</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                <div className="mb-2">Young Entrepreneur</div>
                <div className="mb-2">Future Tech Visionary</div>
                <div className="text-primary font-semibold">CEO & Founder of Navodesh Tech</div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Building tomorrow's national security infrastructure today through innovative AI solutions 
                and cutting-edge surveillance technologies from Bangladesh.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-hero inline-flex items-center justify-center gap-2">
                  Hire Me
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/projects" className="btn-outline-hero inline-flex items-center justify-center gap-2">
                  View Projects
                  <Shield className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow rounded-full blur-2xl opacity-20 animate-pulse-glow" />
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 animate-float">
                  <img
                    src="/lovable-uploads/1e4eadb9-a125-427c-8a34-02b880582eb6.png"
                    alt="Mezbah Uddin - Young Entrepreneur & Tech Visionary"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Building the Future of Security
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Through Navodesh Tech, I'm developing revolutionary AI-powered solutions 
              that will transform how Bangladesh approaches national security and surveillance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-futuristic p-6 text-center animate-fade-in-up hover:animate-pulse-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-card/50 to-secondary/50">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            "Technology should serve humanity's greatest challenges"
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            As a young entrepreneur from Bangladesh, I believe that age is no barrier to innovation. 
            My vision is to build AI-powered security solutions that not only protect our nation 
            but also position Bangladesh as a global leader in defense technology.
          </p>
          <Link to="/about" className="btn-hero inline-flex items-center gap-2">
            Learn More About My Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Mezbah Uddin. Building the future, one innovation at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
