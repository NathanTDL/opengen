"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import {
  RiArrowRightLine,
  RiGithubLine,
  RiStarLine,
} from "@remixicon/react"

/* ── Terminal Animation Data ──────────────────────────────── */

const COMMAND_PARTS = [
  { text: "$ ", cls: "terminal-prompt" },
  { text: "opengen ", cls: "terminal-success" },
  { text: "image ", cls: "text-sky-400" },
  { text: '"cyberpunk cat riding a motorcycle"', cls: "terminal-string" },
  { text: " --model ", cls: "terminal-flag" },
  { text: "flux", cls: "terminal-success" },
]

const FULL_COMMAND = COMMAND_PARTS.map((p) => p.text).join("")

const OUTPUT_LINES = [
  { text: "  ⠋ Generating with Flux...", cls: "terminal-flag", delay: 400 },
  { text: "  ⠹ Inference step 15/30...", cls: "terminal-flag", delay: 800 },
  { text: "  ⠸ Inference step 30/30...", cls: "terminal-flag", delay: 600 },
  { text: "", cls: "", delay: 300 },
  { text: "  ✅ Generated successfully!", cls: "terminal-success", delay: 200 },
  { text: "", cls: "", delay: 100 },
  { text: "  📁 ./cyberpunk-cat.png", cls: "terminal-command", delay: 150 },
  {
    text: "  🔗 https://fal.ai/results/abc123...",
    cls: "text-sky-400/70",
    delay: 150,
  },
  { text: "", cls: "", delay: 100 },
  {
    text: "  ✨ Done in 5.2s  |  💰 2.5 credits",
    cls: "terminal-command",
    delay: 0,
  },
]

/* ── Terminal Component ───────────────────────────────────── */

function TerminalAnimation() {
  const [charIndex, setCharIndex] = useState(0)
  const [visibleLines, setVisibleLines] = useState(0)
  const [phase, setPhase] = useState<"typing" | "output" | "done">("typing")

  const resetAnimation = useCallback(() => {
    setCharIndex(0)
    setVisibleLines(0)
    setPhase("typing")
  }, [])

  // Typing phase
  useEffect(() => {
    if (phase !== "typing") return
    if (charIndex >= FULL_COMMAND.length) {
      const timeout = setTimeout(() => setPhase("output"), 600)
      return () => clearTimeout(timeout)
    }
    const timeout = setTimeout(
      () => setCharIndex((i) => i + 1),
      30 + Math.random() * 25
    )
    return () => clearTimeout(timeout)
  }, [phase, charIndex])

  // Output phase
  useEffect(() => {
    if (phase !== "output") return
    if (visibleLines >= OUTPUT_LINES.length) {
      const timeout = setTimeout(() => setPhase("done"), 4000)
      return () => clearTimeout(timeout)
    }
    const line = OUTPUT_LINES[visibleLines]
    const timeout = setTimeout(
      () => setVisibleLines((l) => l + 1),
      line?.delay ?? 200
    )
    return () => clearTimeout(timeout)
  }, [phase, visibleLines])

  // Loop
  useEffect(() => {
    if (phase !== "done") return
    const timeout = setTimeout(resetAnimation, 1000)
    return () => clearTimeout(timeout)
  }, [phase, resetAnimation])

  // Render command text with syntax highlighting up to charIndex
  const renderCommand = () => {
    let rendered = 0
    return COMMAND_PARTS.map((part, i) => {
      const partStart = rendered
      rendered += part.text.length
      if (charIndex <= partStart) return null
      const visibleText = part.text.slice(
        0,
        Math.min(part.text.length, charIndex - partStart)
      )
      return (
        <span key={i} className={part.cls}>
          {visibleText}
        </span>
      )
    })
  }

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dot terminal-dot-red" />
        <div className="terminal-dot terminal-dot-yellow" />
        <div className="terminal-dot terminal-dot-green" />
        <span className="ml-auto font-heading text-xs text-muted-foreground/50">
          terminal
        </span>
      </div>
      <div className="terminal-body">
        <div className="flex items-start">
          <span className="shrink-0">{renderCommand()}</span>
          {phase === "typing" && (
            <span className="cursor-blink ml-px inline-block h-[18px] w-[8px] translate-y-[1px] bg-primary/80" />
          )}
        </div>

        {phase !== "typing" && (
          <div className="mt-3 space-y-0.5">
            {OUTPUT_LINES.slice(0, visibleLines).map((line, i) => (
              <div
                key={i}
                className={`${line.cls} ${line.text === "" ? "h-3" : ""}`}
              >
                {line.text}
              </div>
            ))}
            {phase === "output" && visibleLines < OUTPUT_LINES.length && (
              <span className="cursor-blink ml-4 inline-block h-[18px] w-[8px] bg-primary/60" />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Hero Section ─────────────────────────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
      {/* Background effects */}
      <div className="hero-gradient pointer-events-none absolute inset-0" />
      <div className="hero-grid pointer-events-none absolute inset-0" />

      {/* Floating glow orbs */}
      <div className="animate-glow pointer-events-none absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      <div
        className="animate-glow pointer-events-none absolute right-1/4 bottom-1/3 h-[300px] w-[300px] rounded-full blur-[80px]"
        style={{
          background: "oklch(0.6 0.12 220 / 0.04)",
          animationDelay: "2s",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <a
            href="https://github.com/opengen"
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/30 hover:text-foreground"
          >
            <RiStarLine className="h-3.5 w-3.5 text-primary" />
            <span>Open Source · MIT License</span>
            <RiArrowRightLine className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-heading text-5xl leading-[1.1] font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-[80px]"
        >
          <span className="text-gradient-subtle">One CLI to Generate</span>
          <br />
          <span className="text-gradient">All AI Media</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg md:mt-8 md:text-xl"
        >
          A universal, agent-native CLI that aggregates AI image and video
          generation providers behind a{" "}
          <span className="text-foreground/80">single command interface</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 md:mt-10"
        >
          <a
            href="#install"
            className="group flex h-12 items-center gap-2.5 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-110 hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98]"
          >
            Get Started
            <RiArrowRightLine className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://github.com/opengen"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-12 items-center gap-2.5 rounded-xl border border-border bg-card/50 px-7 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-border/80 hover:bg-accent active:scale-[0.98]"
          >
            <RiGithubLine className="h-4 w-4" />
            View on GitHub
          </a>
        </motion.div>

        {/* Terminal */}
        <motion.div
          variants={itemVariants}
          className="mt-14 w-full max-w-2xl md:mt-16"
        >
          <div className="animate-float">
            <TerminalAnimation />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
