-- Insert Kobape developments data
INSERT INTO developments (name, location, city, gps_lat, gps_lng, developer, description, website, instagram, status, price_min, price_max) VALUES
('Oak Farms Estate', 'Kobape, Abeokuta', 'Abeokuta', 7.1574, 3.3481, 'Oak Properties Ltd', 'Premium residential estate with modern amenities and excellent facilities', 'https://oakfarms.com', '@oakfarms', 'selling', 1500000, 3500000),
('Legend City', 'Kobape, Abeokuta', 'Abeokuta', 7.1584, 3.3491, 'Legend Properties', 'Mixed-use development with commercial and residential units', 'https://legendcity.com', '@legendcity', 'under development', 2000000, 5000000),
('Cornwall Bay', 'Kobape, Abeokuta', 'Abeokuta', 7.1594, 3.3501, 'Cornwall Developments', 'Waterfront luxury estate with lake views and premium amenities', 'https://cornwallbay.com', '@cornwallbay', 'pre-launch', 1800000, 4000000),
('Itura Industrial', 'Kobape, Abeokuta', 'Abeokuta', 7.1604, 3.3511, 'Itura Industries', 'Industrial park with modern facilities for manufacturing and logistics', 'https://ituraindustrial.com', '@ituraindustrial', 'under development', 5000000, 15000000),
('Greenstone Garden', 'Kobape, Abeokuta', 'Abeokuta', 7.1614, 3.3521, 'Greenstone Properties', 'Eco-friendly residential community with sustainable building practices', 'https://greenstonegarden.com', '@greenstonegarden', 'completed', 1200000, 2800000),
('FairView Estate', 'Kobape, Abeokuta', 'Abeokuta', 7.1624, 3.3531, 'FairView Homes', 'Family-oriented community with excellent facilities and security', 'https://fairviewestate.com', '@fairviewestate', 'selling', 1600000, 3200000),
('Pelican Valley', 'Kobape, Abeokuta', 'Abeokuta', 7.1634, 3.3541, 'Pelican Properties', 'Luxury residential estate with golf course and recreational facilities', 'https://pelicanvalley.com', '@pelicanvalley', 'selling', 3000000, 8000000),
('Hilltop City', 'Kobape, Abeokuta', 'Abeokuta', 7.1644, 3.3551, 'Hilltop Developments', 'Elevated residential community with panoramic city views', 'https://hilltopcity.com', '@hilltopcity', 'under development', 2200000, 4500000),
('Infinity Estate', 'Kobape, Abeokuta', 'Abeokuta', 7.1654, 3.3561, 'Infinity Properties', 'Modern residential estate with smart home features', 'https://infinityestate.com', '@infinityestate', 'pre-launch', 1900000, 3800000),
('Green City', 'Kobape, Abeokuta', 'Abeokuta', 7.1664, 3.3571, 'Green City Ltd', 'Sustainable residential development with green technology', 'https://greencity.com', '@greencity', 'under development', 1400000, 3000000),
('Swan Estate', 'Kobape, Abeokuta', 'Abeokuta', 7.1674, 3.3581, 'Swan Properties', 'Elegant residential community with water features and landscaping', 'https://swanestate.com', '@swanestate', 'selling', 1700000, 3600000),
('Royal Gardens', 'Kobape, Abeokuta', 'Abeokuta', 7.1684, 3.3591, 'Royal Properties', 'Premium residential estate with royal-themed amenities', 'https://royalgardens.com', '@royalgardens', 'pre-launch', 2500000, 5500000),
('Palm Springs', 'Kobape, Abeokuta', 'Abeokuta', 7.1694, 3.3601, 'Palm Springs Ltd', 'Resort-style residential community with tropical landscaping', 'https://palmsprings.com', '@palmsprings', 'under development', 2000000, 4200000),
('Crystal Heights', 'Kobape, Abeokuta', 'Abeokuta', 7.1704, 3.3611, 'Crystal Properties', 'High-rise residential towers with modern amenities', 'https://crystalheights.com', '@crystalheights', 'pre-launch', 1800000, 4000000);

