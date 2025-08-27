import React, { useState, useEffect, useRef } from 'react';
import amanImg from './aman.jpg';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Menu, X, Code, Briefcase, User, MessageSquare, MapPin, Calendar, Award } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState('programming');
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load EmailJS script on component mount
  useEffect(() => {
    const loadEmailJS = () => {
      if (!window.emailjs) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.async = true;
        script.onload = () => {
          // Initialize EmailJS with your public key
          window.emailjs.init("EBsqYTnXDwYKD7Jbh");
        };
        document.head.appendChild(script);
      }
    };

    loadEmailJS();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMenuOpen(false);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Check if EmailJS is loaded
      if (!window.emailjs) {
        throw new Error('EmailJS not loaded. Please try again.');
      }

      // Send email using the form reference
      const result = await window.emailjs.sendForm(
        'service_rcnfbcb',   // Your Service ID
        'template_56o2f3l',  // Your Template ID
        formRef.current,     // The form reference
        'EBsqYTnXDwYKD7Jbh'  // Your Public Key
      );

      console.log('Email sent successfully:', result);
      alert('Message sent successfully! I will get back to you soon.');
      formRef.current.reset();
      
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try emailing me directly at amankumar005562@gmail.com');
    } finally {
      setIsSending(false);
    }
  };

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack web application built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and real-time inventory management.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/AKDev32/E-Commerce-Website",
      demo: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for analyzing business metrics with dynamic charts, filters, and real-time data updates.",
      tech: ["React", "Node.js", "Express.js", "Rest API"],
      github: "https://github.com/AKDev32/data-visualizer-dashboard",
      demo: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
    },
    {
      title: "Algorithms Visualizer",
      description: "Built an interactive Algorithm Visualizer in Java that demonstrates sorting algorithms like Bubble Sort, Merge Sort, and Quick Sort with real-time animations. Implemented multithreading to ensure smooth and concurrent visualization, making complex concepts easier to understand.",
      tech: ["Java", "Java Swing", "Multithreading"],
      github: "https://github.com/AKDev32/Algorithm-Visualizer",
      demo: "#",
      image: "https://panthema.net/2013/sound-of-sorting/thumb.gif"
    },
    {
      title: "Hangman Game",
      description: "The Hangman game is a classic word-guessing puzzle where players try to guess a hidden word by suggesting letters within a limited number of attempts. Each wrong guess adds a part to the hangman figure until the game is won or lost.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/AKDev32/Hangman-Game",
      demo: "#",
      image: "https://easyshiksha.com/online_courses/assets/games/hangman/1.png"
    }
  ];

  const skillCategories = {
    programming: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 }
    ],
    frontend: [
      { name: "React", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 88 }
    ],
    backend: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 }
    ],
    database : [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 88 }
    ]
  };

  const experiences = [
    {
      title: "Open Source-Contributor",
      company: "GirlScript Summer of Code(GSSoC)",
      location: "Delhi, IND",
      period: "July, 2025 - Present",
      type: "Part-time",
      description: "Lead development of scalable web applications using MERN stack. Mentored junior developers and implemented best practices for code quality and performance optimization.",
      achievements: [
        "Contributed clean, maintainable JavaScript code to the CodeClip project",
        "Resolved key frontend issues and enhanced overall project functionality",
        "Collaborated with maintainers and global contributors to drive impactful improvements",
        "Improved code quality, user experience, and project performance through effective contributions",
        "Strengthened expertise in collaborative development and version control using Git and GitHub",
        "Selected as an official contributor from a large pool of applicants, showcasing technical excellence"
      ],
      technologies: ["React", "JavaScript", "Github", "Git"]
    },
    {
      title: "MERN Developer",
      company: "Excellence Technology",
      location: "Chandhigarh, PB",
      period: "June, 2025 - August, 2025",
      type: "Full-time",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design team to create responsive and user-friendly interfaces.",
      achievements: [
        "Developed full-stack web applications using the MERN stack",
        "Designed and integrated RESTful APIs with JWT-based authentication",
        "Collaborated in an agile development environment, participating in sprints and code reviews",
        "Utilized Git and GitHub for version control and efficient team workflows",
        "Delivered production-ready features that improved application performance and scalability",
        "Gained hands-on experience in professional software development practices"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Git"]
    }
  ];

  const skillCategoryNames = {
    programming: "Programming Languages",
    frontend: "Frontend Technologies",
    backend: "Backend Technologies",
    database: "Databases & Tools"
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Aman's Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-400 transition-colors duration-200 ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 capitalize text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <img
              src={amanImg}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Aman Kumar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Software Engineer & Full-Stack MERN Developer 
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            I build powerful web applications with the MERN stack. Specializing in software development, I design solutions that are efficient, scalable, and user-focused.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/AKDev32" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/aman32" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:amankumar005562@gmail.com" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Mail size={28} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <User className="text-blue-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold">My Story</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with hands-on experience in building 
                scalable web applications using the MERN stack. My journey began with a 
                curiosity about how technology shapes the world, and it has grown into 
                a strong drive to create impactful digital solutions that blend performance 
                with exceptional user experience.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Beyond coding, I love exploring emerging technologies, contributing to 
                open-source projects, and continuously sharpening my problem-solving skills. 
                I believe in writing clean, maintainable code and collaborating effectively 
                in fast-paced environments to deliver real-world results.
              </p>

              
              <div className="flex items-center mb-6">
                <Code className="text-blue-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold">Skills & Expertise</h3>
              </div>
              
              {/* Skill Category Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                {Object.keys(skillCategories).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveSkillCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSkillCategory === category
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {skillCategoryNames[category]}
                  </button>
                ))}
              </div>
              
              {/* Skills Display */}
              <div className="grid grid-cols-1 gap-4">
                {skillCategories[activeSkillCategory].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
                <div className="h-full flex flex-col justify-center items-center text-center space-y-8">
                  <div className="grid grid-cols-2 gap-8 w-full">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
                      <div className="text-sm text-gray-400">Problem-Solving(DSA)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-400 mb-2">5+</div>
                      <div className="text-sm text-gray-400">Open Source Contributions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">1</div>
                      <div className="text-sm text-gray-400">Hackathons/ Competitions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400 mb-2">2</div>
                      <div className="text-sm text-gray-400">Team Projects/ Collaboration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                      <div className="text-sm text-gray-400">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">3</div>
                      <div className="text-sm text-gray-400">Technical Certifications</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Award className="text-blue-400 mr-3" size={32} />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Professional Experience
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              My professional journey and the experiences that have shaped my career as a developer.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>
            
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-gray-900 z-10"></div>
                  
                  {/* Experience Card */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                            {experience.title}
                          </h3>
                          <p className="text-blue-400 font-medium">{experience.company}</p>
                        </div>
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          experience.type === 'Full-time' 
                            ? 'bg-green-400/10 text-green-400 border border-green-400/20' 
                            : 'bg-orange-400/10 text-orange-400 border border-orange-400/20'
                        }`}>
                          {experience.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-400 text-sm mb-4 space-x-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {experience.location}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {experience.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Achievements:</h4>
                        <ul className="text-gray-400 text-sm space-y-1">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <span className="text-blue-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs bg-blue-400/10 text-blue-400 rounded border border-blue-400/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="text-blue-400 mr-3" size={32} />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video bg-gray-700 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-3">
                      <a href={project.github} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                        <Github size={20} />
                      </a>
                      <a href={project.demo} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-blue-400/10 text-blue-400 rounded-full border border-blue-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <MessageSquare className="text-blue-400 mr-3" size={32} />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Let's Connect
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4">
              Ready to start your project? Let's discuss how we can work together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">amankumar005562@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center">
                    <Linkedin className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <p className="text-white">linkedin.com/in/aman32</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center">
                    <Github className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <p className="text-white">github.com/AKDev32</p>
                  </div>
                </div>
              </div>
            </div>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200 text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200 text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200 text-white"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200 text-white resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Aman Kumar
              </div>
              <p className="text-gray-400 leading-relaxed">
                Passionate full-stack developer creating innovative web solutions 
                with the MERN stack. Let's build something amazing together.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/AKDev32" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500 transition-all duration-200"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/aman32" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500 transition-all duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:amankumar005562@gmail.com"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500 transition-all duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Aman Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;