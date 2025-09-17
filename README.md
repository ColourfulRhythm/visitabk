# VisitABK - Real Estate Development Tracker

A Bloomberg-style real estate tracking application for Kobape, Abeokuta, Nigeria.

## Features

### Core Features
- **14 Kobape Real Estate Developments** - Comprehensive database of local developments
- **Interactive MapTiler Integration** - Visual map showing all development locations
- **Bloomberg-style Dark Theme** - Professional, terminal-like interface
- **Search & Filter Functionality** - Find developments by name, developer, status, price
- **Development Comparison Tool** - Compare up to 3 developments side-by-side
- **News Feed & Analytics** - Real-time updates and market insights

### Database Structure
- **Development Information**: Name, location, GPS coordinates, developer, description
- **Contact Details**: Website, social media handles, email, phone
- **Pricing Data**: Price ranges and market information
- **Status Tracking**: Pre-launch, selling, under development, completed
- **News Updates**: Scraped and manually added news with tagging

### Admin Dashboard
- **CRUD Operations** - Create, Read, Update, Delete developments
- **Bulk Import** - CSV/Excel import functionality
- **Image Management** - Upload logos, estate flyers, land layouts
- **News Management** - Add and manage news articles with development tagging
- **Analytics** - Track views, engagement, and market trends

### Frontend Features
- **Searchable List** - Filter and search all developments
- **Individual Profiles** - Detailed pages for each development
- **News Aggregation** - Centralized news feed from all sources
- **Interactive Map** - Visualize all estates by location
- **Comparison Tool** - Side-by-side development comparison

### Integrations
- **MapTiler API** - Interactive mapping and location services
- **Social Media APIs** - Instagram, Twitter, Facebook integration
- **News Scraping** - Google News and property blog integration
- **Supabase Backend** - Real-time database and authentication

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, TailwindCSS, shadcn/ui
- **Backend**: Supabase (PostgreSQL)
- **Maps**: MapTiler
- **Authentication**: Supabase Auth
- **Deployment**: Vercel

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file with:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   NEXT_PUBLIC_MAPTILER_API_KEY=Pd85kmLr2NsBZ7APc3eK
   NEXT_PUBLIC_MAPTILER_STYLE_URL=https://api.maptiler.com/maps/streets-v2/style.json?key=Pd85kmLr2NsBZ7APc3eK
   ```

3. **Set up Supabase database:**
   - Create a new Supabase project
   - Run the SQL scripts in `scripts/` folder:
     - `setup-database.sql` - Creates tables and policies
     - `seed-data.sql` - Inserts sample data

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## Deployment

### Vercel Deployment

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import this repository

2. **Add environment variables:**
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_MAPTILER_API_KEY`
   - `NEXT_PUBLIC_MAPTILER_STYLE_URL`

3. **Deploy!**

## Database Schema

### Developments Table
- `id` - UUID primary key
- `name` - Development name
- `location` - Full address
- `city` - City name (default: Abeokuta)
- `gps_lat`, `gps_lng` - GPS coordinates
- `developer` - Developer company
- `description` - Development description
- `website`, `instagram`, `facebook`, `twitter`, `linkedin`, `youtube` - Social links
- `email`, `phone` - Contact information
- `status` - Development status
- `price_min`, `price_max` - Price range
- `images` - Array of image URLs
- `created_at`, `updated_at` - Timestamps

### News Updates Table
- `id` - UUID primary key
- `title` - Article title
- `content` - Article content
- `source` - News source
- `url` - Article URL
- `development_id` - Foreign key to developments
- `published_at` - Publication date
- `created_at` - Record creation date
- `tags` - Array of tags

## Development Data

The application comes pre-loaded with 14 Kobape developments:

1. **Oak Farms Estate** - Premium residential estate
2. **Legend City** - Mixed-use development
3. **Cornwall Bay** - Waterfront luxury estate
4. **Itura Industrial** - Industrial park
5. **Greenstone Garden** - Eco-friendly community
6. **FairView Estate** - Family-oriented community
7. **Pelican Valley** - Luxury estate with golf course
8. **Hilltop City** - Elevated residential community
9. **Infinity Estate** - Smart home development
10. **Green City** - Sustainable development
11. **Swan Estate** - Elegant water-featured community
12. **Royal Gardens** - Premium royal-themed estate
13. **Palm Springs** - Resort-style community
14. **Crystal Heights** - High-rise residential towers

## API Endpoints

- `GET /api/developments` - List all developments
- `GET /api/developments/[id]` - Get specific development
- `POST /api/developments` - Create new development (admin)
- `PUT /api/developments/[id]` - Update development (admin)
- `DELETE /api/developments/[id]` - Delete development (admin)
- `GET /api/news` - List news updates
- `POST /api/news` - Create news update (admin)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support and questions, please contact the development team or create an issue in the repository.

---

**VisitABK** - Your comprehensive real estate development tracker for Kobape, Abeokuta, Nigeria.
