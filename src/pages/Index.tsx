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
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center min-h-[calc(100vh-140px)]">
            {/* Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left animate-slide-in-left space-y-4 sm:space-y-6 w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight">
                <span className="block text-glow">Mezbah</span>
                <span className="block text-primary mt-1 sm:mt-2">Uddin</span>
              </h1>
              
              <div className="text-base sm:text-lg lg:text-xl text-muted-foreground space-y-1 sm:space-y-2 font-medium">
                <div>Young Entrepreneur</div>
                <div>Future Tech Visionary</div>
                <div className="text-primary font-bold">CEO & Founder of Navodesh Tech</div>
              </div>
              
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Building tomorrow's national security infrastructure today through innovative AI solutions 
                and cutting-edge surveillance technologies from Bangladesh.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Link to="/contact" className="btn-hero inline-flex items-center justify-center gap-2">
                  Hire Me
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link to="/projects" className="btn-outline-hero inline-flex items-center justify-center gap-2">
                  View Projects
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center animate-slide-in-right w-full">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow rounded-full blur-3xl opacity-20 animate-pulse-glow" />
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl animate-float">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
