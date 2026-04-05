# OpenGen CLI

A universal, agent-native CLI that aggregates AI image and video generation providers behind a single, consistent command interface.

## Installation

```bash
npm install -g opengen
```

## Setup

Run the interactive setup to configure your Replicate API token and default models:

```bash
opengen init
```

*Alternatively, you can set the `REPLICATE_API_TOKEN` environment variable.*

## Usage

### Image Generation

```bash
opengen image "a cyberpunk cat riding a motorcycle" --model flux
```

### Video Generation

```bash
opengen video "drone flying through neon Tokyo" --model minimax --duration 5
```

### List Models

```bash
opengen models
```

## Agent-Native Features

OpenGen is designed to be easily used by AI agents:

- `--json` flag to force structured JSON output instead of TTY UI.
- Deterministic exit codes corresponding to different error cases.
- Easy to pipe standard output for streaming updates and completion.

## License

MIT
