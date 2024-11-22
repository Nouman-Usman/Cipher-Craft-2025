"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Team() {
  const teamMembers = [
    { name: "Jane Doe", role: "Organizer", image: "/placeholder.svg" },
    { name: "John Smith", role: "Technical Lead", image: "/placeholder.svg" },
    { name: "Alice Johnson", role: "Design Lead", image: "/placeholder.svg" },
    { name: "Bob Williams", role: "Marketing Lead", image: "/placeholder.svg" },
  ]

  return (
    <section id="team" className="py-20 md:py-32">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-500 dark:text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            The passionate individuals behind CipherCraft
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {member.name}
              </motion.h3>
              <motion.p 
                className="text-neutral-500 dark:text-neutral-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {member.role}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

