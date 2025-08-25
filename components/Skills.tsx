'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-700' },
        { name: 'Next.js', level: 92, color: 'from-gray-800 to-gray-900' },
        { name: 'Vue.js', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'Tailwind CSS', level: 88, color: 'from-cyan-500 to-blue-500' },
        { name: 'GraphQL', level: 82, color: 'from-pink-500 to-purple-500' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 93, color: 'from-green-600 to-green-700' },
        { name: 'Python', level: 88, color: 'from-blue-500 to-indigo-600' },
        { name: 'Java', level: 85, color: 'from-orange-500 to-red-500' },
        { name: 'PostgreSQL', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'MongoDB', level: 87, color: 'from-green-500 to-green-700' },
        { name: 'Redis', level: 83, color: 'from-red-500 to-red-600' },
      ]
    },
    {
      title: 'DevOps & Infrastructure',
      skills: [
        { name: 'Docker', level: 89, color: 'from-blue-500 to-blue-600' },
        { name: 'Kubernetes', level: 82, color: 'from-blue-600 to-indigo-600' },
        { name: 'AWS', level: 86, color: 'from-orange-500 to-yellow-500' },
        { name: 'CI/CD', level: 91, color: 'from-green-500 to-blue-500' },
        { name: 'Terraform', level: 78, color: 'from-purple-500 to-purple-600' },
        { name: 'Monitoring', level: 85, color: 'from-red-500 to-pink-500' },
      ]
    },
    {
      title: 'Architecture & Design',
      skills: [
        { name: 'Microservices', level: 90, color: 'from-indigo-500 to-purple-500' },
        { name: 'System Design', level: 88, color: 'from-blue-500 to-cyan-500' },
        { name: 'API Design', level: 92, color: 'from-green-500 to-teal-500' },
        { name: 'Performance', level: 89, color: 'from-yellow-500 to-orange-500' },
        { name: 'Security', level: 85, color: 'from-red-500 to-red-600' },
        { name: 'Testing', level: 87, color: 'from-emerald-500 to-green-500' },
      ]
    }
  ]

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-800">
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
            Technical Skills
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A comprehensive skill set developed through years of building and scaling 
            enterprise applications. Each skill represents deep expertise and proven 
            experience in production environments.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Expertise
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'Agile Methodologies',
              'Team Leadership',
              'Code Review',
              'Technical Writing',
              'Mentoring',
              'Project Management',
              'Stakeholder Communication',
              'Performance Optimization'
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-white dark:bg-dark-700 rounded-lg border border-gray-200 dark:border-dark-600 text-gray-700 dark:text-gray-300 font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
