"use client"

import { motion } from "framer-motion"
import { Code2, Lightbulb, Rocket } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function HowItWorks() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Ideate",
      description: "Brainstorm innovative solutions to real-world challenges"
    },
    {
      icon: Code2,
      title: "Build",
      description: "Transform your ideas into working prototypes"
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Present your solution and compete for amazing prizes"
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How Does it Work?
          </h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto dark:text-neutral-400">
            Rapid Innovation: Design, Code, and Transform Ideas at Lightning Speed –
            Unleash Your Creativity and Build the Future!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-neutral-900/10 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-neutral-50/10">
                    <step.icon className="w-6 h-6 text-neutral-900 dark:text-neutral-50" />
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

