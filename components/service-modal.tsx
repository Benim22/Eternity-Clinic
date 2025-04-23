import React from "react"
import { Button } from "@/components/ui/button"
import { Clock, X, CheckCircle2, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type ServiceData = {
  id: string
  title: string
  description: string
  icon?: string
  fullDescription?: string
  benefits?: string[]
  duration?: string
  price?: string
  recommended?: boolean
}

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  service: ServiceData
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  // Stoppa scrollning på body när modalen är öppen
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Hantera stängning när man trycker på Escape-tangenten
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative bg-background rounded-xl shadow-lg max-w-xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Stäng-knapp */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 rounded-full"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Stäng</span>
            </Button>
            
            <div className="p-6">
              {/* Icon och titel */}
              <div className="flex items-center gap-4 mb-6">
                {service.icon && (
                  <div className="text-4xl">{service.icon}</div>
                )}
                <h2 className="text-2xl font-bold">{service.title}</h2>
                {service.recommended && (
                  <span className="bg-primary/20 text-primary text-xs font-medium px-2 py-1 rounded-full ml-auto">
                    Rekommenderad
                  </span>
                )}
              </div>
              
              {/* Beskrivning */}
              <p className="text-muted-foreground mb-8">
                {service.fullDescription || service.description}
              </p>
              
              {/* Info om pris och tid */}
              <div className="flex flex-wrap gap-6 mb-8">
                {service.duration && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span>{service.duration}</span>
                  </div>
                )}
                {service.price && (
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-muted-foreground" />
                    <span>Från {service.price} kr</span>
                  </div>
                )}
              </div>
              
              {/* Fördelar */}
              {service.benefits && service.benefits.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Fördelar</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Knappar */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button className="flex-1" onClick={onClose}>
                  Stäng
                </Button>
                <Button asChild className="flex-1" variant="outline">
                  <a href="/booking">Boka nu</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
} 