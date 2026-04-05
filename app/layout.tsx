import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const geistMonoHeading = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "opengen — One CLI to Generate All AI Media",
  description:
    "A universal, agent-native CLI that aggregates AI image and video generation providers behind a single, consistent command interface. Install with npm and access Flux, DALL·E, Runway, Kling, Sora, Veo and more.",
  keywords: [
    "opengen",
    "AI",
    "CLI",
    "image generation",
    "video generation",
    "terminal",
    "agent-native",
    "fal-ai",
    "Flux",
    "DALL-E",
    "Runway",
    "Kling",
    "Sora",
    "Veo",
  ],
  openGraph: {
    title: "opengen — One CLI to Generate All AI Media",
    description:
      "Universal CLI for AI image and video generation. One command, all providers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "opengen — One CLI to Generate All AI Media",
    description:
      "Universal CLI for AI image and video generation. One command, all providers.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
        geistMonoHeading.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
