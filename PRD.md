# opengen — Product Requirements Document

**Version:** 1.0.0  
**Date:** 2026-04-05  
**License:** MIT

---

## 1. Overview

**Project Name:** opengen  
**Package Name:** `opengen` (npm install -g opengen)  
**Type:** Open-source terminal CLI for AI media generation

**Summary:** A universal, agent-native CLI that aggregates AI image and video generation providers behind a single, consistent command interface. Users type commands; AI agents call it programmatically.

**Vision:** The "t3.Chat for media generation" — one CLI to rule all AI image and video providers.

---

## 2. Generation Scope

| Type | Scope | Implementation |
|------|-------|----------------|
| Image Generation | ✅ v1 | All listed providers |
| Video Generation | ✅ v1 | All listed providers |
| Audio Generation | ❌ Future | Not in v1 |
| 3D Generation | ❌ Future | Not in v1 |

---

## 3. Supported Providers

### Image Providers
- FLUX
- Stable Diffusion
- (Additional via Replicate)

### Video Providers
- Luma (Dream Machine)
- MiniMax
- Grok Imagine Video
- Wan
- Sora 2 (via Replicate)
- (Additional via Replicate)

**Integration Layer:** Replicate as the primary aggregation API.

---

## 4. Platform Support

- ✅ Windows
- ✅ macOS
- ✅ Linux

---

## 5. Command Interface

### Primary Commands

```bash
# Image generation
opengen image "cyberpunk cat riding a motorcycle" --model flux

# Video generation
opengen video "drone flying through neon Tokyo" --model kling
```

### Structure
- **Pattern:** `opengen <type> "<prompt>" --model <provider>`
- **Type:** `image` | `video`
- **Model:** Provider name (e.g., `flux`, `kling`, `sora-2`)

### CLI Flags (Parameters Only)

| Flag | Description | Example |
|------|-------------|---------|
| `--model <name>` | Provider/model to use | `--model flux` |
| `--seed <number>` | Random seed for reproducibility | `--seed 42` |
| `--steps <number>` | Number of inference steps | `--steps 30` |
| `--width <number>` | Output width in pixels | `--width 1024` |
| `--height <number>` | Output height in pixels | `--height 1024` |
| `--json` | Force JSON output | `--json` |
| `--help` | Show help documentation | `--help` |

---

## 6. Configuration

### Config File Location
- Default: `~/.opengen/config.yaml`

### Format: YAML

```yaml
replicate:
  api_token: "your-replicate-api-token"

defaults:
  image_format: "png"
  video_format: "mp4"
  model: "flux"
```

**Note:** Single Replicate API token provides access to ALL providers (Flux, Luma, MiniMax, Grok, etc.) through Replicate's unified API. No per-provider keys needed.

### Onboarding
- Interactive setup via `opengen init`
- Walks user through creating config file
- Validates API keys on first run

---

## 7. Output Handling

### Destination
- Files saved to current working directory (where command is run)
- Example: `cd /projects/art && opengen image "cat" --model flux` saves to `/projects/art/`

### Default Formats
- Images: PNG
- Videos: MP4

### File Naming
- Provider-defined default naming
- User can specify output path

### Post-Generation URL Display
After successful generation, display a **clickable URL** in terminal:
```
✅ Generated successfully!

📁 /projects/art/image.png
🔗 https://fal.ai/results/abc123...  (Cmd+Click to open)

✨ Done in 5.2s | 💰 2.5 credits
```

- **macOS/Linux:** Clickable link (Cmd+Click / Ctrl+Click opens in browser)
- **Windows:** Clickable link in supported terminals (Windows Terminal, VS Code)
- Falls back to plain URL if terminal doesn't support clickable links

### Output Modes

#### Streaming + Final JSON (Default)
1. **During generation:** Progress events to both:
   - stdout: Pretty ASCII progress bars/spinners (TTY)
   - stdout: JSON progress events for agent parsing
2. **On completion:** Final JSON to stdout

#### JSON Output Structure

```json
{
  "success": true,
  "type": "image",
  "model": "flux",
  "provider": "replicate",
  "output": {
    "path": "/absolute/path/to/image.png",
    "url": "https://...",
    "format": "png",
    "width": 1024,
    "height": 1024
  },
  "metadata": {
    "seed": 12345,
    "steps": 30,
    "inference_time_ms": 5420
  },
  "cost": {
    "credits": 2.5,
    "currency": "USD"
  }
}
```

#### Error Structure

```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMITED",
    "message": "Provider rate limit exceeded",
    "provider": "flux",
    "retry_after_seconds": 60
  }
}
```

---

## 8. Error Handling

