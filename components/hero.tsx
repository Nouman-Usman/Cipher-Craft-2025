"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

export function Hero() {
  return (
    <div className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-white dark:bg-neutral-950">
      <motion.div 
        className="absolute top-1/2 right-0 w-96 h-96 bg-neutral-900/20 dark:bg-neutral-900/10 rounded-full blur-3xl dark:bg-neutral-50/20 dark:dark:bg-neutral-50/10"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-100/20 dark:bg-neutral-100/10 rounded-full blur-3xl dark:bg-neutral-800/20 dark:dark:bg-neutral-800/10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
      
      <div className="container px-4 mx-auto relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-neutral-950 dark:text-neutral-50">
              Cipher Craft 2025
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>13 Sep, 2025</span>
              </div>
              <div className="hidden md:block">•</div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>UET Lahore Main Campus</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-neutral-500 mb-8 max-w-2xl mx-auto dark:text-neutral-400">
              Are you a passionate developer with ideas to solve real-world problems?
              Join us and transform your ideas into reality!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90">
                Register Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-50 dark:border-neutral-50 dark:text-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-900">
                Become a Mentor
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

