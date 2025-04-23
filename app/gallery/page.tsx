"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useTranslation } from "@/components/language-provider"
import { motion } from "framer-motion"

export default function GalleryPage() {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>("all")

  const categories = [
    { id: "all", label: t("all") },
    { id: "botox", label: t("botox") },
    { id: "fillers", label: t("fillers") },
    { id: "microneedling", label: t("microneedling") },
    { id: "microblading", label: t("microblading") },
    { id: "laser", label: t("laser") },
  ]

  const galleryImages = [
    {
      id: 1,
      src: "/images/laser-treatment-1.jpg",
      alt: "Laser Treatment",
      category: "laser",
    },
    {
      id: 2,
      src: "/images/laser-treatment-2.jpg",
      alt: "Laser Treatment",
      category: "laser",
    },
    {
      id: 3,
      src: "/images/laser-treatment-3.jpg",
      alt: "Laser Treatment",
      category: "laser",
    },
    {
      id: 4,
      src: "/images/laser-treatment-4.jpg",
      alt: "Laser Treatment",
      category: "laser",
    },
    {
      id: 5,
      src: "/images/laser-treatment-1.jpg",
      alt: "Microneedling Treatment",
      category: "microneedling",
    },
    {
      id: 6,
      src: "/images/laser-treatment-2.jpg",
      alt: "Botox Treatment",
      category: "botox",
    },
    {
      id: 7,
      src: "/images/laser-treatment-3.jpg",
      alt: "Fillers Treatment",
      category: "fillers",
    },
    {
      id: 8,
      src: "/images/laser-treatment-4.jpg",
      alt: "Microneedling Treatment",
      category: "microneedling",
    },
    {
      id: 9,
      src: "/images/laser-treatment-1.jpg",
      alt: "Microblading Treatment",
      category: "microblading",
    },
    {
      id: 10,
      src: "/images/laser-treatment-2.jpg",
      alt: "Laser Treatment",
      category: "laser",
    },
    {
      id: 11,
      src: "/images/laser-treatment-3.jpg",
      alt: "Botox Treatment",
      category: "botox",
    },
    {
      id: 12,
      src: "/images/laser-treatment-4.jpg",
      alt: "Fillers Treatment",
      category: "fillers",
    },
  ]

  const filteredImages = filter === "all" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("galleryTitle")}</h1>
            <p className="text-xl text-muted-foreground">{t("gallerySubtitle")}</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <motion.div
                layout
                key={image.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-foreground/0 hover:bg-foreground/20 transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
