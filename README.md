# BULLION — The First The Black Bull Billion Dollar

Single-page **paper / banknote** themed website for the **BULLION** meme token on Solana (pump.fun).

## Run locally

Open `index.html` in your browser, or:

```bash
npx serve .
```

Live Server port in `.vscode/settings.json` is **5502**.

## Before launch — edit `script.js`

Replace placeholders in `CONFIG`:

| Field | Purpose |
|-------|---------|
| `contractAddress` | Solana token CA |
| `links.buyPrimary` | Pump.fun buy URL |
| `links.dexscreenerEmbed` | Dexscreener chart embed URL |
| `links.dexscreenerPage` | Dexscreener token page |
| `links.twitter` | X / Twitter community |
| `links.telegram` | Telegram group |

## Assets

| File | Usage |
|------|--------|
| `logo.png` | Header, hero card, favicon |
| `banner.png` | Community section + video poster |
| `assets/hero-bg.mp4` | Optional AI cinematic background video |

If no video is present, the hero plays an animated fallback (Solana → pump.fun → Black Bull → CT → BULLION).

## Generate the background video

Use any AI video tool (Runway, Kling, Pika, etc.) with a prompt like:

> Cinematic montage: Solana blockchain glow, pump.fun launch energy, black bull charging through neon city, crypto Twitter timeline on dark screen, money bills raining, Ansem silhouette with Black Bull billion-dollar currency, film grain, epic orchestral mood, 16:9

Save the output as `assets/hero-bg.mp4`.
