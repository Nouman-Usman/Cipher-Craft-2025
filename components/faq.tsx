"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "What is CipherCraft?",
      answer: "CipherCraft is a 24-hour hackathon where participants work in teams to solve real-world problems using technology."
    },
    {
      question: "Who can participate?",
      answer: "CipherCraft is open to students, professionals, and anyone passionate about technology and problem-solving."
    },
    {
      question: "Do I need to know how to code?",
      answer: "While coding skills are helpful, we welcome participants with diverse skills including design, project management, and domain expertise."
    },
    {
      question: "How do I register?",
      answer: "You can register by clicking the 'Register Now' button at the top of this page and following the instructions."
    },
    {
      question: "Is there a participation fee?",
      answer: "No, participation in CipherCraft is completely free of charge."
    }
  ]

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-foreground hover:text-primary">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

