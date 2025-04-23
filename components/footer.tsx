"use client"

import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTranslation } from "@/components/language-provider"

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-playfair text-xl font-bold">Eternity Clinic</h3>
            <p className="text-muted-foreground text-sm max-w-xs">{t("aboutText")}</p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">{t("services")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#botox" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("botox")}
                </Link>
              </li>
              <li>
                <Link href="/services#fillers" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("fillers")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services#microneedling"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("microneedling")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services#microblading"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("microblading")}
                </Link>
              </li>
              <li>
                <Link href="/services#laser" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("laser")}
                </Link>
              </li>
              <li>
                <Link href="/services#massage" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("massage")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">{t("contact")}</h4>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>Kantatgatan 39</p>
              <p>Lindängen, Malmö</p>
              <p>
                <a href="tel:+46764020694" className="hover:text-primary transition-colors">
                  076 402 0694
                </a>
              </p>
              <p>
                <a href="mailto:izabelabogusz@yahoo.com" className="hover:text-primary transition-colors">
                  izabelabogusz@yahoo.com
                </a>
              </p>
            </address>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">{t("openingHours")}</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex justify-between">
                <span>{t("monday")}</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t("tuesday")}</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t("wednesday")}</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t("thursday")}</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t("friday")}</span>
                <span>9:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t("saturday")}</span>
                <span>10:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t("sunday")}</span>
                <span>{t("closed")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p>
              &copy; {currentYear} Eternity Clinic. {t("poweredBy")} Vercel
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                {t("privacyPolicy")}
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                {t("terms")}
              </Link>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
