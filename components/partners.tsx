"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Partners() {
  const partners = [
    { name: "UET Lahore", logo: "/placeholder.svg" },
    { name: "Tech Incubator", logo: "/placeholder.svg" },
    { name: "StartupHub", logo: "/placeholder.svg" },
    { name: "InnovateNow", logo: "/placeholder.svg" },
  ]

  return (
    <section id="partners" className="py-20 md:py-32">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Partners</h2>
          <p className="text-xl text-neutral-500 dark:text-neutral-400">
            Collaborating with these organizations to make CipherCraft a success
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={75}
                className="mx-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

