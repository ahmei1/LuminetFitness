# Luminet Fitness V2

Personal fitness companion — plan workouts, log lifts, track progress, and keep a streak. Accounts sync through an Express API + Postgres.

**Live site:** https://luminet-fitness.vercel.app/

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

- React 19 + Vite + Tailwind CSS 4 + Chart.js (Vercel)
- Express + Prisma + PostgreSQL + JWT (`/server`, e.g. Render)

## Local setup

```bash
# 1) Start Postgres
docker compose up -d

# 2) Install deps
npm install

# 3) Server env
cp server/.env.example server/.env

# 4) Create tables
npm run db:push

# 5) Run web + API
npm run dev:all
```

- App: http://localhost:5173  
- API: http://localhost:4000  

Without Docker: create a free [Neon](https://neon.tech) database and put its connection string in `server/.env` as `DATABASE_URL`.

## Production deploy (why Vercel alone is not enough)

Vercel hosts the **frontend only**. The Express API must run on a separate host (Render, Railway, Fly, etc.), and the frontend must know that URL.

### 1) Database (Neon — free)

1. Sign up at https://console.neon.tech  
2. Create a project → copy the **connection string** (`DATABASE_URL`)

### 2) API (Render — free)

1. Go to https://dashboard.render.com → **New** → **Web Service**  
2. Connect the `ahmei1/LuminetFitness` GitHub repo  
3. Settings:
   - **Root Directory:** `server`
   - **Build Command:** `npm install && npx prisma generate`
   - **Start Command:** `npx prisma db push && node src/index.js`
4. Environment variables:
   - `DATABASE_URL` = Neon connection string  
   - `JWT_SECRET` = any long random string  
   - `CORS_ORIGIN` = `https://luminet-fitness.vercel.app`
5. Deploy → copy the service URL, e.g. `https://luminet-fitness-api.onrender.com`  
6. Open `/api/health` — you should see `{ "ok": true, ... }`

Or use the included [`render.yaml`](render.yaml) with Render Blueprint.

### 3) Frontend (Vercel)

1. Vercel → Project → **Settings** → **Environment Variables**  
2. Add:

| Name | Value |
|------|--------|
| `VITE_API_URL` | `https://YOUR-API-NAME.onrender.com` |

(no trailing slash)

3. **Redeploy** the Vercel project (required so Vite bakes in the env var)

After that, signup/login on https://luminet-fitness.vercel.app/ talk to your real API.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Frontend only |
| `npm run server:dev` | API with file watch |
| `npm run dev:all` | Both concurrently |
| `npm run db:push` | Apply Prisma schema |
| `npm run build` | Production frontend build |

## Notes

- Dashboard routes require login.
- On first login, empty cloud data can import old browser `localStorage` once.
- Set a strong `JWT_SECRET` in production.
- Render free services may sleep after idle; the first request can take ~30s to wake.
