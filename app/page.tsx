import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import {
  Providers,
  Features,
  HowItWorks,
  InstallCTA,
  JsonPreview,
} from "@/components/landing/features"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />

      <div className="section-divider" />
      <Providers />

      <div className="section-divider" />
      <Features />

      <div className="section-divider" />
      <JsonPreview />

      <div className="section-divider" />
      <HowItWorks />

      <div className="section-divider" />
      <InstallCTA />

      <Footer />
    </main>
  )
}
