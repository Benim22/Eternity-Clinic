"use client"

import type React from "react"

import { useState } from "react"
import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function BookingPage() {
  const { t } = useTranslation()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  const treatments = [
    { value: "botox", label: t("botox") },
    { value: "fillers", label: t("fillers") },
    { value: "microneedling", label: t("microneedling") },
    { value: "microblading", label: t("microblading") },
    { value: "laser", label: t("laser") },
    { value: "massage", label: t("massage") },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("bookingTitle")}</h1>
            <p className="text-xl text-muted-foreground">{t("bookingSubtitle")}</p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-xl">
              <CardContent className="p-6 md:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Tack för din bokning!</h3>
                    <p className="text-muted-foreground">
                      Vi kommer att kontakta dig inom kort för att bekräfta din tid.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("fullName")}</Label>
                        <Input id="name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("phone")}</Label>
                        <Input id="phone" type="tel" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("email")}</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="treatment">{t("treatment")}</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder={t("treatment")} />
                          </SelectTrigger>
                          <SelectContent>
                            {treatments.map((treatment) => (
                              <SelectItem key={treatment.value} value={treatment.value}>
                                {treatment.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>{t("bookingTitle")}</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Välj datum</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="message">{t("message")}</Label>
                        <Textarea id="message" rows={4} />
                      </div>
                    </div>
                    <Button type="submit" className="w-full rounded-full" size="lg">
                      {t("submit")}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
