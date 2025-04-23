"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useTranslation } from "@/components/language-provider"
import {
  Menu,
  Home,
  Info,
  Sparkles,
  ImageIcon,
  MessageSquare,
  Phone,
  Calendar,
  ChevronRight,
  Instagram,
  Facebook,
  X,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation()
  const [showFloatingMenu, setShowFloatingMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      setShowFloatingMenu(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: t("home"), icon: Home },
    { href: "/about", label: t("about"), icon: Info },
    { href: "/services", label: t("services"), icon: Sparkles },
    { href: "/gallery", label: t("gallery"), icon: ImageIcon },
    { href: "/testimonials", label: t("testimonials"), icon: MessageSquare },
    { href: "/contact", label: t("contact"), icon: Phone },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-md py-2" 
            : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Eternity Clinic" 
              width={240} 
              height={120} 
              className={cn(
                "w-auto transition-all duration-300",
                isScrolled ? "h-16" : "h-20"
              )}
              priority 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm rounded-md transition-colors",
                  pathname === link.href 
                    ? "text-primary font-medium" 
                    : isScrolled 
                      ? "text-foreground/80 hover:text-primary" 
                      : "text-foreground/90 hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />
            <Button asChild size="sm" className="rounded-full">
              <Link href="/booking">{t("bookNow")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button in header (always visible) */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />
            <MobileSidebar navLinks={navLinks} pathname={pathname} />
          </div>
        </div>
      </header>

      {/* Floating Mobile Menu Button (shown only when scrolled far) */}
      {showFloatingMenu && (
        <div className="fixed bottom-6 left-6 md:hidden z-[90]">
          <Button 
            onClick={() => {
              const mobileMenu = document.getElementById("mobile-menu-trigger")
              if (mobileMenu) {
                mobileMenu.click()
              }
            }}
            size="icon" 
            className="h-12 w-12 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Öppna meny</span>
          </Button>
        </div>
      )}
    </>
  )
}

interface MobileSidebarProps {
  navLinks: {
    href: string
    label: string
    icon: React.ElementType
  }[]
  pathname: string
}

function MobileSidebar({ navLinks, pathname }: MobileSidebarProps) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  // Låser body-scrollning när sidebaren är öppen
  useEffect(() => {
    if (open) {
      // Förhindra scrollning på body när sidebaren är öppen
      document.body.style.overflow = 'hidden'
    } else {
      // Tillåt scrollning när sidebaren är stängd
      document.body.style.overflow = ''
    }
    
    // Återställ alltid overflow vid komponent-unmount
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <Button 
        id="mobile-menu-trigger"
        variant="ghost" 
        size="icon" 
        className="rounded-full" 
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open menu</span>
      </Button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] h-[100dvh]"
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed top-0 bottom-0 right-0 w-[300px] sm:w-[350px] bg-background shadow-xl z-[100] overflow-auto h-[100dvh]"
            >
              <div className="flex flex-col h-full">
                {/* Sidebar Header */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="p-6 border-b flex items-center justify-between"
                >
                  <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
                    <Image 
                      src="/logo.png" 
                      alt="Eternity Clinic" 
                      width={200} 
                      height={100} 
                      className="h-14 w-auto" 
                      priority 
                    />
                  </Link>
                  <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </motion.div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-auto py-6 px-4">
                  <nav className="space-y-1">
                    {navLinks.map((link, index) => {
                      const Icon = link.icon
                      const isActive = pathname === link.href

                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "flex items-center gap-3 px-4 py-3 text-base rounded-lg transition-all",
                              isActive
                                ? "bg-primary/10 text-primary font-medium"
                                : "hover:bg-muted text-foreground/80 hover:text-foreground",
                            )}
                          >
                            <Icon className="h-5 w-5" />
                            <span>{link.label}</span>
                            {isActive && (
                              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto">
                                <ChevronRight className="h-4 w-4" />
                              </motion.div>
                            )}
                          </Link>
                        </motion.div>
                      )
                    })}
                  </nav>

                  {/* Booking Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="mt-8 px-4"
                  >
                    <Button asChild size="lg" className="w-full rounded-lg" onClick={() => setOpen(false)}>
                      <Link href="/booking">
                        <Calendar className="mr-2 h-5 w-5" />
                        {t("bookNow")}
                      </Link>
                    </Button>
                  </motion.div>
                </div>

                {/* Sidebar Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="p-6 border-t"
                >
                  <div className="space-y-4">
                    {/* Contact Info */}
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Kontakt</h4>
                      <p className="text-sm">Kantatgatan 39, Lindängen, Malmö</p>
                      <p className="text-sm">076 402 0694</p>
                    </div>

                    {/* Social Links */}
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Följ oss</h4>
                      <div className="flex space-x-4">
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors"
                          aria-label="Facebook"
                        >
                          <Facebook className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
