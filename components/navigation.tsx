"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-neutral-200 dark:bg-neutral-950/80 dark:border-neutral-800">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-neutral-900 dark:text-neutral-50">
          CipherCraft
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium text-neutral-950 hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-neutral-50">
            About
          </Link>
          <Link href="#sponsors" className="text-sm font-medium text-neutral-950 hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-neutral-50">
            Sponsors
          </Link>
          <Link href="#partners" className="text-sm font-medium text-neutral-950 hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-neutral-50">
            Partners
          </Link>
          <Link href="#faq" className="text-sm font-medium text-neutral-950 hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-neutral-50">
            FAQ
          </Link>
          <Link href="#team" className="text-sm font-medium text-neutral-950 hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-neutral-50">
            Team
          </Link>
          <Link href="#contact" className="text-sm font-medium text-neutral-950 hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-neutral-50">
            Contact
          </Link>
          <ThemeToggle />
          <Button>Register Now</Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              <Link href="#about" className="text-sm font-medium text-neutral-950 hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-neutral-50">
                About
              </Link>
              <Link href="#sponsors" className="text-sm font-medium text-neutral-950 hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-neutral-50">
                Sponsors
              </Link>
              <Link href="#partners" className="text-sm font-medium text-neutral-950 hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-neutral-50">
                Partners
              </Link>
              <Link href="#faq" className="text-sm font-medium text-neutral-950 hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-neutral-50">
                FAQ
              </Link>
              <Link href="#team" className="text-sm font-medium text-neutral-950 hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-neutral-50">
                Team
              </Link>
              <Link href="#contact" className="text-sm font-medium text-neutral-950 hover:text-neutral-900 dark:text-neutral-50 dark:hover:text-neutral-50">
                Contact
              </Link>
              <ThemeToggle />
              <Button className="w-full">Register Now</Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

