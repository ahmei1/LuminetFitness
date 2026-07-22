# Luminet Fitness V2

Personal fitness companion — plan workouts, log lifts, track progress, and keep a streak. Accounts sync your dashboard data through a local Express API.

## Features

- **Auth** — signup / login with JWT
- **Cloud dashboard** — exercises, weekly schedule, challenges, and streak per user
- **Progress charts** — weight and volume over time per exercise
- **Personal records** — auto-updated from your logs
- **Rest timer** — 60 / 90 / 120s presets between sets
- **Body weight log** — simple trend line
- **Workout explorer** — browse by muscle group and add to today’s log
- **BMR calculator** — resting calorie estimate

## Stack

- React 19 + Vite + Tailwind CSS 4 + Chart.js
- Express + Prisma + SQLite + JWT (in `/server`)

## Setup

```bash
# Install frontend + server dependencies
npm install

# Create / update the SQLite database
npm run db:push

# Run web + API together
npm run dev:all
```

- App: http://localhost:5173  
- API: http://localhost:4000  

Or run them separately:

```bash
npm run server:dev   # API on :4000
npm run dev          # Vite on :5173 (proxies /api → :4000)
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Frontend only |
| `npm run server:dev` | API with file watch |
| `npm run dev:all` | Both concurrently |
| `npm run db:push` | Apply Prisma schema to SQLite |
| `npm run build` | Production frontend build |

## Notes

- Dashboard routes require login.
- On first login, if your cloud data is empty and old browser `localStorage` data exists, it is imported once.
- SQLite file lives at `server/prisma/dev.db` (gitignored).
- Set `JWT_SECRET` in the environment for production.
