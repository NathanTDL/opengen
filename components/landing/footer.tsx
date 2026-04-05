"use client"

import { motion } from "framer-motion"
import {
  RiGithubLine,
  RiTwitterXLine,
  RiDiscordLine,
  RiTerminalBoxLine,
  RiHeartLine,
} from "@remixicon/react"

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Providers", href: "#providers" },
    { label: "Install", href: "#install" },
    { label: "Changelog", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Examples", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Community: [
    { label: "GitHub", href: "https://github.com/opengen" },
    { label: "Discord", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Contributing", href: "#" },
  ],
}

const socialLinks = [
  { icon: RiGithubLine, href: "https://github.com/opengen", label: "GitHub" },
  { icon: RiTwitterXLine, href: "#", label: "Twitter" },
  { icon: RiDiscordLine, href: "#", label: "Discord" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="/" className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                  <RiTerminalBoxLine className="h-4 w-4 text-primary" />
                </div>
                <span className="font-heading text-lg font-semibold tracking-tight">
                  opengen
                </span>
              </a>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                A universal, agent-native CLI for AI media generation.
                One command to access all providers.
              </p>
              <div className="mt-6 flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
                  >
                    <social.icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            >
              <h3 className="font-heading text-sm font-semibold">{title}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} opengen. MIT License.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Made with{" "}
            <RiHeartLine className="h-3 w-3 text-rose-400" />{" "}
            for developers &amp; agents
          </p>
        </div>
      </div>
    </footer>
  )
}
