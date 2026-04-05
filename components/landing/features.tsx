"use client"

import { motion } from "framer-motion"
import {
  RiRobot2Line,
  RiTerminalBoxLine,
  RiComputerLine,
  RiExchangeLine,
  RiFlashlightLine,
  RiOpenSourceLine,
  RiImageLine,
  RiVideoLine,
  RiMagicLine,
  RiFileCopyLine,
  RiArrowRightLine,
  RiGithubLine,
} from "@remixicon/react"
import { useState } from "react"

/* ── Providers Section ─────────────────────────────────────── */

const IMAGE_PROVIDERS = [
  "Flux",
  "SDXL",
  "Stability AI",
  "Replicate",
]

const VIDEO_PROVIDERS = [
  "MiniMax",
  "Wan",
  "Luma",
  "Grok",
  "Runway",
  "Sora 2",
  "Replicate",
]

export function Providers() {
  return (
    <section id="providers" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-heading text-xs font-medium tracking-widest text-primary uppercase">
            Integrations
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            All Providers,{" "}
            <span className="text-gradient">One API Key</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground sm:text-lg">
            Access every major AI generation model through Replicate&apos;s unified API.
            No per-provider keys needed.
          </p>
        </motion.div>

        {/* Provider Groups */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Image Providers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <RiImageLine className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold">Image Generation</h3>
                <p className="text-xs text-muted-foreground">v1 supported</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {IMAGE_PROVIDERS.map((name) => (
                <span key={name} className="provider-badge">
                  {name}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-background/50 p-3 font-heading text-xs text-muted-foreground">
              <span className="terminal-prompt">$ </span>
              <span className="terminal-success">opengen</span>{" "}
              <span className="text-sky-400">image</span>{" "}
              <span className="terminal-string">&quot;prompt&quot;</span>{" "}
              <span className="terminal-flag">--model</span>{" "}
              <span className="terminal-success">flux</span>
            </div>
          </motion.div>

          {/* Video Providers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20">
                <RiVideoLine className="h-5 w-5 text-sky-400" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold">Video Generation</h3>
                <p className="text-xs text-muted-foreground">v1 supported</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {VIDEO_PROVIDERS.map((name) => (
                <span key={name} className="provider-badge">
                  {name}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-background/50 p-3 font-heading text-xs text-muted-foreground">
              <span className="terminal-prompt">$ </span>
              <span className="terminal-success">opengen</span>{" "}
              <span className="text-sky-400">video</span>{" "}
              <span className="terminal-string">&quot;prompt&quot;</span>{" "}
              <span className="terminal-flag">--model</span>{" "}
              <span className="terminal-success">minimax</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Features Section ──────────────────────────────────────── */

const features = [
  {
    icon: RiRobot2Line,
    title: "Agent-Native",
    description:
      "Built for AI agents. Clean JSON output, deterministic exit codes, and progress streaming via stdout.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: RiTerminalBoxLine,
    title: "Universal Interface",
    description:
      "One command pattern for all providers. Switch between Flux, DALL·E, Runway, Kling, and more with a flag.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
  {
    icon: RiComputerLine,
    title: "Cross-Platform",
    description:
      "Same experience on Windows, macOS, and Linux. Works in CI/CD pipelines, containers, and VMs.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    icon: RiExchangeLine,
    title: "Provider Agnostic",
    description:
      "Change providers with one flag. No code changes, no reconfiguration. Just switch and generate.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    icon: RiFlashlightLine,
    title: "Real-time Streaming",
    description:
      "Watch generations in real-time with progress bars for humans and JSON events for agents.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
  {
    icon: RiOpenSourceLine,
    title: "Open Source",
    description:
      "MIT licensed and community-driven. Add your own providers, contribute features, build together.",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-heading text-xs font-medium tracking-widest text-primary uppercase">
            Features
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built for Developers{" "}
            <span className="text-gradient">&amp; Agents</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground sm:text-lg">
            Everything you need for AI media generation, designed to work
            perfectly for both humans and AI agents.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="glass-card group h-full p-6 md:p-7">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${feature.bg} border ${feature.border} transition-transform group-hover:scale-110`}
                >
                  <feature.icon className={`h-5 w-5 ${feature.color}`} />
                </div>
                <h3 className="mt-5 font-heading text-base font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── How It Works ──────────────────────────────────────────── */

const steps = [
  {
    number: "01",
    title: "Install",
    description: "One command to install globally via npm.",
    code: "npm install -g @nathangb/opengen",
    icon: RiTerminalBoxLine,
  },
  {
    number: "02",
    title: "Configure",
    description: "Interactive setup creates your config file.",
    code: "opengen init",
    icon: RiMagicLine,
  },
  {
    number: "03",
    title: "Generate",
    description: "Create images and videos from your terminal.",
    code: 'opengen image "your prompt" --model flux',
    icon: RiFlashlightLine,
  },
]

export function HowItWorks() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-heading text-xs font-medium tracking-widest text-primary uppercase">
            Getting Started
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Up and Running{" "}
            <span className="text-gradient">in Seconds</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="glass-card flex h-full flex-col p-6 md:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-heading text-3xl font-bold text-primary/20">
                    {step.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {step.description}
                </p>
                <div className="mt-4 flex-1">
                  <div className="rounded-lg bg-background/60 px-4 py-3 font-heading text-xs text-muted-foreground border border-border/50">
                    <span className="terminal-prompt">$ </span>
                    <span className="terminal-command">{step.code}</span>
                  </div>
                </div>
              </div>
              {/* Connector line on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Install CTA ───────────────────────────────────────────── */

export function InstallCTA() {
  const [copied, setCopied] = useState(false)

  const copyCommand = () => {
    navigator.clipboard.writeText("npm install -g @nathangb/opengen")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="install" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 text-center backdrop-blur-sm md:p-16"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[80px]" />
          </div>

          <div className="relative">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Start Generating{" "}
              <span className="text-gradient">Today</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground sm:text-lg">
              Install opengen globally and access every major AI media provider
              from your terminal.
            </p>

            {/* Command box */}
            <div className="mx-auto mt-8 max-w-md">
              <button
                onClick={copyCommand}
                className="group flex w-full items-center justify-between gap-4 rounded-xl border border-border bg-background/80 px-5 py-4 text-left font-heading text-sm transition-all hover:border-primary/30 hover:bg-background"
              >
                <div>
                  <span className="terminal-prompt">$ </span>
                  <span className="text-foreground">
                    npm install -g @nathangb/opengen
                  </span>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:text-foreground">
                  {copied ? (
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <RiFileCopyLine className="h-4 w-4" />
                  )}
                </div>
              </button>
              {copied && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs text-primary"
                >
                  Copied to clipboard!
                </motion.p>
              )}
            </div>

            {/* Sub-actions */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="https://github.com/opengen"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <RiGithubLine className="h-4 w-4" />
                Star on GitHub
                <RiArrowRightLine className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </a>
              <span className="hidden text-border sm:inline">·</span>
              <a
                href="#"
                className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Read the Docs
                <RiArrowRightLine className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── JSON Output Preview ───────────────────────────────────── */

const jsonOutput = `{
  "success": true,
  "type": "image",
  "model": "flux",
  "provider": "replicate",
  "output": {
    "path": "/projects/art/cyberpunk-cat.png",
    "url": "https://replicate.delivery/pbxt/...",
    "format": "png",
    "width": 1024,
    "height": 1024
  },
  "metadata": {
    "seed": 12345,
    "steps": 30,
    "inference_time_ms": 5420
  }
}`

export function JsonPreview() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading text-xs font-medium tracking-widest text-primary uppercase">
              Agent-Native Output
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Structured JSON for{" "}
              <span className="text-gradient">Every Response</span>
            </h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Every generation returns clean, deterministic JSON. AI agents like
              Claude Code, Cursor, and OpenClaw can parse outputs programmatically.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Deterministic exit codes (0=success, 1=error, 2=rate-limit)",
                "Structured error responses with retry guidance",
                "Real-time progress events streamed to stdout",
                "Works in CI/CD, containers, and headless environments",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* JSON Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-auto font-heading text-xs text-muted-foreground/50">
                  output.json
                </span>
              </div>
              <div className="terminal-body !text-xs !leading-[1.65]">
                <pre className="overflow-x-auto">
                  <code>
                    {jsonOutput.split("\n").map((line, i) => {
                      // Simple syntax highlighting
                      const highlighted = line
                        .replace(
                          /("[\w_]+")\s*:/g,
                          '<key>$1</key>:'
                        )
                      return (
                        <div key={i}>
                          {line.includes('"') ? (
                            <span>
                              {line.split(/(".*?")/g).map((part, j) => {
                                if (part.match(/^".*"$/) && line.includes(part + ':')) {
                                  return (
                                    <span key={j} className="text-sky-400">
                                      {part}
                                    </span>
                                  )
                                }
                                if (part.match(/^".*"$/)) {
                                  return (
                                    <span key={j} className="terminal-string">
                                      {part}
                                    </span>
                                  )
                                }
                                // Check for numbers and booleans
                                const numHighlighted = part.replace(
                                  /\b(true|false|null|\d+)\b/g,
                                  '\u0000$1\u0001'
                                )
                                return numHighlighted.split(/\u0000|\u0001/).map((segment, k) => {
                                  if (segment.match(/^(true|false|null|\d+)$/)) {
                                    return (
                                      <span key={`${j}-${k}`} className="text-amber-400">
                                        {segment}
                                      </span>
                                    )
                                  }
                                  return <span key={`${j}-${k}`}>{segment}</span>
                                })
                              })}
                            </span>
                          ) : (
                            <span>
                              {line.replace(
                                /\b(true|false|null|\d+)\b/g,
                                ''
                              )}
                              {line.match(/\b(true|false|null|\d+)\b/g)?.map((m, j) => (
                                <span key={j} className="text-amber-400">{m}</span>
                              ))}
                              {!line.match(/\b(true|false|null|\d+)\b/) && line}
                            </span>
                          )}
                        </div>
                      )
                    })}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
