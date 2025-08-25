'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Award, TrendingUp, Target } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      number: '8+',
      label: 'Years Experience',
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: '50+',
      label: 'Projects Delivered',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      number: '15+',
      label: 'Team Members Led',
    },
    {
      icon: <Target className="w-6 h-6" />,
      number: '99.9%',
      label: 'Uptime Achieved',
    },
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

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a seasoned Full Stack Developer with over 8 years of experience 
                architecting and delivering enterprise-scale applications. My expertise 
                spans the entire technology stack, from frontend frameworks to backend 
                services, AI and web3 integration, and infrastructure.
              </p>
              <p>
                I specialize in building scalable, maintainable systems that handle 
                millions of users while maintaining exceptional performance. My approach 
                combines technical excellence with strategic thinking, ensuring that 
                every solution not only works flawlessly but also drives business value.
              </p>
              <p>
                As a technical leader, I've mentored development teams, established 
                coding standards, and implemented best practices that have improved 
                development velocity and code quality across multiple organizations.
              </p>
            </div>

            {/* Key Strengths */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Strengths
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'System Architecture Design',
                  'Performance Optimization',
                  'Team Leadership',
                  'Code Quality Standards',
                  'Agile Development',
                  'Cloud Infrastructure',
                  'Security Best Practices',
                  'Technical Documentation'
                ].map((strength, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>{strength}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Image */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gray-50 dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-3 text-primary-600 dark:text-primary-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Professional Image Placeholder */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-primary-200 dark:bg-primary-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                      SM
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Professional Photo
                  </p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
