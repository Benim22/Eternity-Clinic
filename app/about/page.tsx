"use client"

import { useRef } from "react"
import Image from "next/image"
import { useTranslation } from "@/components/language-provider"
import { motion, useInView } from "framer-motion"

export default function AboutPage() {
  const { t } = useTranslation()

  const storyRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)

  const isStoryInView = useInView(storyRef, { once: true, amount: 0.3 })
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.3 })
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.3 })

  const values = [
    {
      title: "Excellence",
      description: "Vi strävar efter perfektion i varje behandling och service vi erbjuder.",
      icon: "✨",
    },
    {
      title: "Personlig vård",
      description: "Vi anpassar varje behandling efter dina unika behov och önskemål.",
      icon: "👤",
    },
    {
      title: "Säkerhet",
      description: "Din säkerhet är vår högsta prioritet, och vi använder endast de bästa produkterna och metoderna.",
      icon: "🛡️",
    },
    {
      title: "Innovation",
      description: "Vi håller oss uppdaterade med de senaste teknikerna och trenderna inom estetisk medicin.",
      icon: "💡",
    },
  ]

  const team = [
    {
      name: "Izabela Bogusz",
      role: "Founder & Lead Aesthetician",
      bio: "Med över 10 års erfarenhet inom estetisk medicin grundade Izabela Eternity Clinic med visionen att erbjuda högkvalitativa behandlingar i en lyxig och avslappnande miljö.",
      image: "/placeholder.svg?height=400&width=400&text=Izabela",
    },
    {
      name: "Maria Andersson",
      role: "Senior Aesthetician",
      bio: "Maria specialiserar sig på ansiktsbehandlingar och har en passion för att hjälpa klienter att uppnå en strålande och hälsosam hud.",
      image: "/placeholder.svg?height=400&width=400&text=Maria",
    },
    {
      name: "Johan Nilsson",
      role: "Massage Therapist",
      bio: "Johan är en erfaren massageterapeut som specialiserar sig på avslappnande och terapeutiska massagebehandlingar.",
      image: "/placeholder.svg?height=400&width=400&text=Johan",
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("aboutTitle")}</h1>
            <p className="text-xl text-muted-foreground">
              Välkommen till Eternity Clinic, din destination för förstklassiga estetiska behandlingar i Malmö.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isStoryInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl font-bold">Vår Historia</h2>
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
            </div>
            <div className="relative h-[1000px] rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
              <Image src="https://eternityclinic.eu/wp-content/uploads/2023/04/zd1.jpg" alt="Eternity Clinic Story" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesRef} className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Våra Värderingar</h2>
            <p className="text-lg text-muted-foreground">
              På Eternity Clinic styrs vi av ett antal kärnvärderingar som formar allt vi gör.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isValuesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section ref={teamRef} className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vårt Team</h2>
            <p className="text-lg text-muted-foreground">
              Möt de dedikerade proffsen som gör Eternity Clinic till en exceptionell plats för skönhet och
              välbefinnande.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isTeamInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-80">
                  <Image
                    src={
                      index === 0
                        ? "/images/laser-treatment-3.jpg"
                        : index === 1
                          ? "/images/laser-treatment-4.jpg"
                          : "/images/laser-treatment-1.jpg"
                    }
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