### Strategy: Structured Errors

All errors returned as JSON with:
- `code`: Machine-readable error code
- `message`: Human-readable description
- `provider`: Which provider failed
- `retry_after_seconds`: If rate limited

### Error Codes
| Code | Meaning |
|------|---------|
| `INVALID_API_KEY` | API key invalid or missing |
| `RATE_LIMITED` | Provider rate limit hit |
| `PROVIDER_DOWN` | Provider service unavailable |
| `INSUFFICIENT_CREDITS` | Not enough credits/quota |
| `INVALID_PARAMETERS` | Invalid generation parameters |
| `NETWORK_ERROR` | Connection failed |
| `TIMEOUT` | Generation timed out |
| `UNKNOWN` | Unexpected error |

### Failure Behavior
- Prompt user for action when provider fails
- Options: Retry, switch provider, switch model, cancel

---

## 9. Async Video Generation

### Strategy: Polling with Status

1. Initiate generation
2. Poll provider API for status updates
3. Stream progress events
4. Download final video when complete
5. Return output path/URL

### Progress Events (JSON to stdout)

```json
{"status": "queued", "provider": "replicate", "job_id": "..."}
{"status": "processing", "progress": 0.45, "provider": "replicate"}
{"status": "completed", "provider": "replicate", "output": {...}}
```

---

## 10. Agent-Native Features

For AI agents (Claude Code, Cursor, OpenClaw, etc.):

| Feature | Implementation |
|---------|----------------|
| JSON output | `--json` flag or stdout pipe detection |
| Progress streaming | JSON events on stdout |
| Deterministic exit codes | 0=success, 1=error, 2=rate limit |
| Clean --help docs | Structured help per command |
| No browser/UI required | Pure terminal operation |
| Environment-agnostic | Works in CI/CD, containers, VMs |

### Exit Codes
| Code | Meaning |
|------|---------|
| 0 | Success |
| 1 | General error |
| 2 | Rate limited (retry available) |
| 3 | Invalid parameters |
| 4 | Authentication failed |

---

## 11. Installation & Distribution

### Primary Method
```bash
npm install -g opengen
```

### Requirements
- Node.js 18+
- npm 8+

### Post-Install
- Run `opengen init` for interactive setup
- Add API keys to `~/.opengen/config.yaml`

---

## 12. Technical Stack

| Component | Technology |
|-----------|------------|
| Language | Node.js / TypeScript |
| Runtime | Node.js 18+ |
| Package Manager | npm |
| Integration | replicate SDK |
| CLI Framework | Commander.js |
| Config Parser | js-yaml |
| HTTP Client | Native fetch |

---

## 13. Project Structure

```
opengen/
├── bin/
│   └── opengen.js          # Entry point
├── src/
│   ├── index.ts            # Main export
│   ├── cli.ts              # CLI command definitions
│   ├── commands/
│   │   ├── image.ts        # Image generation command
│   │   ├── video.ts        # Video generation command
│   │   └── init.ts         # Interactive setup
│   ├── config/
│   │   ├── loader.ts       # Config file loader
│   │   └── validator.ts    # Config validation
│   ├── providers/
│   │   ├── base.ts         # Base provider interface
│   │   ├── replicate.ts    # Replicate integration
│   │   └── index.ts        # Provider registry
│   ├── output/
│   │   ├── formatter.ts    # JSON/TTY formatting
│   │   ├── streamer.ts     # Progress streaming
│   │   └── writer.ts       # File output
│   └── utils/
│       ├── errors.ts       # Error definitions
│       └── logger.ts       # Logging utility
├── package.json
├── tsconfig.json
├── README.md
└── LICENSE
```

---

## 14. Out of Scope for v1

- Image editing / inpainting
- Video editing / post-processing
- Audio generation
- 3D generation
- History database (`/previous` command - stateless)
- Encrypted key vault
- Per-provider environment variables (single YAML config only)

---

## 15. Roadmap (Future Versions)

### v1.1
- Model fallbacks (auto-switch on failure)
- Config presets for parameters

### v1.2
- `/previous` command with SQLite history

### v2.0
- Audio generation
- Image editing/inpainting

---

## 16. Success Criteria

1. **Single command** to generate any supported media type
2. **Zero browser tabs** required for any generation
3. **Agent-callable** with clean JSON output
4. **Provider-agnostic** — change provider with one flag
5. **Community-driven** — open to provider additions
6. **Works cross-platform** — same experience on Windows, macOS, Linux

---

## 17. References

- fal-ai: https://fal.ai
- Example CLI: t3.Chat
- Similar tools: Replicate, API-based generation platforms
