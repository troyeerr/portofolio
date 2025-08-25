'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Globe, Users, Zap, Database } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      title: 'Enterprise E-commerce Platform',
      description: 'Scalable e-commerce solution serving 2M+ users with real-time inventory management, payment processing, and analytics dashboard.',
      image: '/images/projects/breitling.png',
      category: ['enterprise', 'cms'],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Web3', 'GraphQL'],
      features: ['Microservices Architecture', 'Real-time Analytics', 'Payment Integration', 'Inventory Management'],
      metrics: {
        users: '2M+',
        performance: '99.9%',
        scale: 'High'
      },
      links: {
        live: 'https://www.breitling.com/si-en/?srsltid=AfmBOoq5XfvtkonzPysMmvJZBBIFCH5TwY1BOFuE2tjXjP3W70ZaHDHe',
        github: '#'
      },
      impact: 'High'
    },
    {
      title: 'Real-time Crypto Data Analytics Dashboard',
      description: 'Advanced analytics platform processing 100K+ data points per second with interactive visualizations and machine learning insights.',
      image: '/images/projects/tokenmetrics.png',
      category: ['analytics'],
      technologies: ['Next.js', 'Python', 'MongoDB', 'Apache Kafka', 'TensorFlow', 'Docker'],
      features: ['Real-time Processing', 'ML Integration', 'Interactive Charts', 'Data Pipeline'],
      metrics: {
        users: '50K+',
        performance: '99.5%',
        scale: 'Medium'
      },
      links: {
        live: 'https://www.tokenmetrics.com/',
        github: '#'
      },
      impact: 'High'
    },
    {
      title: 'Finance Management System',
      description: 'Comprehensive healthcare platform managing patient records, appointments, and medical workflows with HIPAA compliance.',
      image: '/images/projects/heron.png',
      category: ['finance'],
      technologies: ['React', 'Java', 'PostgreSQL', 'Spring Boot', 'Docker', 'Azure'],
      features: ['HIPAA Compliance', 'Patient Management', 'Appointment Scheduling', 'Secure API'],
      metrics: {
        users: '100K+',
        performance: '99.8%',
        scale: 'Medium'
      },
      links: {
        live: 'http://heron.ai/',
        github: '#'
      },
      impact: 'High'
    },
    {
      title: 'Social Trading Data Platform',
      description: 'High-frequency trading platform with real-time market data, algorithmic trading capabilities, and risk management systems.',
      image: '/images/projects/koat.png',
      category: ['analytics'],
      technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'Docker'],
      features: ['Real-time Trading', 'Risk Management', 'Algorithmic Trading', 'Market Data'],
      metrics: {
        users: '10K+',
        performance: '99.99%',
        scale: 'High'
      },
      links: {
        live: 'https://taapi.io/',
        github: '#'
      },
      impact: 'High'
    },
    {
      title: 'Technical Analysis API',
      description: 'Modern CMS with headless architecture, multi-tenant support, and advanced content workflow management.',
      image: '/images/projects/taapi.png',
      category: ['analytics'],
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'GraphQL', 'Docker', 'AWS'],
      features: ['Headless CMS', 'Multi-tenant', 'Workflow Management', 'API-first'],
      metrics: {
        users: '200K+',
        performance: '99.7%',
        scale: 'Medium'
      },
      links: {
        live: 'https://taapi.io/',
        github: '#'
      },
      impact: 'Medium'
    },
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'enterprise', label: 'Enterprise' },
    { key: 'analytics', label: 'Analytics' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'finance', label: 'Finance' },
    { key: 'cms', label: 'CMS' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'from-green-500 to-emerald-500'
      case 'Medium': return 'from-blue-500 to-cyan-500'
      case 'Low': return 'from-gray-500 to-slate-500'
      default: return 'from-gray-500 to-slate-500'
    }
  }

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A showcase of complex, scalable applications that demonstrate expertise in 
            system architecture, performance optimization, and business value delivery.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600 border border-gray-200 dark:border-dark-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-dark-900 rounded-xl shadow-lg border border-gray-200 dark:border-dark-700 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-700 dark:to-dark-600 overflow-hidden">
                {/* Project Image with Next.js Image component */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index < 2} // Prioritize first 2 images
                  quality={85}
                  onError={(e) => {
                    console.warn(`Failed to load image: ${project.image}`);
                  }}
                />
                
                {/* Fallback content (hidden by default, shows if image fails) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-8 bg-white/90 dark:bg-dark-800/90 rounded-lg">
                    <div className="w-16 h-16 bg-primary-200 dark:bg-primary-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Database className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                      {project.title}
                    </p>
                  </div>
                </div>
                
                {/* Impact Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${getImpactColor(project.impact)} text-white text-xs font-medium z-10 shadow-lg`}>
                  {project.impact} Impact
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/90 dark:bg-dark-800/90 px-4 py-2 rounded-lg shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      View Project
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs rounded border border-gray-200 dark:border-dark-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-dark-700">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {project.metrics.users}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {project.metrics.performance}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      {project.metrics.scale}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Scale</div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-dark-700">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <Globe className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200 border border-gray-200 dark:border-dark-600"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in seeing more of my work or discussing a potential collaboration?
          </p>
          <a href="#contact" className="btn-primary">
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
