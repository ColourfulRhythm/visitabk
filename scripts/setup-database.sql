-- Create developments table
CREATE TABLE IF NOT EXISTS developments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL DEFAULT 'Abeokuta',
  gps_lat DECIMAL(10, 8),
  gps_lng DECIMAL(11, 8),
  developer VARCHAR(255) NOT NULL,
  description TEXT,
  website VARCHAR(500),
  instagram VARCHAR(100),
  facebook VARCHAR(100),
  twitter VARCHAR(100),
  linkedin VARCHAR(100),
  youtube VARCHAR(100),
  email VARCHAR(255),
  phone VARCHAR(20),
  status VARCHAR(50) NOT NULL DEFAULT 'pre-launch' CHECK (status IN ('pre-launch', 'selling', 'under development', 'completed')),
  price_min INTEGER,
  price_max INTEGER,
  images TEXT[], -- Array of image URLs
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create news_updates table
CREATE TABLE IF NOT EXISTS news_updates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  content TEXT NOT NULL,
  source VARCHAR(255) NOT NULL,
  url VARCHAR(1000),
  development_id UUID REFERENCES developments(id) ON DELETE SET NULL,
  published_at TIMESTAMP WITH TIME ZONE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  tags TEXT[] DEFAULT '{}'
);

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_developments_status ON developments(status);
CREATE INDEX IF NOT EXISTS idx_developments_city ON developments(city);
CREATE INDEX IF NOT EXISTS idx_developments_developer ON developments(developer);
CREATE INDEX IF NOT EXISTS idx_news_development_id ON news_updates(development_id);
CREATE INDEX IF NOT EXISTS idx_news_published_at ON news_updates(published_at);

-- Enable Row Level Security (RLS)
ALTER TABLE developments ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to developments" ON developments
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to news" ON news_updates
  FOR SELECT USING (true);

-- Create policies for admin access (you'll need to implement authentication)
CREATE POLICY "Allow admin full access to developments" ON developments
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow admin full access to news" ON news_updates
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Allow admin full access to admin_users" ON admin_users
  FOR ALL USING (auth.role() = 'authenticated');
