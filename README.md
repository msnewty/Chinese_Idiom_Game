# 猜字乐 · Guess the Character

A Chinese game built with love for my father.

My father is in his 80s and was diagnosed with dementia. He has always had a deep love for the Chinese language and history — reciting poems, trading proverbs, debating idioms. He spends a lot of time at home, and this game was created to give him something engaging and enjoyable to do on his own.

猜字乐 grew out of that. It takes the poems, idioms and proverbs he has known his whole life and turns them into a gentle daily game — something he can pick up on his own, at his own pace, with no pressure and no confusion.

No ads. No accounts. No internet needed after first load. Just a clean, calming game on his tablet that keeps his mind engaged and his love for the language alive.

_May eventually be published to the Google Play Store to share with other families in a similar situation._

---

## Live Deployments

| Platform | URL | Notes |
|---|---|---|
| **Vercel** | `chinese-idiom-game.vercel.app` | Auto-deploys on every push to `main` |
| **Manus** | *(see Manus project dashboard)* | Full offline PWA with service worker; built-in analytics |

Both deployments are kept in sync with the GitHub repository. Vercel is the primary deployment for day-to-day use; Manus provides built-in analytics and an alternative hosting option.

---

## What's in the game

**Two game modes:**

- 📜 **诗词成语** — Classical poems, 4-character idioms, and folk proverbs
- 🏯 **中国历史** — Chinese dynasties, historical figures, and events

**566 literary questions** across three categories:

- 📗 **古诗词** — Famous classical poem and ci poetry lines (李白, 杜甫, 苏轼, 李清照, 岳飞 and more)
- 📕 **成语** — Well-known 4-character idioms with story explanations
- 📘 **谚语** — Common proverbs and folk sayings

Each phrase has **2–3 meaningful blank positions** so the same question can appear differently on repeat plays.

After every answer — correct or wrong — a plain-language explanation is shown. So it is always a learning experience, never just a right/wrong judgment.

---

## How it works

- Fill in the missing character by tapping one of four options
- Streak counter tracks consecutive correct answers; resets with a brief red flash on a wrong answer
- Best streak is saved and remembered across sessions
- Every 10 correct answers triggers a celebration screen
- 🏆 Gold banner flashes when a new streak record is broken
- Difficulty starts easy (first 50 questions are Level 1) then gradually mixes in harder ones — silently, no labels shown

---

## Settings

- **Font size slider** — adjustable for elderly users
- **Category toggles** — turn 古诗词 / 成语 / 谚语 on or off individually
- **Background music toggle** — off by default; two original AI-generated tracks (one per mode)
- **Reset progress** — clears streak and best score

---

## Tech stack

- Pure HTML, CSS, JavaScript — no framework, no build step
- Three core files: `index.html` (UI + game engine), `data.js` (literary questions), `data-history.js` (history questions), `manifest.json` (PWA)
- Deployed on **Vercel** (auto-deploy) and **Manus** (with service worker for full offline support)
- Works as a **PWA** — installable from browser, runs fullscreen, works fully offline after first load

---

## Files

| File | Description |
|------|-------------|
| `index.html` | All UI, CSS, and game logic |
| `data.js` | 566 literary question variants (poems, idioms, proverbs) |
| `data-history.js` | History mode questions (dynasties, figures, events) |
| `manifest.json` | PWA configuration |
| `MaShanZheng-Regular.ttf` | Local calligraphy font (offline fallback) |
| `music-literary.mp3` | Background music for literary mode (AI-generated guqin/dizi) |
| `music-history.mp3` | Background music for history mode (AI-generated pipa/erhu) |
| `icon-192.png` | PWA home screen icon (192×192) |
| `icon-512.png` | PWA splash screen icon (512×512) |
| `sw.js` | *(Manus deployment only)* Service worker for full offline pre-caching |

---

## Design

- **Parchment & ink** aesthetic for literary mode — calligraphy scroll feel, warm cream background
- **Imperial red & gold** aesthetic for history mode — deep crimson with gold accents
- **Ma Shan Zheng** brush font for all Chinese characters
- Large tap targets and big text — designed for elderly users
- No timer, no lives, no game over — just calm and continuous play
- No tap-to-continue anywhere — all transitions are automatic to avoid confusion

---

## Deployment

### Vercel (primary)

Hosted at: `chinese-idiom-game.vercel.app`

To update: edit files in GitHub → Vercel auto-deploys within 30 seconds.

### Manus (secondary)

Managed via the Manus project dashboard. To update: make changes in Manus and publish, or sync from GitHub.

### Install on tablet

Open the URL in Chrome → three-dot menu → **Add to Home Screen** → 猜字乐

The game will install as a fullscreen app and work completely offline after the first load.

---

Updated: May 2026
