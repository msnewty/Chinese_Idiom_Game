# 猜字乐 · Guess the Character

A Chinese game built with love for my father.

My father is in his 80s and was diagnosed with dementia. He has always had a deep love for the Chinese language and history — reciting poems, trading proverbs, debating idioms. He spends a lot of time at home, and this game was created to give him something engaging and enjoyable to do on his own.

猜字乐 grew out of that. It takes the poems, idioms and proverbs he has known his whole life and turns them into a gentle daily game — something he can pick up on his own, at his own pace, with no pressure and no confusion.

No ads. No accounts. No internet needed after first load. Just a clean, calming game on his tablet that keeps his mind engaged and his love for the language alive.

_May eventually be published to the Google Play Store to share with other families in a similar situation._


---

## What's in the game

**566 questions** across three categories:

- 📗 **古诗词** — Famous classical poem and ci poetry lines (李白, 杜甫, 苏轼, 李清照, 岳飞 and more)
- 📕 **成语** — Well-known 4-character idioms with story explanations
- 📘 **谚语** — Common proverbs and folk sayings

Each phrase has **2–3 meaningful blank positions** so the same question can appear differently on repeat plays.

After every correct answer, a plain-language explanation is shown. Wrong answers also show the explanation — so it's a learning experience.

---

## How it works

- Fill in the missing character by tapping one of four options
- Streak counter tracks consecutive correct answers
- Best streak is saved and remembered across sessions
- Every 10 correct answers triggers a celebration screen
- 🏆 Gold banner flashes when a new streak record is broken
- Difficulty starts easy (first 50 questions are Level 1) then gradually mixes in harder ones — silently, no labels shown

---

## Settings

- **Font size slider** — adjustable for elderly users
- **Category toggles** — turn 古诗词 / 成语 / 谚语 on or off individually
- **Reset progress** — clears streak and best score

---

## Tech stack

- Pure HTML, CSS, JavaScript — no framework, no build step
- Three files: `index.html` (UI + game engine), `data.js` (questions), `manifest.json` (PWA)
- Deployed on **Vercel**, source on **GitHub**
- Auto-deploys on every commit to `main`
- Works as a **PWA** — installable from browser, runs fullscreen, works offline after first load

---

## Files

| File | Description |
|------|-------------|
| `index.html` | All UI, CSS, and game logic |
| `data.js` | 566 question variants across 3 categories |
| `manifest.json` | PWA configuration |
| `MaShanZheng.woff2` | Embedded calligraphy font (offline support) |

---

## Design

- **Parchment & ink** aesthetic — calligraphy scroll feel, warm cream background
- **Ma Shan Zheng** brush font for all Chinese characters
- Subtle background images matching each question's theme
- Large tap targets and big text — designed for elderly users
- No timer, no lives, no game over — just calm and continuous play

---

## Deployment

Hosted at: `chinese-idiom-game.vercel.app`

To update: edit files in GitHub → Vercel auto-deploys within 30 seconds.

To install on tablet: open URL in Chrome → three-dot menu → Add to Home Screen → 猜字乐

---
