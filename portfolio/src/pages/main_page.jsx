import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, ChevronLeft, ChevronRight, Code, Database, Globe, Smartphone, Server, Palette, ChevronUp, Menu, X } from 'lucide-react';
import my_pic from '../assets/my_pic.jpg'; 
import react from '../assets/react.svg';
import node from '../assets/node.png';
import c from '../assets/c.png';
import firebase from '../assets/firebase.png';
import mongodb from '../assets/mongodb.png';
import mysql from '../assets/mysql.png';
import springboot from '../assets/springboot.png';
import dotnet from '../assets/dotnet.webp';
import js from '../assets/js.png';
import java from '../assets/java.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import rabbitmq from '../assets/rabbitmq.svg';
import tailwind from '../assets/tailwind.png';
import reactnative from '../assets/reactnative.png';
import jest from '../assets/jest.png';
import github from '../assets/github.png';
import express from '../assets/express.png';
import azure from '../assets/azure.png';
import androidstudio from '../assets/androidstudio.png';
import blog_1 from '../assets/blog_1.jpg';
import blog_2 from '../assets/blog_2.jpg';
//import blog_3 from '../assets/blog_3.jpg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
const [isSubmitted, setIsSubmitted] = useState(false);
  // Projects
  const projects = [
    { id: 1, title: 'E-Commerce Platform', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop' },
    { id: 2, title: 'Task Management App', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop' },
    { id: 3, title: 'Weather Dashboard', image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop' },
    { id: 4, title: 'Social Media App', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop' },
    { id: 5, title: 'Analytics Platform', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop' }
  ];

 const techStack = [
  { name: 'React', icon: <img src={react} alt="React" className="w-10 h-10 object-contain mx-auto" /> },
  { name: 'Node.js', icon: <img src={node} alt="Node.js" className="w-10 h-10 object-contain mx-auto" /> },
  { name: 'MongoDB', icon: <img src={mongodb} alt="MongoDB" className="w-20 h-20 object-contain mx-auto" /> },
  { name: 'MySQL', icon: <img src={mysql} alt="MySQL" className="w-20 h-20 object-contain mx-auto" /> },
  { name: 'Spring Boot', icon: <img src={springboot} alt="Spring Boot" className="w-20 h-20 object-contain mx-auto" /> },
  { name: '.NET', icon: <img src={dotnet} alt=".NET" className="w-10 h-10 object-contain mx-auto" /> },
  { name: 'JavaScript', icon: <img src={js} alt="JavaScript" className="w-10 h-10 object-contain mx-auto" /> },
  { name: 'Java', icon: <img src={java} alt="Java" className="w-50 h-50 object-contain mx-auto" /> },
  { name: 'HTML', icon: <img src={html} alt="HTML" className="w-10 h-10 object-contain mx-auto" /> },
  { name: 'CSS', icon: <img src={css} alt="CSS" className="w-10 h-10 object-contain mx-auto" /> },
  { name: 'Firebase', icon: <img src={firebase} alt="Firebase" className="w-10 h-10 object-contain mx-auto" /> },
  { name: 'RabbitMQ', icon: <img src={rabbitmq} alt="RabbitMQ" className="w-30 h-30 object-contain mx-auto" /> },
  { name: 'Tailwind CSS', icon: <img src={tailwind} alt="Tailwind CSS" className="w-10 h-10 object-contain mx-auto" /> },
  { name: 'React Native', icon: <img src={reactnative} alt="React Native" className="w-10 h-10 object-contain mx-auto" /> },
  { name: 'Jest', icon: <img src={jest} alt="Jest" className="w-10 h-10 object-contain mx-auto" /> },
  { name: 'GitHub', icon: <img src={github} alt="GitHub" className="w-10 h-10 object-contain mx-auto" /> },
  { name: 'Express.js', icon: <img src={express} alt="Express.js" className="w-10 h-10 object-contain mx-auto" /> },
  { name: 'Azure', icon: <img src={azure} alt="Azure" className="w-10 h-10 object-contain mx-auto" /> },
  { name: 'Android Studio', icon: <img src={androidstudio} alt="Android Studio" className="w-10 h-10 object-contain mx-auto" /> }
];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          
          // Update active section for navigation
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Scroll event listener for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance project slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setShowMobileMenu(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

   const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);                      
        setFormData({ name: '', email: '', message: '' }); 
        setTimeout(() => {
          setIsSubmitted(false); 
          setIsPopupOpen(false); 
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Lasandi Randini
            </div>
           

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {['home', 'about', 'tech-stack', 'projects', 'experience', 'blogs', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-purple-300 ${
                    activeSection === section ? 'text-purple-300 border-b-2 border-purple-300' : ''
                  }`}
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden text-white hover:text-purple-300 transition-colors duration-300"
            >
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {showMobileMenu && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <div className="flex flex-col space-y-4 mt-4">
                {['home', 'about', 'tech-stack', 'projects', 'experience', 'blogs', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-left transition-all duration-300 hover:text-purple-300 ${
                      activeSection === section ? 'text-purple-300' : ''
                    }`}
                  >
                    {section.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className=" flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
          <div className="animate-pulse">
           
           
         
          {/* <div className="mb-8">
            <div className="w-48 h-48 mx-auto relative group">
              <div className="w-full h-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 transform rotate-12 rounded-3xl absolute animate-pulse"></div>
              <div className="w-full h-full bg-gradient-to-br from-pink-600/30 to-purple-600/30 transform -rotate-12 rounded-3xl absolute animate-pulse delay-1000"></div>
              <img
                src={my_pic}
                alt="Profile"
                className="w-40 h-40 rounded-2xl object-cover absolute top-4 left-4 border-2 border-white/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10"
              />
            </div>
          </div> */}

        
          
        
         
          </div>
         
            <h2
      className={`mt-14 text-6xl font-bold mb-12 text-center bg-gradient-to-r from-purple-800 to-pink-200 bg-clip-text text-transparent transition-all duration-1000 $
         'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      Lasandi Randini
    </h2>
          <p className="text-2xl md:text-2xl mb-8 text-gray-300 animate-slide-up">
            Full Stack Developer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up delay-200">
            Crafting digital experiences with modern technologies and innovative solutions. Passionate about building scalable applications that make a difference.
          </p>
          <div className="flex justify-center space-x-6 mb-12 animate-slide-up delay-300">
            <a href="https://github.com/LasandiRandini" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/lasandirandini/" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="kh.lasandirandini@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-white/60 hover:text-white transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={`text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            About Me
          </h2>
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${
            isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I’m a passionate software developer with 1+ year of experience.
               I’ve worked on full-stack projects using like React for the frontend and Node.js, Spring Boot, and .NET for the backend. I enjoy building clean, responsive UIs and delivering user-focused solutions.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
               I’m also interested in AI and always stay updated with the latest tech trends. I love crafting modern, interactive interfaces and continuously improving my skills to build better, smarter applications.
              </p>
              <div className="flex space-x-4">
                <span className="px-2 py-2 bg-purple-600/30 rounded-full text-sm">Problem Solver</span>
                <span className="px-4 py-2 bg-pink-600/30 rounded-full text-sm">Team Player</span>
                <span className="px-4 py-2 bg-blue-600/30 rounded-full text-sm">Innovation Focused</span>
              </div>
            </div>
                   
            
            <div className="relative">
              <div className="w-80 h-80 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-500">
                <img
                  src={my_pic}
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">Lasandi Randini</h3>
                  {/* <p className="text-purple-300">Full Stack Developer</p> */}
                </div>
              </div>
            </div>
           

           
           
          
          </div>
        </div>
      </section>

   {/* Tech Stack Section */}
<section id="tech-stack" className="py-20">
  <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
    <h2
      className={`text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
        isVisible['tech-stack'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      Tech Stack
    </h2>

    <div
      className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-7 transition-all duration-1000 delay-300 ${
        isVisible['tech-stack'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y'
      }`}
    >
      {techStack.map((tech, index) => (
        <div
          key={tech.name}
          className={`group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/10 animate-fade-in flex flex-col items-center`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="w-12 h-12 mb-4 flex items-center justify-center">
            {tech.icon}
          </div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 text-center">
            {tech.name}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-6 ">
          <h2 className={`text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Featured Projects
          </h2>
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative h-96 rounded-2xl overflow-hidden group">
              <img
                src={projects[currentProjectIndex].image}
                alt={projects[currentProjectIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold mb-2">{projects[currentProjectIndex].title}</h3>
                <p className="text-gray-300">Click to view project details</p>
              </div>
              <button
                onClick={prevProject}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProjectIndex ? 'bg-purple-400 scale-125' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={`text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Experience
          </h2>
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { role: 'Senior Software Engineer', company: 'TechCorp Inc.', period: '2022 - Present', description: 'Led development of microservices architecture serving 1M+ users' },
              { role: 'Full Stack Developer', company: 'StartupXYZ', period: '2020 - 2022', description: 'Built and maintained React/Node.js applications with 99.9% uptime' },
              { role: 'Software Developer', company: 'DevSolutions', period: '2019 - 2020', description: 'Developed mobile applications using React Native and Flutter' }
            ].map((exp, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-purple-300 mb-2">{exp.role}</h3>
                <p className="text-gray-300 mb-2">{exp.company} • {exp.period}</p>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Blogs Section */}
<section id="blogs" className="py-20 bg-black/20">
  <div className="max-w-6xl mx-auto px-6">
    <h2
      className={`text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
        isVisible.blogs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      Latest Blogs
    </h2>
    <div
      className={`grid md:grid-cols-3 gap-8  transition-all duration-1000 delay-300 ${
        isVisible.blogs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {[
        {
          title: 'AI-Powered Code Generation and Development Tools',
          date: 'May 2025',
          readTime: '2 min read',
          link: 'https://medium.com/@kh.lasandirandini/ai-powered-code-generation-and-development-tools-fa04bd400cad',
          image: blog_1
        },
        {
          title: 'Modern JavaScript Best Practices',
          date: 'February 2024',
          readTime: '8 min read',
          link: 'https://medium.com/@yourusername/modern-js-best-practices',
          image: blog_2
        },
        {
          title: 'Microservices with Node.js',
          date: 'January 2024',
          readTime: '12 min read',
          link: 'https://medium.com/@yourusername/microservices-nodejs',
          image: null 
        }
      ].map((blog, index) => (
        <a
          key={index}
          href={blog.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group"
        >
          <div className="w-full h-40 rounded-xl mb-4 overflow-hidden">
            {blog.image ? (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300">
                <ExternalLink className="w-8 h-8 text-purple-300" />
              </div>
            )}
          </div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-purple-300 transition-colors duration-300">
            {blog.title}
          </h3>
          <p className="text-gray-400 text-sm">
            {blog.date} • {blog.readTime}
          </p>
        </a>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={`text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Get In Touch
          </h2>
          <div className={`text-center transition-all duration-1000 delay-300 ${
            isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            <div className="flex justify-center space-x-8 mb-12">
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-purple-300 transition-colors duration-300 hover:scale-105 transform">
                <Mail className="w-6 h-6" />
                <span>kh.lasandirandini@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/lasandirandini/" className="flex items-center space-x-3 text-gray-300 hover:text-purple-300 transition-colors duration-300 hover:scale-105 transform">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/LasandiRandini" className="flex items-center space-x-3 text-gray-300 hover:text-purple-300 transition-colors duration-300 hover:scale-105 transform">
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
            </div>
            <button onClick={() => setIsPopupOpen(true)} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full text-white font-semibold transition duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Let's Connect
            </button>
          </div>
        </div>
      </section>


      
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="block bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group">
            <button onClick={() => setIsPopupOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
              <X />
            </button>
            <h3 className="text-xl font-bold mb-4 text-purple-600">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              {/* <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded">
                Send
              </button> */}
                <button
                type="submit"
                className={`w-full font-semibold py-2 rounded transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-600 text-white cursor-default'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}
                disabled={isSubmitted}
              >
                {isSubmitted ? 'Message Sent ✓' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      )}
     
      {/* <footer className="py-8 bg-black/40 text-center">
        <p className="text-gray-400">© 2025 . Built with React & Tailwind CSS</p>
      </footer> */}

      {/* Floating Navigation Elements */}
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-4 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 transform z-40 animate-bounce"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Section Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'tech-stack', label: 'Tech Stack' },
            { id: 'projects', label: 'Projects' },
            { id: 'experience', label: 'Experience' },
            { id: 'blogs', label: 'Blogs' },
            { id: 'contact', label: 'Contact' }
          ].map((section) => (
            <div key={section.id} className="relative group">
              <button
                onClick={() => scrollToSection(section.id)}
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-purple-400 border-purple-400 scale-125'
                    : 'border-white/40 hover:border-purple-400 hover:bg-purple-400/20'
                }`}
              />
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {section.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="fixed left-8 bottom-8 z-40 hidden md:block">
        <div className="flex flex-col space-y-4">
          <a
            href="mailto:john@example.com"
            className="bg-black/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-purple-600/20 hover:scale-110 transition-all duration-300 border border-white/10 hover:border-purple-400/50 group"
            title="Send Email"
          >
            <Mail className="w-5 h-5 group-hover:text-purple-300" />
          </a>
          <a
            href="#"
            className="bg-black/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-purple-600/20 hover:scale-110 transition-all duration-300 border border-white/10 hover:border-purple-400/50 group"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 group-hover:text-purple-300" />
          </a>
          <a
            href="#"
            className="bg-black/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-purple-600/20 hover:scale-110 transition-all duration-300 border border-white/10 hover:border-purple-400/50 group"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5 group-hover:text-purple-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;