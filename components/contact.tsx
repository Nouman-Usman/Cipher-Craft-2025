"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Get in Touch</h2>
          <p className="text-xl text-muted-foreground">
            Have questions? We'd love to hear from you!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" className="bg-background border-border text-foreground placeholder:text-muted-foreground" />
            <Input type="email" placeholder="Your Email" className="bg-background border-border text-foreground placeholder:text-muted-foreground" />
            <Textarea placeholder="Your Message" className="bg-background border-border text-foreground placeholder:text-muted-foreground" />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Send Message</Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

