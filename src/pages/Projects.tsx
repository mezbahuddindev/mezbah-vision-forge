import Navbar from "@/components/Navbar";
import { ExternalLink, Shield, Eye, BarChart3, Users } from "lucide-react";

const Projects = () => {
  const mainProject = {
    title: "Navodesh Security Vision",
    description: "A comprehensive AI-powered security platform designed for government-level surveillance and threat detection. This flagship project represents the core of our national security innovation.",
    features: [
      {
        icon: <Eye className="w-6 h-6 text-primary" />,
        title: "Advanced Face Matching",
        description: "Government-grade facial recognition system with 99%+ accuracy"
      },
      {
        icon: <BarChart3 className="w-6 h-6 text-primary" />,
        title: "Intelligence Dashboard",
        description: "Real-time monitoring and analytics for security agencies"
      },
      {
        icon: <Shield className="w-6 h-6 text-primary" />,
        title: "Threat Detection",
        description: "AI-powered threat assessment and automated alert systems"
      },
      {
        icon: <Users className="w-6 h-6 text-primary" />,
        title: "Multi-User Management",
        description: "Role-based access control for different security clearance levels"
      }
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "React", "Node.js", "PostgreSQL"],
    status: "In Development",
    timeline: "2024-2025"
  };

  const futureProjects = [
    {
      title: "AI Border Security System",
      description: "Smart border monitoring using satellite imagery and AI analysis",
      status: "Planned",
      timeframe: "2025"
    },
    {
      title: "Cybersecurity AI Assistant",
      description: "Intelligent system for detecting and preventing cyber threats",
      status: "Research Phase",
      timeframe: "2025-2026"
    },
    {
      title: "Smart City Surveillance Network",
      description: "Integrated city-wide security monitoring with predictive analytics",
      status: "Conceptual",
      timeframe: "2026+"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-glow">
              Projects & Innovations
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Building tomorrow's security infrastructure today. Explore our flagship project and upcoming innovations.
            </p>
          </div>

          {/* Main Project - Navodesh Security Vision */}
          <div className="card-futuristic p-8 mb-12 animate-slide-in-left">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold text-primary">{mainProject.title}</h2>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">
                    Flagship Project
                  </span>
                </div>
                
                <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                  {mainProject.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {mainProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                      {feature.icon}
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {mainProject.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <span className="px-4 py-2 bg-accent/20 text-accent font-semibold rounded-lg">
                    {mainProject.status}
                  </span>
                  <span className="text-muted-foreground">
                    Timeline: {mainProject.timeline}
                  </span>
                </div>
              </div>

              <div className="lg:w-1/3">
                <div className="bg-gradient-to-br from-primary/20 to-primary-glow/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-center">Project Impact</h3>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">99%+</div>
                      <div className="text-sm text-muted-foreground">Recognition Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">Real-time</div>
                      <div className="text-sm text-muted-foreground">Processing Speed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">Enterprise</div>
                      <div className="text-sm text-muted-foreground">Grade Security</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Projects */}
          <div className="animate-slide-in-right">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">
              Future Innovations Pipeline
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {futureProjects.map((project, index) => (
                <div key={index} className="card-futuristic p-6 hover:animate-pulse-glow">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                      {project.status}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {project.timeframe}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up">
            <div className="card-futuristic p-8">
              <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're an investor, government agency, or technology partner, 
                I'd love to discuss how we can work together to strengthen national security through innovation.
              </p>
              <button className="btn-hero inline-flex items-center gap-2">
                Get In Touch
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;