"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "@/components/language-provider"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage, t } = useTranslation()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLanguage(language === "en" ? "sv" : "en")}
      className="rounded-full"
      aria-label={t("toggleLanguage")}
    >
      <Globe className="h-5 w-5" />
    </Button>
  )
}
