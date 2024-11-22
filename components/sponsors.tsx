"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Sponsors() {
  const sponsors = [
    { name: "TechCorp", logo: "/placeholder.svg" },
    { name: "InnovateTech", logo: "/placeholder.svg" },
    { name: "FutureSoft", logo: "/placeholder.svg" },
    { name: "CodeMasters", logo: "/placeholder.svg" },
    { name: "DataDynamics", logo: "/placeholder.svg" },
    { name: "CloudNine", logo: "/placeholder.svg" },
  ]

  return (
    <section id="sponsors" className="py-20 md:py-32 bg-neutral-100 dark:bg-neutral-800">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-neutral-950 dark:text-neutral-50">Our Sponsors</h2>
          <p className="text-xl text-neutral-500 dark:text-neutral-400">
            We're grateful for the support of these amazing companies
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={200}
                height={100}
                className="mx-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

