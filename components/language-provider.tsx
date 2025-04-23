"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "sv"

type Translations = {
  [key: string]: {
    en: string
    sv: string
  }
}

const translations: Translations = {
  home: {
    en: "Home",
    sv: "Hem",
  },
  about: {
    en: "About Us",
    sv: "Om Oss",
  },
  services: {
    en: "Services",
    sv: "Tjänster",
  },
  gallery: {
    en: "Gallery",
    sv: "Galleri",
  },
  testimonials: {
    en: "Testimonials",
    sv: "Omdömen",
  },
  booking: {
    en: "Booking",
    sv: "Bokning",
  },
  contact: {
    en: "Contact",
    sv: "Kontakt",
  },
  bookNow: {
    en: "Book Now",
    sv: "Boka Nu",
  },
  heroTitle: {
    en: "Beauty & Health in Perfect Harmony",
    sv: "Skönhet & Hälsa i Perfekt Harmoni",
  },
  heroSubtitle: {
    en: "Professional aesthetic treatments in the heart of Malmö",
    sv: "Professionella estetiska behandlingar i hjärtat av Malmö",
  },
  bookConsultation: {
    en: "Book Consultation",
    sv: "Boka Konsultation",
  },
  seeServices: {
    en: "See Treatments",
    sv: "Se Behandlingar",
  },
  aboutTitle: {
    en: "About Eternity Clinic",
    sv: "Om Eternity Clinic",
  },
  aboutText: {
    en: "Founded with a passion for helping people look and feel their best, Eternity Clinic offers premium aesthetic treatments in a luxurious and comfortable environment. Our team of experts is dedicated to providing personalized care and exceptional results.",
    sv: "Grundat med en passion för att hjälpa människor att se och känna sig som bäst, erbjuder Eternity Clinic förstklassiga estetiska behandlingar i en lyxig och bekväm miljö. Vårt team av experter är dedikerade till att ge personlig vård och exceptionella resultat.",
  },
  servicesTitle: {
    en: "Our Services",
    sv: "Våra Tjänster",
  },
  servicesSubtitle: {
    en: "Discover our range of premium treatments",
    sv: "Upptäck vårt utbud av förstklassiga behandlingar",
  },
  readMore: {
    en: "Read More",
    sv: "Läs Mer",
  },
  galleryTitle: {
    en: "Treatment Gallery",
    sv: "Behandlingsgalleri",
  },
  gallerySubtitle: {
    en: "See the results of our treatments",
    sv: "Se resultaten av våra behandlingar",
  },
  all: {
    en: "All",
    sv: "Alla",
  },
  testimonialsTitle: {
    en: "What Our Clients Say",
    sv: "Vad Våra Kunder Säger",
  },
  testimonialsSubtitle: {
    en: "Read testimonials from our satisfied clients",
    sv: "Läs omdömen från våra nöjda kunder",
  },
  bookingTitle: {
    en: "Book Your Appointment",
    sv: "Boka Din Tid",
  },
  bookingSubtitle: {
    en: "Fill out the form below to schedule your consultation",
    sv: "Fyll i formuläret nedan för att boka din konsultation",
  },
  fullName: {
    en: "Full Name",
    sv: "Fullständigt Namn",
  },
  phone: {
    en: "Phone Number",
    sv: "Telefonnummer",
  },
  email: {
    en: "Email",
    sv: "E-post",
  },
  treatment: {
    en: "Treatment",
    sv: "Behandling",
  },
  message: {
    en: "Message",
    sv: "Meddelande",
  },
  submit: {
    en: "Submit",
    sv: "Skicka",
  },
  contactTitle: {
    en: "Contact Us",
    sv: "Kontakta Oss",
  },
  contactSubtitle: {
    en: "Get in touch with us",
    sv: "Kom i kontakt med oss",
  },
  address: {
    en: "Address",
    sv: "Adress",
  },
  openingHours: {
    en: "Opening Hours",
    sv: "Öppettider",
  },
  monday: {
    en: "Monday",
    sv: "Måndag",
  },
  tuesday: {
    en: "Tuesday",
    sv: "Tisdag",
  },
  wednesday: {
    en: "Wednesday",
    sv: "Onsdag",
  },
  thursday: {
    en: "Thursday",
    sv: "Torsdag",
  },
  friday: {
    en: "Friday",
    sv: "Fredag",
  },
  saturday: {
    en: "Saturday",
    sv: "Lördag",
  },
  sunday: {
    en: "Sunday",
    sv: "Söndag",
  },
  closed: {
    en: "Closed",
    sv: "Stängt",
  },
  privacyPolicy: {
    en: "Privacy Policy",
    sv: "Integritetspolicy",
  },
  terms: {
    en: "Terms & Conditions",
    sv: "Villkor",
  },
  poweredBy: {
    en: "Powered by",
    sv: "Drivs av",
  },
  toggleTheme: {
    en: "Toggle theme",
    sv: "Byt tema",
  },
  toggleLanguage: {
    en: "Switch to Swedish",
    sv: "Byt till Engelska",
  },
  botox: {
    en: "Botox",
    sv: "Botox",
  },
  fillers: {
    en: "Fillers",
    sv: "Fillers",
  },
  microneedling: {
    en: "Microneedling",
    sv: "Microneedling",
  },
  microblading: {
    en: "Microblading",
    sv: "Microblading",
  },
  laser: {
    en: "Laser Treatment",
    sv: "Laserbehandling",
  },
  massage: {
    en: "Massage",
    sv: "Massage",
  },
  botoxDesc: {
    en: "Reduce fine lines and wrinkles with our premium Botox treatments.",
    sv: "Reducera fina linjer och rynkor med våra förstklassiga Botox-behandlingar.",
  },
  fillersDesc: {
    en: "Enhance your natural beauty with our dermal filler treatments.",
    sv: "Förstärk din naturliga skönhet med våra dermalfiller-behandlingar.",
  },
  microneedlingDesc: {
    en: "Improve skin texture and reduce scars with microneedling.",
    sv: "Förbättra hudtextur och minska ärr med microneedling.",
  },
  microbladingDesc: {
    en: "Get perfect eyebrows with our microblading technique.",
    sv: "Få perfekta ögonbryn med vår microblading-teknik.",
  },
  laserDesc: {
    en: "Advanced laser treatments for various skin concerns.",
    sv: "Avancerade laserbehandlingar för olika hudproblem.",
  },
  massageDesc: {
    en: "Relax and rejuvenate with our therapeutic massage treatments.",
    sv: "Slappna av och föryngra med våra terapeutiska massagebehandlingar.",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("sv")

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`)
      return key
    }
    return translations[key][language]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }
  return context
}
