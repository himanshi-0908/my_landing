'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Phone, ExternalLink, Activity,GraduationCap, Calendar, MapPin, Award, Code, Database, Leaf, Cpu, Wrench, Download, Moon, Sun, ChevronDown, ArrowRight, Star, Users, Trophy, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'



export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [typedText, setTypedText] = useState('')
  const [currentRole, setCurrentRole] = useState(0)

  const roles = [
    'Full Stack Developer',
    'AI/ML Engineer', 
    'IoT Specialist',
    'Blockchain Developer'
  ]

  // Typing animation effect
  useEffect(() => {
    const role = roles[currentRole]
    let index = 0
    const timer = setInterval(() => {
      if (index <= role.length) {
        setTypedText(role.slice(0, index))
        index++
      } else {
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length)
          setTypedText('')
        }, 2000)
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [currentRole])

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'Python', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'AI/ML', level: 85 },
    { name: 'IoT/MQTT', level: 82 },
    { name: 'Blockchain', level: 78 }
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'}`}>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-lg border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
  <img
    src="/img1.png"  // replace this with your image path or URL
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>


              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Himanshi</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 relative ${
                    activeSection === section
                      ? 'text-blue-600 font-semibold'
                      : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleDarkMode}
                className={`${darkMode ? 'border-gray-600 text-gray-300' : 'border-gray-300'}`}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <a href="/resume.pdf" download>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Download className="w-4 h-4 mr-2" />
               Resume
              </Button>
              </a>

            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="about" className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in-up">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm font-medium text-blue-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Available for opportunities</span>
                  </div>
                  
                  <h1 className={`text-6xl lg:text-7xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} leading-tight`}>
                    Hi, I'm{' '}
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Himanshi
                    </span>
                  </h1>
                  
                  <div className="text-2xl lg:text-3xl font-semibold h-12">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {typedText}
                      <span className="animate-pulse">|</span>
                    </span>
                  </div>
                  
                  <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl leading-relaxed`}>
                    Passionate about building innovative solutions with AI, IoT, and modern web technologies. 
                    I create scalable applications that solve real-world problems and drive digital transformation.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={() => scrollToSection('projects')} 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    View My Work
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => scrollToSection('contact')}
                    className={`px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-50'}`}
                  >
                    Get In Touch
                  </Button>
                </div>

                <div className="flex items-center space-x-6 pt-4">
                  {[
                    { icon: Github, href: 'https://github.com/himanshi0908', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://linkedin.com/in/himanshi1rana', label: 'LinkedIn' },
                    { icon: Mail, href: 'mailto:himanshiabesit@gmail.com', label: 'Email' }
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-50'} shadow-md`}
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-8xl font-bold text-white shadow-2xl animate-float">
                    H
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute top-10 -left-10 animate-bounce-slow">
                  <Card className={`p-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg`}>
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      <div>
                        <div className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>2+ Years</div>
                        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Experience</div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="absolute bottom-10 -right-10 animate-bounce-slow animation-delay-1000">
                  <Card className={`p-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg`}>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-blue-500" />
                      <div>
                        <div className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>10+ Projects</div>
                        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Completed</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Professional Journey
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Building innovative solutions and driving technological advancement
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
              
              <div className="space-y-12">
                <div className="relative flex items-start space-x-8 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  
                  <Card className={`flex-1 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className={`text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Full Stack Developer
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-blue-600">
                            Boolean Microsystems (Remote)
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          June 2025 - July 2025
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Developed real-time MQTT-based IoT Dashboard with 99.9% uptime</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Implemented scalable backend architecture handling 10K+ concurrent connections</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Built responsive dashboard reducing data visualization load time by 60%</span>
                        </li>
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {['Python', 'PostgreSQL', 'React.js', 'TypeScript', 'MQTT'].map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative flex items-start space-x-8 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  
                  <Card className={`flex-1 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className={`text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            AI Product Intern
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-purple-600">
                            DRIFKO (Remote)
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Nov 2023 – Oct 2024
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Achieved 25% model accuracy improvement using advanced TensorFlow techniques</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Increased user engagement by 20% through data-driven A/B testing</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Led cross-functional collaboration with 5+ engineering teams</span>
                        </li>
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {['Python', 'TensorFlow', 'A/B Testing', 'Data Analysis'].map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Enhanced Projects Section */}
<section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Featured Projects
      </h2>
      <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
        Innovative solutions that showcase my technical expertise and problem-solving abilities
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {[
        {
          title: 'Vani_AI',
          description: 'Real-time speech-to-speech translation across multiple Indian languages with 95% accuracy rate.',
          tech: ['React', 'TypeScript', 'Google Cloud', 'Speech API'],
          icon: Code,
          color: 'from-blue-500 to-cyan-500',
          metrics: ['95% Accuracy', '12 Languages', '< 2s Latency'],
          link: 'https://vani-ai-teal.vercel.app/'
        },
        {
          title: 'IoT Device Management',
          description: 'MQTT-based system managing 1000+ IoT devices with real-time monitoring and predictive analytics.',
          tech: ['MQTT', 'Python', 'PostgreSQL', 'IoT'],
          icon: Database,
          color: 'from-green-500 to-emerald-500',
          metrics: ['1000+ Devices', '99.9% Uptime', 'Real-time Analytics']
        },
        {
          title: 'AI Fitness Suite',
          description: 'Computer vision-powered fitness tracking with pose detection and personalized AI coaching.',
          tech: ['AI/ML', 'MediaPipe', 'OpenCV', 'Mobile'],
          icon: Cpu,
          color: 'from-purple-500 to-pink-500',
          metrics: ['98% Pose Accuracy', '50+ Exercises', 'AI Coaching']
        },
        {
          title: 'Agri_AI',
          description: 'AI-powered smart farming system that helps farmers detect crop diseases, analyze soil quality, recommend suitable crops, provide expense tracker, and shopping options for tools and seeds.',
          tech: ['React', 'Python', 'TensorFlow', 'Flask', 'Google AI', 'Numpy', 'Scikit-Learn', 'Machine-Learning'],
          icon: Leaf,
          color: 'from-green-600 to-lime-500',
          metrics: ['98% Detection Accuracy', 'Real-time Monitoring', 'Multi-Crop Support'],
          link: 'https://agri-ai-yeum.vercel.app/'
        },
        {
          title: 'MediPredict_AI',
          description: 'AI-powered health analyzer that predicts the risk of heart disease and diabetes using ML models with high accuracy.',
          tech: ['Python', 'scikit-learn', 'Streamlit', 'Pandas'],
          icon: Activity, 
          color: 'from-pink-500 to-red-500',
          metrics: ['92% Accuracy', '2 Disease Models', 'Real-time Results'],
          link: 'https://diseasespred-web.streamlit.app/'
        }, 
        {
          title: 'LearnWise_AI',
          description: 'Personalized AI learning companion offering tailored quizzes, coding help, and real-time explanations for students across all levels.',
          tech: ['JavaScript', 'Gemini API', 'HTML/CSS', 'Google Colab'],
          icon: GraduationCap,
          color: 'from-indigo-500 to-purple-600',
          metrics: ['Instant Feedback', 'Multi-bot System', 'Adaptive Learning']
        }
      ].map((project, index) => (
        <Card 
          key={project.title} 
          className={`group ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden`}
        >
          <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
          
          <CardHeader className="relative">
            <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <project.icon className="w-6 h-6 text-white" />
            </div>
            
            <CardTitle className={`text-xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600 transition-colors duration-300`}>
              {project.title}
            </CardTitle>
            <CardDescription className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
              {project.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-2 text-center">
              {project.metrics.map((metric, i) => (
                <div key={i} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className={`text-xs font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {metric}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="flex space-x-2 pt-2">
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1"
                >
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </a>
              )}
              {/* <Button variant="outline" size="sm" className="flex-1">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button> */}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


     
              
              

                
                
              

      {/* Enhanced Skills Section */}
      <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Technical Expertise
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Proficient in cutting-edge technologies and frameworks
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Skills Progress */}
              <div className="space-y-8">
                <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Core Competencies
                </h3>
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                      style={{
                        animationDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Tech Stack Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    title: 'Frontend',
                    icon: Code,
                    color: 'from-blue-500 to-cyan-500',
                    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS']
                  },
                  {
                    title: 'Backend',
                    icon: Database,
                    color: 'from-green-500 to-emerald-500',
                    skills: ['Python', 'Node.js', 'PostgreSQL', 'MongoDB']
                  },
                  {
                    title: 'AI/ML',
                    icon: Cpu,
                    color: 'from-purple-500 to-pink-500',
                    skills: ['TensorFlow', 'OpenCV', 'NumPy', 'Pandas']
                  },
                  {
                    title: 'DevOps',
                    icon: Wrench,
                    color: 'from-orange-500 to-red-500',
                    skills: ['Git', 'Docker', 'AWS', 'Firebase']
                  }
                ].map((category) => (
                  <Card key={category.title} className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                    <CardHeader className="text-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className={`text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can work together.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email', value: 'himanshiabesit@gmail.com', href: 'mailto:himanshiabesit@gmail.com' },
                    { icon: Phone, label: 'Phone', value: '+91 9410219642', href: 'tel:+919410219642' },
                    { icon: MapPin, label: 'Location', value: 'Ghaziabad, India', href: '#' }
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-blue-100">{label}</div>
                        <div className="text-white font-medium">{value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: 'https://github.com/himanshi0908', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://linkedin.com/in/himanshi1rana', label: 'LinkedIn' }
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                      aria-label={label}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </a>
                  ))}
                </div>
              </div>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/40 resize-none"
                  ></textarea>
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3">
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
     
    </div>
  )
}