-- Insert sample news updates
INSERT INTO news_updates (title, content, source, url, development_id, published_at, tags) VALUES
('Oak Farms Estate Launches Phase 2 Development', 'Oak Properties Ltd announces the launch of Phase 2 of Oak Farms Estate, featuring 50 new luxury homes with modern amenities including smart home technology, swimming pools, and 24/7 security.', 'Property News Nigeria', 'https://propertynews.ng/oak-farms-phase2', (SELECT id FROM developments WHERE name = 'Oak Farms Estate'), '2024-01-20 10:00:00+01', ARRAY['Oak Farms', 'Development', 'Luxury']),
('Legend City Receives Planning Approval', 'The mixed-use development project has received final planning approval from Ogun State government, allowing construction to begin on the commercial and residential units.', 'Abeokuta Times', 'https://abeokutatimes.com/legend-city-approval', (SELECT id FROM developments WHERE name = 'Legend City'), '2024-01-18 14:30:00+01', ARRAY['Legend City', 'Planning', 'Approval']),
('Cornwall Bay Pre-Launch Event Draws 200+ Investors', 'The waterfront luxury estate pre-launch event was a huge success with over 200 potential investors in attendance. The event showcased the unique lake views and premium amenities.', 'Real Estate Weekly', 'https://realestateweekly.com/cornwall-bay-pre-launch', (SELECT id FROM developments WHERE name = 'Cornwall Bay'), '2024-01-15 16:00:00+01', ARRAY['Cornwall Bay', 'Pre-launch', 'Investors']),
('Greenstone Garden Wins Eco-Friendly Award', 'The residential community has been recognized for its sustainable building practices and green initiatives, receiving the Green Building Award from the Nigerian Environmental Society.', 'Green Building Magazine', 'https://greenbuildingmag.com/greenstone-award', (SELECT id FROM developments WHERE name = 'Greenstone Garden'), '2024-01-12 09:00:00+01', ARRAY['Greenstone Garden', 'Award', 'Eco-friendly']),
('Pelican Valley Golf Course Opens', 'The 18-hole golf course at Pelican Valley estate has officially opened, providing residents with world-class recreational facilities and attracting golf enthusiasts from across the region.', 'Sports & Leisure News', 'https://sportsleisure.com/pelican-valley-golf', (SELECT id FROM developments WHERE name = 'Pelican Valley'), '2024-01-10 11:00:00+01', ARRAY['Pelican Valley', 'Golf', 'Recreation']),
('Hilltop City Construction Progress', 'Construction at Hilltop City is progressing ahead of schedule with 60% completion achieved. The development promises panoramic city views and modern residential units.', 'Construction Weekly', 'https://constructionweekly.com/hilltop-progress', (SELECT id FROM developments WHERE name = 'Hilltop City'), '2024-01-08 13:00:00+01', ARRAY['Hilltop City', 'Construction', 'Progress']),
('Infinity Estate Smart Home Features', 'Infinity Estate introduces cutting-edge smart home technology including automated lighting, security systems, and energy management for all residential units.', 'Tech Property News', 'https://techproperty.com/infinity-smart-homes', (SELECT id FROM developments WHERE name = 'Infinity Estate'), '2024-01-05 15:30:00+01', ARRAY['Infinity Estate', 'Smart Homes', 'Technology']),
('Green City Solar Panel Installation', 'Green City development completes installation of solar panels across all residential units, making it the first fully solar-powered residential community in Abeokuta.', 'Renewable Energy Today', 'https://renewableenergy.com/green-city-solar', (SELECT id FROM developments WHERE name = 'Green City'), '2024-01-03 10:00:00+01', ARRAY['Green City', 'Solar', 'Renewable Energy']);

-- Update the updated_at timestamp trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_developments_updated_at BEFORE UPDATE ON developments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
