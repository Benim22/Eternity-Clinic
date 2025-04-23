"use client"

import type React from "react"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useTranslation } from "@/components/language-provider"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const { t } = useTranslation()

  const mapRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  const isMapInView = useInView(mapRef, { once: true, amount: 0.3 })
  const isFormInView = useInView(formRef, { once: true, amount: 0.3 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    alert("Tack för ditt meddelande! Vi återkommer så snart som möjligt.")
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("contactTitle")}</h1>
            <p className="text-xl text-muted-foreground">{t("contactSubtitle")}</p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("address")}</h3>
                <p className="text-muted-foreground">
                  Kantatgatan 39
                  <br />
                  Lindängen, Malmö
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("phone")}</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+46764020694" className="hover:text-primary transition-colors">
                    076 402 0694
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("email")}</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:izabelabogusz@yahoo.com" className="hover:text-primary transition-colors">
                    izabelabogusz@yahoo.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map and Hours Section */}
      <section ref={mapRef} className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isMapInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2257.8155088594344!2d13.0253!3d55.5631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a16a2f39d92f%3A0x4019078290e7a70!2sKantatgatan%2039%2C%20215%2074%20Malm%C3%B6!5e0!3m2!1sen!2sse!4v1650000000000!5m2!1sen!2sse"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eternity Clinic Location"
              ></iframe>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isMapInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold">{t("openingHours")}</h2>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between pb-2 border-b">
                  <span>{t("monday")}</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>{t("tuesday")}</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>{t("wednesday")}</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>{t("thursday")}</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>{t("friday")}</span>
                  <span>9:00 - 17:00</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>{t("saturday")}</span>
                  <span>10:00 - 15:00</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>{t("sunday")}</span>
                  <span>{t("closed")}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Skicka ett meddelande</h2>
              <p className="text-muted-foreground">
                Har du frågor eller vill boka en tid? Fyll i formuläret nedan så återkommer vi så snart som möjligt.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-none shadow-xl">
                <CardContent className="p-6 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">{t("fullName")}</Label>
                        <Input id="contact-name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">{t("email")}</Label>
                        <Input id="contact-email" type="email" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-subject">Ämne</Label>
                      <Input id="contact-subject" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-message">{t("message")}</Label>
                      <Textarea id="contact-message" rows={6} required />
                    </div>
                    <Button type="submit" className="w-full rounded-full" size="lg">
                      {t("submit")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
