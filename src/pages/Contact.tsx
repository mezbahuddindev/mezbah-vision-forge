import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      value: "info@mezbahuddindev.online",
      link: "mailto:info@mezbahuddindev.online"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      value: "01875224445",
      link: "tel:+8801875224445"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "#",
      color: "hover:text-gray-400"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      url: "https://www.facebook.com/share/1CNLy19Jix/",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              Let's Connect
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss opportunities, partnerships, or innovative ideas? I'm always open to meaningful conversations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-8 text-primary">Get In Touch</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 card-futuristic hover:scale-105 transition-transform"
                  >
                    {info.icon}
                    <div>
                      <div className="font-semibold">{info.title}</div>
                      <div className="text-muted-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="card-futuristic p-6">
                <h3 className="text-xl font-bold mb-4">Follow My Journey</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-secondary rounded-lg ${social.color} transition-colors hover:scale-110 transform`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 card-futuristic p-6 bg-gradient-to-r from-primary/10 to-primary-glow/10">
                <h3 className="text-xl font-bold mb-2">Looking for Collaboration?</h3>
                <p className="text-muted-foreground mb-4">
                  Whether you're an investor, government agency, tech partner, or fellow entrepreneur, 
                  I'm always interested in discussing innovative solutions for national security and AI advancement.
                </p>
                <div className="text-primary font-semibold">
                  • Investment Opportunities
                </div>
                <div className="text-primary font-semibold">
                  • Partnership Proposals
                </div>
                <div className="text-primary font-semibold">
                  • Speaking Engagements
                </div>
                <div className="text-primary font-semibold">
                  • Mentorship & Guidance
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="card-futuristic p-8">
                <h2 className="text-3xl font-bold mb-6 text-primary">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                      placeholder="Tell me about your project, idea, or how we can collaborate..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-hero w-full inline-flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Response Time Notice */}
          <div className="mt-12 text-center animate-fade-in-up">
            <div className="card-futuristic p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold mb-2">Response Time</h3>
              <p className="text-muted-foreground">
                I typically respond to all inquiries within 24 hours. For urgent matters, 
                please feel free to call directly or mention "URGENT" in your subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;