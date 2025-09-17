# Setup Instructions

## Prerequisites

Before running this application, you need to install the following:

### 1. Install Node.js
- Download Node.js from [https://nodejs.org/](https://nodejs.org/)
- Choose the LTS version (recommended)
- Run the installer and follow the setup wizard
- Verify installation by running `node --version` and `npm --version` in your terminal

### 2. Install Git (if not already installed)
- Download Git from [https://git-scm.com/](https://git-scm.com/)
- Follow the installation instructions
- Verify installation by running `git --version`

## Setup Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Supabase:**
   - Go to [https://supabase.com](https://supabase.com)
   - Create a new project
   - Go to Settings > API to get your project URL and anon key
   - Run the SQL scripts in the `scripts/` folder in your Supabase SQL editor

3. **Create environment file:**
   - Copy `.env.example` to `.env.local`
   - Fill in your Supabase credentials

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## Database Setup

1. In your Supabase dashboard, go to the SQL Editor
2. Run `scripts/setup-database.sql` to create tables
3. Run `scripts/seed-data.sql` to insert sample data

## Deployment

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit: Bloomberg-style real estate tracker"
   git push origin main
   ```

2. Deploy to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy!
