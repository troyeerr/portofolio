'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building, Users, TrendingUp } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      company: 'Sidebench',
      position: 'Senior Full Stack Developer',
      duration: '2022 - 2025',
      location: 'Santa Monica, CA',
      description: 'Leading development of enterprise-scale applications serving 2M+ users. Architecting microservices infrastructure and mentoring junior developers.',
      achievements: [
        'Reduced API response time by 60% through optimization and caching strategies',
        'Led migration from monolithic to microservices architecture',
        'Built and deployed a decentralized, intelligent system for managing and optimizing AI models',
        'Implemented CI/CD pipeline reducing deployment time by 80%',
        'Mentored 8 junior developers and established coding standards'
      ],
      technologies: ['Next.js', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS', 'Kubernetes', 'LLM', 'Web3'],
      impact: 'High'
    },
    {
      company: 'Cognizant',
      position: 'Full Stack Developer',
      duration: '2020 - 2022',
      location: 'Teaneck, New Jersey',
      description: 'Developed scalable web applications and REST APIs. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Built real-time dashboard processing 100K+ data points per second',
        'Designed and implemented RESTful APIs serving 500K+ requests daily',
        'Improved application performance by 40% through code optimization',
        'Collaborated with UX team to implement responsive design patterns'
      ],
      technologies: ['React.js', 'Python', 'MongoDB', 'Redis', 'Docker', 'Jenkins'],
      impact: 'High'
    },
    {
      company: 'Pretius',
      position: 'Frontend Developer',
      duration: '2018 - 2020',
      location: 'Warsaw, Poland',
      description: 'Focused on creating intuitive user interfaces and improving user experience. Worked closely with designers and backend developers.',
      achievements: [
        'Developed responsive web applications using modern JavaScript frameworks',
        'Implemented state management solutions for complex applications',
        'Optimized frontend performance and accessibility',
        'Collaborated with design team to create component library'
      ],
      technologies: ['React', 'TypeScript', 'Redux', 'Sass', 'Webpack', 'Jest'],
      impact: 'Medium'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="experience" className="section-padding bg-white dark:bg-dark-900">
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
            Professional Experience
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A proven track record of delivering high-impact solutions and leading 
            development teams across various industries and company sizes.
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-12 bg-gray-200 dark:bg-dark-700"></div>
              )}

              <div className="flex gap-8">
                {/* Timeline Dot */}
                <div className="relative">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${getImpactColor(exp.impact)} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {exp.impact === 'High' ? <TrendingUp className="w-6 h-6" /> : 
                     exp.impact === 'Medium' ? <Users className="w-6 h-6" /> : 
                     <Building className="w-6 h-6" />}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mt-1">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-dark-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Highlights */}
        <motion.div
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Career Highlights
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Leadership',
                description: 'Led development teams of 5-15 members across multiple projects',
                icon: <Users className="w-8 h-8" />
              },
              {
                title: 'Scale',
                description: 'Built applications serving millions of users with 99.9% uptime',
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                title: 'Innovation',
                description: 'Introduced modern development practices and architectural patterns',
                icon: <Building className="w-8 h-8" />
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50 dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-600 dark:text-primary-400">
                  {highlight.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
