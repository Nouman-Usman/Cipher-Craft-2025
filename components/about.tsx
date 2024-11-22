"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-neutral-950">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-950 dark:text-neutral-50">About CipherCraft</h2>
          <p className="text-xl text-neutral-500 mb-8 dark:text-neutral-400">
            CipherCraft is a 24-hour hackathon that brings together passionate developers, 
            designers, and innovators to solve real-world problems. Our mission is to foster 
            creativity, encourage collaboration, and push the boundaries of technology.
          </p>
          <p className="text-xl text-neutral-500 dark:text-neutral-400">
            Join us for an unforgettable experience of coding, learning, and building the future!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

