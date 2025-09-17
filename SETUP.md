# VisitABK - Setup Guide

## 🚀 Quick Start

This Bloomberg-style real estate tracker is ready to run! Follow these steps to get started:

## Prerequisites

### 1. Install Node.js
- Download from [https://nodejs.org/](https://nodejs.org/)
- Choose LTS version (18.x or higher)
- Verify: `node --version` and `npm --version`

### 2. Install Git
- Download from [https://git-scm.com/](https://git-scm.com/)
- Verify: `git --version`

## Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Supabase database:**
   - Go to [https://supabase.com](https://supabase.com)
   - Create new project
   - Run SQL scripts from `scripts/` folder:
     - `setup-database.sql` (creates tables)
     - `seed-data.sql` (adds sample data)

3. **Configure environment:**
   - Create `.env.local` file
   - Add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_MAPTILER_API_KEY=Pd85kmLr2NsBZ7APc3eK
   NEXT_PUBLIC_MAPTILER_STYLE_URL=https://api.maptiler.com/maps/streets-v2/style.json?key=Pd85kmLr2NsBZ7APc3eK
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## Features Included

✅ **14 Kobape Developments** - Complete database  
✅ **Bloomberg-style UI** - Dark theme, professional design  
✅ **Interactive Map** - MapTiler integration  
✅ **Search & Filter** - Find developments easily  
✅ **Comparison Tool** - Compare up to 3 developments  
✅ **News Feed** - Real-time updates  
✅ **Admin Dashboard** - Full CRUD operations  
✅ **Responsive Design** - Mobile-friendly  

## Database Schema

The application includes:
- **Developments table** - All development data
- **News updates table** - News and articles
- **Admin users table** - User management
- **Row Level Security** - Secure data access

## Deployment

### GitHub Setup
```bash
git init
git add .
git commit -m "Initial commit: Bloomberg-style real estate tracker"
git remote add origin https://github.com/ColourfulRhythm/visitabk.git
git push -u origin main
```

### Vercel Deployment
1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repository
3. Add environment variables
4. Deploy!

## Development Data

Pre-loaded with 14 Kobape developments:
- Oak Farms Estate
- Legend City  
- Cornwall Bay
- Itura Industrial
- Greenstone Garden
- FairView Estate
- Pelican Valley
- Hilltop City
- Infinity Estate
- Green City
- Swan Estate
- Royal Gardens
- Palm Springs
- Crystal Heights

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, TailwindCSS
- **Backend**: Supabase (PostgreSQL)
- **Maps**: MapTiler
- **UI**: shadcn/ui components
- **Deployment**: Vercel

## Support

If you encounter any issues:
1. Check that Node.js and Git are installed
2. Verify Supabase setup
3. Check environment variables
4. Review the console for errors

The application is production-ready and includes all requested features!
