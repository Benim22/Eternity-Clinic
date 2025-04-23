"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/components/language-provider"
import { motion, useInView } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function ServicesPage() {
  const { t } = useTranslation()
  const [showScrollTop, setShowScrollTop] = useState(false)

  const servicesRef = useRef<HTMLDivElement>(null)
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const services = [
    {
      id: "ansiktsrensning",
      title: "Ansiktsrensning",
      description: "En grundlig rengöring av ansiktet för att avlägsna orenheter och ge huden en fräsch lyster.",
      longDescription:
        "Vår ansiktsrensning är en grundlig behandling som rengör huden på djupet. Vi avlägsnar orenheter, öppnar upp tilltäppta porer och ger din hud en fräsch och strålande lyster. Behandlingen anpassas efter din hudtyp och dina specifika behov.",
      image: "/images/laser-treatment-1.jpg",
      price: "600 SEK",
      duration: "45-60 minuter",
      icon: "✨",
    },
    {
      id: "microdermobrasion",
      title: "Microdermobrasion",
      description: "En exfolierande behandling som avlägsnar döda hudceller och förbättrar hudens textur.",
      longDescription:
        "Microdermobrasion är en skonsam men effektiv exfolierande behandling som avlägsnar det översta lagret av döda hudceller. Behandlingen stimulerar cellförnyelse, förbättrar hudens textur och ger en jämnare hudton. Perfekt för att behandla fina linjer, ytliga ärr och hyperpigmentering.",
      image: "/images/laser-treatment-2.jpg",
      price: "400 SEK",
      duration: "30-45 minuter",
      icon: "🔬",
    },
    {
      id: "kemisk-peeling",
      title: "Kemisk Peeling",
      description: "En behandling som använder syror för att exfoliera huden och behandla olika hudproblem.",
      longDescription:
        "Vår kemiska peeling använder olika syror för att exfoliera huden på ett kontrollerat sätt. Behandlingen är effektiv för att förbättra hudens textur, reducera fina linjer, behandla acne och minska hyperpigmentering. Vi anpassar styrkan på peelingen efter din hudtyp och dina specifika behov.",
      image: "/images/laser-treatment-3.jpg",
      price: "från 400 SEK",
      duration: "30-45 minuter",
      icon: "🧪",
    },
    {
      id: "retix-c",
      title: "Retix C",
      description: "En avancerad behandling med retinol och C-vitamin för hudföryngring.",
      longDescription:
        "Retix C är en avancerad behandling som kombinerar fördelarna med retinol och C-vitamin. Denna kraftfulla kombination stimulerar kollagenproduktionen, förbättrar hudens elasticitet, reducerar fina linjer och ger en jämnare hudton. Behandlingen är perfekt för dig som vill ha en effektiv anti-aging behandling.",
      image: "/images/laser-treatment-4.jpg",
      price: "500 SEK",
      duration: "45-60 minuter",
      icon: "✨",
    },
    {
      id: "microneedling",
      title: "Microneedling",
      description: "En behandling som stimulerar hudens naturliga kollagenproduktion.",
      longDescription:
        "Microneedling är en innovativ behandling som använder fina nålar för att skapa mikroskopiska kanaler i huden. Detta stimulerar hudens naturliga läkningsprocess och ökar produktionen av kollagen och elastin. Resultatet är en fastare, jämnare och mer ungdomlig hud. Vi erbjuder både enskilda behandlingar och paket för optimala resultat.",
      image: "/images/laser-treatment-1.jpg",
      price: "1 behandling: 1195 SEK, 3 behandlingar: 3285 SEK",
      duration: "45-60 minuter",
      icon: "🔬",
    },
    {
      id: "bb-glow",
      title: "BB Glow",
      description: "En semi-permanent foundation behandling för en jämn och strålande hud.",
      longDescription:
        "BB Glow är en innovativ behandling som ger en semi-permanent foundation effekt. Behandlingen jämnar ut hudtonen, minimerar synligheten av porer och ger huden en naturlig lyster. Resultatet varar i flera månader och ger dig en perfekt bas utan behov av daglig makeup.",
      image: "/images/laser-treatment-2.jpg",
      price: "1095 SEK",
      duration: "60-90 minuter",
      icon: "💄",
    },
    {
      id: "vard-behandlingar",
      title: "Vård behandlingar",
      description: "Specialanpassade behandlingar för att vårda och förbättra din hud.",
      longDescription:
        "Våra vårdbehandlingar är specialanpassade för att möta dina specifika hudbehov. Vi kombinerar olika tekniker och produkter för att ge din hud optimal vård och förbättring. Oavsett om du har torr hud, acne, rosacea eller andra hudproblem, har vi en behandling som passar dig.",
      image: "/images/laser-treatment-3.jpg",
      price: "700 SEK",
      duration: "45-60 minuter",
      icon: "🌿",
    },
    {
      id: "black-doll-peeling",
      title: "Black Doll Peeling",
      description: "En laserbehandling som använder kolpartiklar för att rengöra och förminska porer.",
      longDescription:
        "Black Doll Peeling är en avancerad laserbehandling där kolpartiklar appliceras på huden och sedan aktiveras med laser. Behandlingen rengör porerna på djupet, reducerar överproduktion av talg och förminskar förstorade porer. Resultatet är en renare, jämnare och mer strålande hud.",
      image: "/images/laser-treatment-4.jpg",
      price: "1195 SEK",
      duration: "45-60 minuter",
      icon: "⚫",
    },
    {
      id: "rf-microneedling",
      title: "RF Microneedling",
      description: "En kombination av microneedling och radiofrekvens för djupgående hudföryngring.",
      longDescription:
        "RF Microneedling kombinerar traditionell microneedling med radiofrekvensenergi för en ännu mer effektiv behandling. Tekniken levererar värmeenergi djupt in i huden, vilket stimulerar kollagenproduktionen och ger en betydande hudåtstramning. Perfekt för att behandla slapp hud, fina linjer och ärr.",
      image: "/images/laser-treatment-1.jpg",
      price: "1295 SEK",
      duration: "60-90 minuter",
      icon: "📡",
    },
    {
      id: "dermaplaning",
      title: "Dermaplaning/skalpell peeling",
      description: "En exfolierande behandling som avlägsnar döda hudceller och fjun från ansiktet.",
      longDescription:
        "Dermaplaning är en skonsam exfolierande behandling där vi använder en steril skalpell för att försiktigt skrapa bort det översta lagret av döda hudceller och fjun från ansiktet. Behandlingen ger omedelbart en slätare, ljusare hud och förbättrar absorption av hudvårdsprodukter. Perfekt före speciella tillfällen!",
      image: "/images/laser-treatment-2.jpg",
      price: "600 SEK",
      duration: "30-45 minuter",
      icon: "✂️",
    },
    {
      id: "ansiktsmassage",
      title: "Ansiktsmassage",
      description: "En avslappnande massage för ansikte, hårbotten, nacke, dekolletage, armar och händer.",
      longDescription:
        "Vår lyxiga ansiktsmassage inkluderar inte bara ansiktet utan även hårbotten, nacke, dekolletage, armar och händer. Behandlingen ökar cirkulationen, reducerar spänningar och ger en djup avslappning. Den perfekta behandlingen för att varva ner och samtidigt ge huden en naturlig lyster.",
      image: "/images/laser-treatment-3.jpg",
      price: "500 SEK",
      duration: "40 minuter",
      icon: "👐",
    },
    {
      id: "klassisk-massage-45",
      title: "Klassisk massage 45min",
      description: "En avslappnande helkroppsmassage som lindrar spänningar och främjar välbefinnande.",
      longDescription:
        "Vår klassiska massage på 45 minuter fokuserar på att lindra spänningar i de områden där du behöver det mest. Behandlingen ökar cirkulationen, reducerar stress och ger en känsla av välbefinnande. Perfekt för dig som vill ha en kortare men effektiv massagebehandling.",
      image: "/images/laser-treatment-4.jpg",
      price: "650 SEK",
      duration: "45 minuter",
      icon: "👐",
    },
    {
      id: "klassisk-massage-60",
      title: "Klassisk massage 60min",
      description: "En djupgående helkroppsmassage för total avslappning och återhämtning.",
      longDescription:
        "Vår klassiska massage på 60 minuter ger dig tid för en mer omfattande behandling. Vi arbetar igenom hela kroppen med fokus på dina problemområden. Massagen ökar cirkulationen, löser upp spänningar och ger en djup avslappning. En perfekt behandling för att återställa balansen i kropp och sinne.",
      image: "/images/laser-treatment-1.jpg",
      price: "750 SEK",
      duration: "60 minuter",
      icon: "👐",
    },
    {
      id: "klassisk-massage-90",
      title: "Klassisk massage 90min",
      description: "En lyxig och omfattande helkroppsmassage för maximal avslappning och återhämtning.",
      longDescription:
        "Vår klassiska massage på 90 minuter är vår mest omfattande massagebehandling. Vi tar oss tid att grundligt arbeta igenom hela kroppen, med extra fokus på dina problemområden. Denna lyxiga behandling ger en djup avslappning, löser upp kroniska spänningar och ger en känsla av total förnyelse.",
      image: "/images/laser-treatment-2.jpg",
      price: "950 SEK",
      duration: "90 minuter",
      icon: "👐",
    },
    {
      id: "lymfmassage-benen",
      title: "Lymfmassage benen",
      description: "En specialiserad massage som stimulerar lymfsystemet och reducerar svullnad i benen.",
      longDescription:
        "Vår lymfmassage för benen är en skonsam men effektiv behandling som stimulerar lymfsystemet och hjälper kroppen att dränera överflödig vätska. Behandlingen är perfekt för att reducera svullnad, förbättra cirkulationen och ge en känsla av lätthet i benen. Idealisk för dig som står eller sitter mycket under dagen.",
      image: "/images/laser-treatment-3.jpg",
      price: "550 SEK",
      duration: "30 minuter",
      icon: "🦵",
    },
    {
      id: "lymfmassage-ansiktet",
      title: "Lymfmassage ansiktet",
      description: "En skonsam massage som reducerar svullnad och ger ansiktet en fräsch lyster.",
      longDescription:
        "Vår lymfmassage för ansiktet är en skonsam behandling som stimulerar lymfsystemet i ansiktet. Massagen hjälper till att dränera överflödig vätska, reducera svullnad och ge ansiktet en fräsch och ungdomlig lyster. Perfekt som en snabb uppfräschning eller som komplement till andra ansiktsbehandlingar.",
      image: "/images/laser-treatment-4.jpg",
      price: "350 SEK",
      duration: "15 minuter",
      icon: "👤",
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-12 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("servicesTitle")}</h1>
            <p className="text-xl text-muted-foreground">{t("servicesSubtitle")}</p>
          </div>
        </div>
      </section>

      {/* Quick Nav Section för mobilvy */}
      <section className="py-6 md:py-12 bg-muted/30 lg:hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">Våra Tjänster</h2>
          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => (
              <Link 
                key={`nav-${service.id}`} 
                href={`#${service.id}`}
                className="p-3 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{service.icon}</span>
                  <span className="text-sm font-medium truncate">{service.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-10 md:py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-6 md:gap-12 items-center"
              >
                <div
                  className={`relative h-[250px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl ${index % 2 === 1 ? "order-1 md:order-2" : ""}`}
                >
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className={index % 2 === 1 ? "order-2 md:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-3xl">{service.icon}</div>
                    <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4 md:mb-6">{service.longDescription}</p>
                  <div className="flex flex-wrap gap-4 mb-4 md:mb-6">
                    <Card className="flex-1 min-w-[140px]">
                      <CardContent className="p-3 md:p-4">
                        <p className="text-sm text-muted-foreground">Pris</p>
                        <p className="font-medium">{service.price}</p>
                      </CardContent>
                    </Card>
                    <Card className="flex-1 min-w-[140px]">
                      <CardContent className="p-3 md:p-4">
                        <p className="text-sm text-muted-foreground">Tid</p>
                        <p className="font-medium">{service.duration}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <Button asChild className="rounded-full w-full md:w-auto">
                    <Link href="/booking">{t("bookConsultation")}</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Redo att boka din behandling?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Kontakta oss idag för att boka en tid eller konsultation. Vi ser fram emot att hjälpa dig uppnå dina mål.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/booking">{t("bookConsultation")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors z-[60]"
          aria-label="Scrolla till toppen"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
