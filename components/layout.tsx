"use client";

import type React from "react";
import { useState } from "react";
import { Car, Phone, Mail, MapPin, Menu, X } from "lucide-react";
import LanguageSwitcher from "./language-switcher";
import ThemeSwitcher from "./theme-switcher";
import Link from "next/link";
import "../styles/globals.css";
import HexParticles from "./HexParticles";

interface LayoutProps {
  children: React.ReactNode;
  lang: "ua" | "ru" | "en";
  dict: any;
}

export default function Layout({ children, lang, dict }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Фон */}
      <div
        className="fixed inset-0 -z-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />
      <div className="fixed inset-0 -z-20 bg-white/20 backdrop-blur" />

      {/* Частинки */}
      <HexParticles />

      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Delivery-Car.in.ua</span>
          </div>

          {/* Навігація */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href={`/${lang}`} className="text-foreground hover:text-primary transition-colors">
              {dict.nav.home}
            </Link>
            <Link href={`/${lang}/services`} className="text-foreground hover:text-primary transition-colors">
              {dict.nav.services}
            </Link>
            <Link href={`/${lang}/about`} className="text-foreground hover:text-primary transition-colors">
              {dict.nav.about}
            </Link>
            <Link href={`/${lang}/contact`} className="text-foreground hover:text-primary transition-colors">
              {dict.nav.contact}
            </Link>
            <Link
              href={`/${lang}/calculator`}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              {dict.nav.calculator}
            </Link>
          </nav>

          {/* Мовний перемикач, тема, телефон */}
          <div className="flex items-center space-x-4">
            <a href="tel:+380977172121" className="hidden md:inline-flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+380 97 717 21 21</span>
            </a>
            <LanguageSwitcher currentLang={lang} />
            <ThemeSwitcher />

            {/* Гамбургер */}
            <button className="md:hidden text-foreground hover:text-primary transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Мобільне меню */}
        {menuOpen && (
          <nav className="md:hidden mt-4 space-y-3 px-4">
            {[["home", ""], ["services", "services"], ["about", "about"], ["contact", "contact"], ["calculator", "calculator"]].map(([key, path]) => (
              <Link key={key} href={`/${lang}/${path}`} className="block text-foreground hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>
                {dict.nav[key]}
              </Link>
            ))}
            <a href="tel:+380977172121" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+380 97 717 21 21</span>
            </a>
          </nav>
        )}
      </header>

      {/* Main */}
      <main className="container mx-auto px-4 py-8">{children}</main>

      {/* Footer */}
      <footer className="bg-muted mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Car className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Delivery-Car.in.ua</span>
              </div>
              <p className="text-muted-foreground mb-4">{dict.footer.description}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакти</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                {dict.footer.contacts.map((c: string, i: number) => (
                  <div key={i} className="flex items-center space-x-2">
                    {i === 0 && <Phone className="h-4 w-4" />}
                    {i === 1 && <Mail className="h-4 w-4" />}
                    {(i === 2 || i === 3) && <MapPin className="h-4 w-4" />}
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Послуги</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                {dict.footer.services.map((s: string, i: number) => (
                  <div key={i}>{s}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Delivery-Car.in.ua. {dict.footer.rights}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
// Компонент Layout забезпечує загальну структуру сторінки з хедером, футером та фоном.