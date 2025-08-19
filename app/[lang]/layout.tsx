import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"



const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Delivery-car-in.ua - Пригон авто з США",
  description: "Імпорт авто з США, Канади, Європи та Китаю — швидко, надійно, вигідно.",
}

export async function generateStaticParams() {
  return [{ lang: "ua" }, { lang: "ru" }, { lang: "en" }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: "ua" | "ru" | "en" }>
}) {
  const { lang } = await params

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
