# ProDiets — Next.js Project

## Overview
AI-powered nutrition & diet planning website built with Next.js 16 + TypeScript + Tailwind CSS.

## Quick Start
```bash
cd C:/Users/priya/Documents/prodiets
npm run dev        # Start dev server → http://localhost:3000
npm run build      # Production build
npm run start      # Start production server
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing redirect |
| `/app` | **Full ProDiets app** (via iframe → `public/prodiets-app.html`) |
| `/recipes` | Recipes section |
| `/tools` | Daily tracking tools |
| `/fitness` | Fitness plans |
| `/bmi` | BMI Calculator |
| `/profile` | Health profile |
| `/planner` | AI Diet Planner |

## File Structure
```
prodiets/
├── app/
│   ├── layout.tsx          ← Root layout + SEO metadata
│   ├── page.tsx            ← Root redirect
│   ├── globals.css         ← Global styles
│   ├── app/page.tsx        ← Main full-page app (iframe)
│   ├── recipes/page.tsx    ← Recipes route
│   ├── tools/page.tsx      ← Tools route
│   ├── fitness/page.tsx    ← Fitness route
│   ├── bmi/page.tsx        ← BMI route
│   ├── profile/page.tsx    ← Profile route
│   └── planner/page.tsx    ← Planner route
├── public/
│   └── prodiets-app.html   ← Enhanced ProDiets HTML (all features)
├── next.config.ts
└── package.json
```

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Syne + DM Sans (Google Fonts via next/font)
- **Runtime**: Node.js 24

## Static HTML (public/prodiets-app.html)
The full ProDiets app with all features:
- Cinematic intro screen
- AI Diet Plan generator
- 7-day meal planning table
- 50+ Indian recipes with modals
- Fitness exercise cards with SVG animations
- BMI calculator with macros
- Health questionnaire (7-step)
- Ingredient finder
- Daily tools (food tracker, water, fasting, weight log, streaks)
- AI nutrition chat
- Elite Ayurvedic mode
- Membership tiers
- Scroll reveal animations
- Mobile hamburger menu
- Testimonials + "How It Works" sections
- Professional footer

## Recommended Next Steps (see below)
1. Convert HTML sections into proper React components
2. Add API routes for AI chat integration
3. Add user authentication (NextAuth.js)
4. Add a real database (Prisma + PostgreSQL/Supabase)
5. Deploy to Vercel
