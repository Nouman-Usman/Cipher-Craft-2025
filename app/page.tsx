"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Sponsors } from "@/components/sponsors"
import { Partners } from "@/components/partners"
import { FAQ } from "@/components/faq"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  const [fileChanges, setFileChanges] = useState<string[]>([]);
  useEffect(() => {
    const fetchFileChanges = async () => {
      const response = await fetch("'/api/simulated-file-changes'");
      const data = await response.json();
      setFileChanges(prev => [...prev, data.change].slice(-5));
    };

    const interval = setInterval(fetchFileChanges, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navigation />
      <Hero />
      <About />
      <Sponsors />
      <Partners />
      <section className="bg-white dark:bg-neutral-950">
        <FAQ />
      </section>
      <Team />
      <section className="bg-white dark:bg-neutral-950">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

