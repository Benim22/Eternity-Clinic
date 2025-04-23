"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/components/language-provider"
import { motion, useInView } from "framer-motion"
import { ChevronRight, Clock, Sparkles } from "lucide-react"
import { ServiceModal } from "@/components/service-modal"

export default function Home() {
  const { t } = useTranslation()
  const [isClient, setIsClient] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  // Förhindra hydrationsproblem genom att endast rendera video på klienten
  useEffect(() => {
    setIsClient(true)
  }, [])

  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 })
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })

  const services = [
    {
      id: "botox",
      title: t("botox"),
      description: t("botoxDesc"),
      icon: "✨",
      fullDescription: "Botox används för att tillfälligt reducera rynkor och linjer i ansiktet. Behandlingen ger ett fräschare och mer ungdomligt utseende genom att musklerna slappnar av och huden blir slätare.",
      benefits: [
        "Minskar rynkor och linjer",
        "Ger ett mer ungdomligt utseende",
        "Snabb behandling med minimal återhämtningstid",
        "Resultat som varar 3-4 månader"
      ],
      duration: "30-45 minuter",
      price: "1 500",
      recommended: true
    },
    {
      id: "fillers",
      title: t("fillers"),
      description: t("fillersDesc"),
      icon: "💉",
      fullDescription: "Fillers används för att återställa volym, fylla ut rynkor och förbättra ansiktets konturer. Behandlingen ger en naturlig och fräsch look utan operation.",
      benefits: [
        "Återställer volym i kinder, läppar och andra områden",
        "Reducerar djupa rynkor och linjer",
        "Förbättrar ansiktets konturer",
        "Resultat som varar 6-12 månader"
      ],
      duration: "45-60 minuter",
      price: "2 800"
    },
    {
      id: "microneedling",
      title: t("microneedling"),
      description: t("microneedlingDesc"),
      icon: "🔬",
      fullDescription: "Microneedling stimulerar hudens egen kollagenproduktion genom att skapa mikroskopiska kanaler i huden. Detta förbättrar hudens textur, minskar ärr och fina linjer samt ger ett mer ungdomligt utseende.",
      benefits: [
        "Förbättrar hudens textur och ton",
        "Minskar ärr och pigmentfläckar",
        "Reducerar fina linjer och rynkor",
        "Stimulerar naturlig kollagenproduktion"
      ],
      duration: "60 minuter",
      price: "1 800"
    },
    {
      id: "microblading",
      title: t("microblading"),
      description: t("microbladingDesc"),
      icon: "✏️",
      fullDescription: "Microblading är en semi-permanent teknik för att förbättra ögonbrynens utseende. Genom precisa, handgjorda streck som efterliknar naturliga hårstrån skapas fylligare och perfekt formade ögonbryn.",
      benefits: [
        "Naturligt utseende som efterliknar riktiga hårstrån",
        "Perfekt formade ögonbryn varje dag",
        "Varar i 1-2 år",
        "Tidsbesparande för din dagliga rutin"
      ],
      duration: "120 minuter",
      price: "3 200",
      recommended: true
    },
    {
      id: "laser",
      title: t("laser"),
      description: t("laserDesc"),
      icon: "🔆",
      fullDescription: "Laserbehandlingar används för allt från hårborttagning till hudföryngring. Vår avancerade laserteknik behandlar effektivt oönskad hårväxt, pigmentfläckar och förbättrar hudens övergripande utseende.",
      benefits: [
        "Permanent hårborttagning",
        "Reducerar pigmentfläckar och åldersfläckar",
        "Förbättrar hudens textur och ton",
        "Minimal återhämtningstid"
      ],
      duration: "30-90 minuter",
      price: "1 200"
    },
    {
      id: "massage",
      title: t("massage"),
      description: t("massageDesc"),
      icon: "👐",
      fullDescription: "Våra ansiktsmassager kombinerar avslappnande tekniker med hudvårdande fördelar. Behandlingen ökar blodcirkulationen, reducerar svullnad och spänningar samt ger ett mer strålande utseende.",
      benefits: [
        "Ökar blodcirkulationen och syre till huden",
        "Reducerar spänningar och stress",
        "Förbättrar upptaget av hudvårdsprodukter",
        "Ger ett fräschare och mer strålande utseende"
      ],
      duration: "45 minuter",
      price: "950"
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Emma Johansson",
      text: "Jag är så nöjd med min behandling på Eternity Clinic. Personalen var professionell och resultatet överträffade mina förväntningar.",
      rating: 5,
    },
    {
      id: 2,
      name: "Anders Lindström",
      text: "Fantastisk service och en avslappnande miljö. Jag kommer definitivt att återvända för fler behandlingar.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sofia Bergman",
      text: "Izabela är otroligt kunnig och fick mig att känna mig trygg under hela processen. Resultatet blev precis som jag önskade.",
      rating: 5,
    },
  ]

  const currentService = selectedService 
    ? services.find(service => service.id === selectedService) 
    : null

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-screen flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {isClient ? (
            <video autoPlay muted loop playsInline className="object-cover w-full h-full">
              <source src="/videos/hero.mov" type="video/mp4" />
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-full bg-background" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60" />
        </div>

        <div className="container mx-auto px-4 z-10 pt-0 md:pt-20 -mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-4 md:space-y-6 text-center md:text-left mx-auto md:mx-0"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">{t("heroTitle")}</h1>
            <p className="text-lg md:text-2xl text-muted-foreground">{t("heroSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center md:justify-start">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/booking">{t("bookConsultation")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/services">{t("seeServices")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isAboutInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-[500px] md:h-[1000px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="https://eternityclinic.eu/wp-content/uploads/2023/04/zd1.jpg" alt="Izabela - Founder" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Om Eternity Clinic</h2>
              
              <p className="text-lg text-muted-foreground">
                Eternity Clinic grundades med en passion för att hjälpa människor att både se och känna sig som sitt allra bästa jag. Kliniken drivs av mig, Izabela Bogusz, diplomerad kosmetolog med över sex års utbildning och erfarenhet inom estetiska behandlingar. Min kompetens är förvärvad hos några av Europas mest framstående specialister inom fillers och skönhetsmedicin.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Jag tror på naturliga och subtila förbättringar som lyfter fram din unika skönhet – utan att förändra vem du är. Genom att kontinuerligt vidareutbilda mig inom den senaste teknologin och behandlingsmetoderna kan jag erbjuda säkra, moderna och effektiva behandlingar som anpassas efter just dina behov.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Hos Eternity Clinic möts du av en lyxig men personlig miljö där kvalitet, omtanke och noggrannhet står i fokus.
              </p>
              
              <blockquote className="pl-4 border-l-4 border-primary italic text-lg">
                "Min passion är att hjälpa människor att känna sig vackra och självsäkra – ditt ansikte är mitt mål."
              </blockquote>
              <p className="text-right font-medium">– Izabela Bogusz, Grundare</p>
              
              <p className="text-lg text-muted-foreground">
                Välkommen att höra av dig – jag berättar gärna mer om vilka behandlingar som kan passa just dig.
              </p>
              
              <Button asChild variant="outline" className="rounded-full mt-4">
                <Link href="/about">
                  {t("readMore")} <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("servicesTitle")}</h2>
            <p className="text-lg text-muted-foreground">{t("servicesSubtitle")}</p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground flex-grow">{service.description}</p>
                    
                    <div className="flex flex-wrap gap-3 mt-3 mb-4">
                      {service.duration && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{service.duration}</span>
                        </div>
                      )}
                      {service.price && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Sparkles className="h-3 w-3" />
                          <span>Från {service.price} kr</span>
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      variant="link" 
                      className="p-0 mt-4 justify-start group-hover:text-primary transition-colors"
                      onClick={() => setSelectedService(service.id)}
                    >
                      {t("readMore")} <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/services">{t("seeServices")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("galleryTitle")}</h2>
            <p className="text-lg text-muted-foreground">{t("gallerySubtitle")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden">
              <Image
                src="/images/laser-treatment-1.jpg"
                alt="Laser treatment"
                width={600}
                height={600}
                className="object-cover w-full h-full aspect-square"
              />
              <div className="absolute inset-0 bg-foreground/0 hover:bg-foreground/20 transition-colors flex items-center justify-center">
                <Button variant="ghost" className="opacity-0 hover:opacity-100 transition-opacity">
                  {t("seeServices")}
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/laser-treatment-2.jpg"
                alt="Laser treatment"
                width={600}
                height={600}
                className="object-cover w-full h-full aspect-square"
              />
              <div className="absolute inset-0 bg-foreground/0 hover:bg-foreground/20 transition-colors flex items-center justify-center">
                <Button variant="ghost" className="opacity-0 hover:opacity-100 transition-opacity">
                  {t("seeServices")}
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/laser-treatment-3.jpg"
                alt="Laser treatment"
                width={600}
                height={600}
                className="object-cover w-full h-full aspect-square"
              />
              <div className="absolute inset-0 bg-foreground/0 hover:bg-foreground/20 transition-colors flex items-center justify-center">
                <Button variant="ghost" className="opacity-0 hover:opacity-100 transition-opacity">
                  {t("seeServices")}
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/laser-treatment-4.jpg"
                alt="Laser treatment"
                width={600}
                height={600}
                className="object-cover w-full h-full aspect-square"
              />
              <div className="absolute inset-0 bg-foreground/0 hover:bg-foreground/20 transition-colors flex items-center justify-center">
                <Button variant="ghost" className="opacity-0 hover:opacity-100 transition-opacity">
                  {t("seeServices")}
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/laser-treatment-1.jpg"
                alt="Laser treatment"
                width={600}
                height={600}
                className="object-cover w-full h-full aspect-square"
              />
              <div className="absolute inset-0 bg-foreground/0 hover:bg-foreground/20 transition-colors flex items-center justify-center">
                <Button variant="ghost" className="opacity-0 hover:opacity-100 transition-opacity">
                  {t("seeServices")}
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/gallery">{t("galleryTitle")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("testimonialsTitle")}</h2>
            <p className="text-lg text-muted-foreground">{t("testimonialsSubtitle")}</p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isTestimonialsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-4 flex-grow">"{testimonial.text}"</p>
                    <p className="font-medium">{testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/testimonials">{t("testimonialsTitle")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("bookingTitle")}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t("bookingSubtitle")}</p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/booking">{t("bookConsultation")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {currentService && (
        <ServiceModal 
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={{
            ...currentService,
            description: currentService.fullDescription || currentService.description
          }}
        />
      )}
    </div>
  )
}
