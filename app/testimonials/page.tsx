"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/components/language-provider"
import { motion, useInView } from "framer-motion"

export default function TestimonialsPage() {
  const { t } = useTranslation()

  const testimonialsRef = useRef<HTMLDivElement>(null)
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.1 })

  const testimonials = [
    {
      id: 1,
      name: "Emma Johansson",
      text: "Jag är så nöjd med min behandling på Eternity Clinic. Personalen var professionell och resultatet överträffade mina förväntningar. Jag kommer definitivt att återvända för fler behandlingar.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400&text=Emma",
      treatment: "Botox",
    },
    {
      id: 2,
      name: "Anders Lindström",
      text: "Fantastisk service och en avslappnande miljö. Jag kommer definitivt att återvända för fler behandlingar. Izabela är otroligt kunnig och fick mig att känna mig trygg under hela processen.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400&text=Anders",
      treatment: "Fillers",
    },
    {
      id: 3,
      name: "Sofia Bergman",
      text: "Izabela är otroligt kunnig och fick mig att känna mig trygg under hela processen. Resultatet blev precis som jag önskade. Jag rekommenderar verkligen Eternity Clinic till alla som söker högkvalitativa estetiska behandlingar.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400&text=Sofia",
      treatment: "Microneedling",
    },
    {
      id: 4,
      name: "Mikael Svensson",
      text: "Jag var nervös inför min första behandling, men teamet på Eternity Clinic fick mig att känna mig avslappnad och väl omhändertagen. Resultatet var subtilt och naturligt, precis som jag önskade.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400&text=Mikael",
      treatment: "Massage",
    },
    {
      id: 5,
      name: "Linnea Ekström",
      text: "Jag har provat flera kliniker i Malmö, men Eternity Clinic är utan tvekan den bästa. Deras uppmärksamhet på detaljer och personliga service är oöverträffad. Jag är så glad att jag hittade dem!",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400&text=Linnea",
      treatment: "Microblading",
    },
    {
      id: 6,
      name: "Johan Persson",
      text: "Min upplevelse på Eternity Clinic var utmärkt från början till slut. Lokalerna är vackra och avslappnande, personalen är vänlig och professionell, och resultaten av min behandling var fantastiska.",
      rating: 5,
      image: "/placeholder.svg?height=400&width=400&text=Johan",
      treatment: "Laser",
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("testimonialsTitle")}</h1>
            <p className="text-xl text-muted-foreground">{t("testimonialsSubtitle")}</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-primary">{testimonial.treatment}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-4 flex-grow">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
    </div>
  )
}
