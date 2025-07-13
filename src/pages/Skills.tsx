import Navbar from "@/components/Navbar";
import { Users, Mic, Target, Zap, Brain, Shield, Code, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Leadership & Soft Skills",
      icon: <Users className="w-8 h-8 text-primary" />,
      description: "Core entrepreneurial and leadership capabilities",
      skills: [
        { name: "Leadership", level: 95, description: "Leading teams and driving vision" },
        { name: "Vision & Strategy", level: 90, description: "Long-term planning and innovation" },
        { name: "Public Speaking", level: 85, description: "Presenting ideas confidently" },
        { name: "Team Building", level: 88, description: "Creating collaborative environments" },
        { name: "Project Management", level: 82, description: "Managing complex initiatives" },
        { name: "Problem Solving", level: 92, description: "Creative solution development" }
      ]
    },
    {
      title: "AI & Technology Learning",
      icon: <Brain className="w-8 h-8 text-primary" />,
      description: "Current focus areas in artificial intelligence",
      skills: [
        { name: "AI Tools & Platforms", level: 75, description: "DeepSeek, Hugging Face, GPT integration" },
        { name: "Cybersecurity Fundamentals", level: 70, description: "Security principles and practices" },
        { name: "Prompt Engineering", level: 80, description: "Optimizing AI model interactions" },
        { name: "Machine Learning Concepts", level: 65, description: "Understanding ML algorithms" },
        { name: "Computer Vision", level: 60, description: "Image processing and recognition" },
        { name: "Data Analysis", level: 68, description: "Interpreting and visualizing data" }
      ]
    },
    {
      title: "Technical Skills (Learning)",
      icon: <Code className="w-8 h-8 text-primary" />,
      description: "Programming and development skills in progress",
      skills: [
        { name: "Python", level: 45, description: "Core programming for AI/ML" },
        { name: "HTML/CSS", level: 55, description: "Web development fundamentals" },
        { name: "JavaScript", level: 35, description: "Frontend interactivity" },
        { name: "SQL & Databases", level: 40, description: "Data storage and retrieval" },
        { name: "Git & Version Control", level: 50, description: "Code collaboration" },
        { name: "API Integration", level: 42, description: "Connecting systems and services" }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 80) return "from-green-500 to-green-600";
    if (level >= 60) return "from-primary to-primary-glow";
    return "from-yellow-500 to-orange-500";
  };

  const tools = [
    { name: "DeepSeek", category: "AI Platform" },
    { name: "Hugging Face", category: "ML Models" },
    { name: "Python", category: "Programming" },
    { name: "VS Code", category: "Development" },
    { name: "GitHub", category: "Version Control" },
    { name: "Figma", category: "Design" },
    { name: "Notion", category: "Project Management" },
    { name: "Docker", category: "DevOps" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A growing arsenal of skills combining entrepreneurial leadership with cutting-edge technology expertise
            </p>
          </div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-slide-in-left">
                <div className="card-futuristic p-8">
                  <div className="flex items-center gap-4 mb-6">
                    {category.icon}
                    <div>
                      <h2 className="text-2xl font-bold text-primary">{category.title}</h2>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="mt-16 animate-slide-in-right">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">
              Tools & Technologies
            </h2>
            <div className="card-futuristic p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <div key={index} className="text-center p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="text-lg font-semibold">{tool.name}</div>
                    <div className="text-sm text-muted-foreground">{tool.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="mt-16 animate-fade-in-up">
            <div className="card-futuristic p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Continuous Learning Philosophy</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                As a young entrepreneur in the rapidly evolving tech landscape, I believe in the power of continuous learning. 
                Every day brings new opportunities to expand my knowledge in AI, cybersecurity, and business leadership. 
                My goal is not just to keep up with technology trends, but to anticipate and shape the future of national security innovation.
              </p>
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full">
                  <Target className="w-4 h-4" />
                  Always Learning, Always Growing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;