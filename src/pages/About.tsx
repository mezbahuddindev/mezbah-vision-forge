import Navbar from "@/components/Navbar";
import { Target, Heart, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "Constantly pushing boundaries and thinking beyond conventional solutions to create breakthrough technologies."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Dedication",
      description: "Committed to excellence in every project, working tirelessly to turn ambitious visions into reality."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Patriotism",
      description: "Building technology solutions that strengthen national security and contribute to Bangladesh's technological advancement."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-glow">
              About Me
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Young entrepreneur with a vision to revolutionize national security through AI innovation
            </p>
          </div>

          {/* Story Section */}
          <div className="card-futuristic p-8 mb-12 animate-slide-in-left">
            <h2 className="text-3xl font-bold mb-6 text-primary">My Journey</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                As an HSC candidate from Bangladesh, I've always been fascinated by the intersection of technology and security. 
                While my peers focus on traditional career paths, I'm building something extraordinary - a startup that will 
                redefine how our nation approaches cybersecurity and AI-driven surveillance systems.
              </p>
              <p>
                My journey began with a simple question: "How can technology make our country safer?" This curiosity led me 
                to establish <span className="text-primary font-semibold">Navodesh Tech</span>, where we're developing 
                cutting-edge solutions that combine artificial intelligence with national security infrastructure.
              </p>
              <p>
                Though I'm young, I believe that age is just a number when it comes to innovation. My vision extends beyond 
                just building a company - I want to position Bangladesh as a leader in AI-powered security technologies 
                on the global stage.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="card-futuristic p-8 mb-12 animate-slide-in-right">
            <h2 className="text-3xl font-bold mb-6 text-primary">My Vision</h2>
            <p className="text-lg leading-relaxed mb-6">
              I envision a future where Bangladesh stands at the forefront of AI-driven national security. Through Navodesh Tech, 
              we're creating sophisticated systems that can:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                Provide government-level facial recognition and surveillance systems
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                Develop intelligent dashboards for security agencies
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                Create AI tools that enhance public safety and crime prevention
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                Build scalable solutions that can be exported to other nations
              </li>
            </ul>
          </div>

          {/* Values Section */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div key={index} className="card-futuristic p-6 text-center hover:animate-pulse-glow">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;